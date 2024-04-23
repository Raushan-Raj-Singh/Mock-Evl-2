// PrivateRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ path, element }) => {
  const user = useSelector(state => state.user);
  console.log('User:', user);
  
  return user ? <Route path={path} element={element} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
