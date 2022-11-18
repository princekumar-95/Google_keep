import React from "react";
import download from './images/download.png';
const Header=()=>{
      
return( 
  <>
      <div className="header">
       <img src={download} alt="logo" height='50' width='70'/>
       <h1> Google keep</h1>
      </div>
      
   </> 
   
  )
};
export default Header;