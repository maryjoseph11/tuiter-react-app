import {Link} from "react-router-dom";

function Nav() {
 return (
   <div>
     <Link to="/">Labs</Link> |
     <Link to="/hello">Hello</Link> |
     <Link to="/a7">Assignment 7</Link> |
     <Link to="/tuiter">Tuiter</Link> |
     <Link to="/tuiter/Profile/index.js">Profile</Link>
   </div>
 )
}

export default Nav;