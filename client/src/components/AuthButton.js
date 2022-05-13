import React, { useContext } from 'react';
import { Navigate, Link } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

function AuthButton () {
  const auth = useContext(AuthContext);

  if(!auth.isAuthenticated) {
    //return <Link className="btn btn-primary" to="/login">Login</Link>;
    return (
    <div className = "loginBtn">
      <Link className="btn btn-primary" to="/login">Login</Link>;
    </div>
    )
  }

  const logout = () => {
    auth.signout().then(() => {
        <Navigate to="/"/>
    });
  }

  return (
    <div className="loginBtn logout">
      <p className="text-left"> Welcome {auth.user.firstName} {" "}!</p>
      <button className="btn btn-primary" onClick={logout}>Logout</button>
    </div>
  );
};

export default AuthButton;