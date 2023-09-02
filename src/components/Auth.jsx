import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { verifyAuth, abortAuth } from '../redux/actions/authActions';
import Modal from './modal';
const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/login?username=${username}&password=${password}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.isAuthenticated) {
          dispatch({ type: 'LOGIN' });
          dispatch(verifyAuth());
        } else {
          setShowModal(true);
          dispatch(abortAuth());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(abortAuth());
        setShowModal(true);
      });
  };

  return (
    <div id="capsule-search" className="flex flex-col items-center justify-center min-screen py-2">
      <Modal
        Title="Login"
        showModal={showModal}
        setShowModal={setShowModal}
        body={
          <>
            <p className="text-xl p-5 font-medium text-blue-800 dark:text-white">Incorrect username or password.</p>
          </>
        }
      />
      <h1 className="text-4xl font-bold text-center mb-8 text-3xl text-black-500 tracking-loose">Capsule Search</h1>
      <div className="flex flex-col items-center justify-center w-full px-4 py-8 sm:px-0">
        <div className="w-full max-w-xl px-4 py-8 sm:px-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:shadow-lg">
          <div className="w-full p-4 text-left">
            <p className="text-xl font-medium text-blue-800 dark:text-white">
              Sign in to your account to use the search
            </p>
            <label className="block text-sm mt-4 text-blue-200">{'>'} Hint: it rhymes with "Transform" </label>
            <form className="mt-4" onSubmit={handleSubmit}>
              <label className="block text-sm mt-4 text-blue-200" htmlFor="cus_email">
                Username
              </label>
              <input
                id="cus_email"
                type="text"
                name="cus_email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="JohnDoe123"
                className="block w-full px-4 py-3 mt-2 text-blue-700 bg-gray-200 border border-gray-300 rounded focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
              <label className="block mt-4 text-sm text-blue-200" htmlFor="cus_email">
                Password
              </label>
              <input
                id="cus_email"
                type="password"
                name="cus_email"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="block w-full px-4 py-3 mt-2 text-blue-700 bg-gray-200 border border-gray-300 rounded focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
