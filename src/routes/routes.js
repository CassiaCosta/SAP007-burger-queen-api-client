import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login.jsx';
import SignUp from '../pages/signup/signup.jsx';
import Menu from '../pages/menu/menu.jsx';
import PrivateRoute from './privateRoute';
import Kitchen from '../pages/kitchen/kitchen.jsx';

// const AllRoutes = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path='/' element={<Login />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/signup' element={<SignUp />} />
//           <Route path='/menu' element={<Menu />} />
//           <Route path='/kitchen' element={<Kitchen />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

const AllRoutes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/kitchen' element={<Kitchen />} />
          <Route path='/menu' element={<PrivateRoute redirectTo="/">
            <Menu /> 
          </PrivateRoute>} />
          </Routes>
      </div>
    </Router>
  );
}

export default AllRoutes;