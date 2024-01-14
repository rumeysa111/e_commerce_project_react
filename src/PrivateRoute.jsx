import React from 'react';
import { Navigate } from 'react-router-dom'; // Navigate'yi import et

export default function PrivateRoute({ user, children }) {
  if (!user?.id) {
    return <Navigate to="/Login" replace />; // useNavigate hook'unu kullan
  }
  return children;
}
