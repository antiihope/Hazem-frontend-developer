import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';

import SearchForm from './components/search';
import { useEffect } from 'react';
import Login from './components/Auth';
import { verifyAuth, abortAuth } from './redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

function MyComponent() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.isAuthenticated);

  useEffect(() => {
    fetch('/api/isAuthenticated')
      .then((res) => res.json())
      .then((data) => {
        if (data.isAuthenticated) {
          dispatch(verifyAuth());
        } else {
          dispatch(abortAuth());
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(abortAuth());
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Navbar />
      <div className="App">
        <Hero />
        {loggedIn ? <SearchForm /> : <Login />}
      </div>
      <div className="absolute container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a
            className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-blue-300"
            href="#"
          >
            <h1>Rocket Science</h1>
          </a>
        </div>
      </div>
    </>
  );
}

export default MyComponent;
