import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Logout = () => {
 
  useEffect(() => {
    // get handleLogout call back from context
  
    const {handleLogout} =usecontex(AuthContext)
  }, []);
  return (
    <>
      <h3>
        User logged out succesfully click here to <Link to="/login">Login</Link>
      </h3>
    </>
  );
};

export { Logout };
