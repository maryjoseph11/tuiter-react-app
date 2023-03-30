import React from "react";
import TuitsList from "../tuits/index.js";
import "./index.css";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
 return(
   <>
     <WhatsHappening/>
     <TuitsList/>
   </>
 );
};
export default HomeComponent;