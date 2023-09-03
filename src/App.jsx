import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import SearchForm from './components/SearchForm';
import Login from './components/Auth';
import Footer from './components/Footer';

import { useEffect } from 'react';
import { verifyAuth, abortAuth } from './redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
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
      <Footer />
    </>
  );
}

export default App;
