/* eslint-disable react/prop-types */

// A reusable Modal component

export default function Modal({ Title, showModal, setShowModal, body }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="p-6 border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-slate-900 outline-none focus:outline-none border-slate-500 border-b-2 bg-opacity-100 bg-gradient-to-b from-slate-900 to-slate-blue">
                <div className="flex items-start justify-between uppercase p-2 border-b border-solid border-slate-500 p-5 rounded-t ">
                  <h3 className="text-xl font-semibold text-gray-300">{Title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                {body}
                {/*footer*/}
                <div className="flex items-center justify-end p-1 border-slate-200 rounded-b">
                  <button
                    className="text-slate-200 background-transparent font-bold uppercase px-6 py-2 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
