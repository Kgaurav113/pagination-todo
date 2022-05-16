import React from "react";

export const Navbar = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "black", color: "white", display: "flex" }}
      >
        <div style={{margin:"auto",fontWeight:"bold"}}>LOGOBEKARY</div>
        <div style={{  display: "flex",margin:"auto" ,gap:"20px"}}>
          <div>
            <p>Services</p>
          </div>
          <div>
            <p>Projects</p>
          </div>
          <div>
            <p>About</p>
          </div>
        </div>

        <div style={{backgroundColor:"blue",paddingRight:"30px",borderRadius:"12px", margin:"auto",textAlign:"center", padding:"5px"}}>Contact</div>
      </div>
    </div>
  );
};
