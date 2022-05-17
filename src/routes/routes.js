import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login.jsx';
import SignUp from '../pages/signup/signup.jsx';
import Menu from '../pages/menu/menu.jsx'
import PrivateRoute from './privateRoute'


const AllRoutes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          {/* <Route path='/menu' element={<Menu />} /> */}
          <Route path='/menu' element={<PrivateRoute redirectTo="/">
            <Menu /> 
          </PrivateRoute>} />
          </Routes>
      </div>
    </Router>
  );
}

export default AllRoutes;