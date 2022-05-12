import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login.jsx';
import SignUp from '../pages/signup/signup.jsx';
import Menu from '../pages/menu/menu.jsx'

//ROTA PRIVADA:
// const PrivateRoute = ({ children, redirectTo }) => {
//   const isAuthenticated = localStorage.getItem('token') !== null;
//   return isAuthenticated ? children : <Navigate to={redirectTo}/>
// };

const AllRoutes = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path = '/home' element = { <PrivateRoute redirectTo = '/'>
            <Home />
          </PrivateRoute>} /> */}
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AllRoutes;