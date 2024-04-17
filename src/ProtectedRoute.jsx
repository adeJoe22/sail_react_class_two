import React, { useContext } from 'react';
import { FormDataContext } from './context/GlobalContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { formData } = useContext(FormDataContext);

  return !formData ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
