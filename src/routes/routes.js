import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login.jsx';
import SignUp from '../pages/signup/signup.jsx';

const AllRoutes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AllRoutes;