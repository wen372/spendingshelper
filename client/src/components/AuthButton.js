import React, { useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

function AuthButton () {
  const auth = useContext(AuthContext);

  if(!auth.isAuthenticated) {
    return <Link className="btn btn-primary" to="/login">Login</Link>;
  }

  const logout = () => {
    auth.signout().then(() => {
        <Navigate to="/"/>
    });
  }

  return (
    <div className="text-white">
      Welcome! {auth.user.firstName} {" "}
      <button className="btn btn-primary" onClick={logout}>Logout</button>
    </div>
  );
};

export default AuthButton;