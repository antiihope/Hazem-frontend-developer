import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './modal';

const CapsuleSearch = () => {
  const [status, setStatus] = useState('');
  const [originalLaunch, setOriginalLaunch] = useState('');
  const [type, setType] = useState('');
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the results array to display only the items for the current page
  const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);

  // Define the function to fetch data from the API
  const fetchData = async () => {
    try {
      // Construct the query parameters based on the filters
      let params = {};
      if (status) params.status = status;
      if (originalLaunch) params.original_launch = originalLaunch;
      if (type) params.type = type;

      const response = await axios.get('/api/capsules', {
        params,
      });

      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Use useEffect hook to fetch data when the component mounts or the filters change
  useEffect(() => {
    setCurrentPage(1); // Reset the current page to 1 when the filters change
    fetchData();
  }, [status, originalLaunch, type]); // eslint-disable-line react-hooks/exhaustive-deps

  // function to handle the change of the status filter
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  // function to handle the change of the original launch filter
  const handleOriginalLaunchChange = (event) => {
    setOriginalLaunch(event.target.value);
  };

  // function to handle the change of the type filter
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  // function to handle page changes
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // State for showing the modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Data for the selected capsule (to be passed to the modal)
  const [selectedCapsule, setSelectedCapsule] = useState(null);

  // Function to open the modal and set selected capsule data
  const openModal = (capsule) => {
    setSelectedCapsule(capsule);
    setIsModalVisible(true);
  };

  return (
    <div id="capsule-search" className="capsule-search min-h-screen p-4 ">
      <h1 className="text-4xl font-bold text-center mb-8 text-3xl text-stone-200 tracking-loose">Capsule Search</h1>
      <p className="text-lg text-stone-300 mb-4">Use the filters below to search capsules using the SpaceX API.</p>
      <div className="filters flex flex-wrap justify-center gap-4 mb-8 text-white">
        <div className="flex items-center">
          <label htmlFor="status" className="text-stone-300 mr-2">
            Status:
          </label>
          <select
            id="status"
            value={status}
            onChange={handleStatusChange}
            className="border border-gray-300 rounded-md p-2 bg-slate-800"
          >
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="retired">Retired</option>
            <option value="unknown">Unknown</option>
            <option value="destroyed">Destroyed</option>
          </select>
        </div>
        <div className="flex items-center">
          <label htmlFor="original-launch" className="text-stone-300 mr-2">
            Original Launch:
          </label>
          <input
            id="original-launch"
            type="date"
            value={originalLaunch}
            onChange={handleOriginalLaunchChange}
            className="border border-gray-300 rounded-md p-2 bg-slate-800"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="type" className="text-stone-300 mr-2">
            Type:
          </label>
          <select
            id="type"
            value={type}
            onChange={handleTypeChange}
            className="border border-gray-300 rounded-md p-2 bg-slate-800"
          >
            <option value="">All</option>
            <option value="Dragon 1.0">Dragon 1.0</option>
            <option value="Dragon 1.1">Dragon 1.1</option>
            <option value="Dragon 2.0">Dragon 2.0</option>
          </select>
        </div>
      </div>
      {/* pagination */}
      <div className="flex justify-center mt-4 p-2">
        {results.length > itemsPerPage && (
          <ul className="flex">
            {Array.from({ length: Math.ceil(results.length / itemsPerPage) }).map((_, index) => (
              <li
                key={index}
                className={`mr-2 ${
                  currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'
                } rounded-full px-3 py-1 cursor-pointer`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="results grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.length > 0 ? (
          currentItems.map((capsule) => (
            <div
              key={capsule.capsule_serial}
              className="capsule bg-slate-900 drop-shadow-2xl rounded-lg p-4 cursor-pointer text-stone-400"
              onClick={() => openModal(capsule)}
            >
              <h2 className="text-xl font-bold text-gray-300 mb-2">Capsule ID: {capsule.capsule_id}</h2>
              <p className="text-red-200 mb-1">Serial: {capsule.capsule_serial}</p>
              <p className="mb-1 uppercase">Status: {capsule.status}</p>
              <p className="mb-1">Original Launch: {capsule.original_launch}</p>
              <p className="mb-1">Type: {capsule.type}</p>
              <p className="mb-1">Landings: {capsule.landings}</p>
              <p className="mb-1">Reuse Count: {capsule.reuse_count}</p>
            </div>
          ))
        ) : (
          <p className="text-lg col-span-full text-center">No results found.</p>
        )}
      </div>

      {/* pagination */}
      <div className="flex justify-center mt-4">
        {results.length > itemsPerPage && (
          <ul className="flex">
            {Array.from({ length: Math.ceil(results.length / itemsPerPage) }).map((_, index) => (
              <li
                key={index}
                className={`mr-2 ${
                  currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'
                } rounded-full px-3 py-1 cursor-pointer`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        )}
      </div>

      {isModalVisible && (
        <Modal
          Title={selectedCapsule.capsule_id}
          showModal={isModalVisible}
          setShowModal={setIsModalVisible}
          body={
            selectedCapsule && (
              <div className="text-lg p-3">
                <p className="text-stone-300 mb-1 uppercase">Status: {selectedCapsule?.status}</p>
                <p className="text-stone-300 mb-1">Detail: {selectedCapsule?.details}</p>
                <p className="text-stone-300 mb-1">Original Launch: {selectedCapsule?.original_launch}</p>
                <p className="text-stone-300 mb-1">Type: {selectedCapsule?.type}</p>
                <p className="text-stone-300 mb-1">Landings: {selectedCapsule?.landings}</p>
                <p className="text-stone-300 mb-1">Reuse Count: {selectedCapsule?.reuse_count}</p>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <p className="text-stone-300 mb-1">Serial: {selectedCapsule?.capsule_serial}</p>
                <p className="text-stone-300 mb-1">Capsule ID: {selectedCapsule?.capsule_id}</p>
                <p className="text-stone-300 mb-1">Original Launch Unix: {selectedCapsule?.original_launch_unix}</p>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                <p className="text-stone-300 mb-1">Mission Flight: {selectedCapsule?.missions[0]?.flight}</p>
                <p className="text-stone-300 mb-1">Mission Name: {selectedCapsule?.missions[0]?.name}</p>
              </div>
            )
          }
        />
      )}
    </div>
  );
};

export default CapsuleSearch;
