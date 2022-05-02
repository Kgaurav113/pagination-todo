 import {Link} from "react-router-dom";
 const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 ,gap:"20px",margin:"20px"}}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <Link to ='./Home'>Home</Link>
      <Link to ='./About'>About</Link>
      <Link to ='./Products'>Products</Link>
      <Link to ='./products/men'>Men</Link>
      <Link to ='./products/women'>Women</Link>
      <Link to ='./products/kids'>Kids</Link>
      <Link to ='./products/homedecor'>Home Decor</Link>
    </nav>
  );
};
export {Navbar};