import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../component/LandingPage/LandingPage';
import LoginPage from '../component/LoginPage/LoginPage';
import axios from 'axios';
import NavBar from '../component/NavBar/NavBar';
import useGetProfile from '../hooks/useGetProfile';

function App() {
  const getProfile = useGetProfile();

  useEffect(() => {
    axios.get('/init');
    let accessToken = localStorage.getItem('accessToken');
    getProfile(accessToken);
  }, []);

  return (
    <div className="flex">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
