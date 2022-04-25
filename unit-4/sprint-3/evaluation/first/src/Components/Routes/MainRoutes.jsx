import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About";
import Books from "../pages/Books";
import { EditBookData } from "../pages/EditBookData";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Navbar } from "../pages/Navbar";
import { SingleBook } from "../pages/SingleBook";
// import { RequiredAuth } from "./RequiredAuth";

const Mainroutes = () => {
  return (
    <>
      <Navbar />
      <About/>
       <Home/>
       <EditBookData/>
       <Login/>
       <Logout/>
       <SingleBook/>
       
      <Routes>
       {/* keep all the routes here  */}
      
      <Route path ="/" element={ <Books/>}>
       </Route>
       {/* /books/* route need to be protected */}
      </Routes>
    </>
  );
};
export default Mainroutes;
