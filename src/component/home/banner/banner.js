import React from "react";
import "./banner.css"
import imgsp from "../../img/ecell.jpg";
const Banner =()=>{
    return(
        <div>
        <div className="banner">
        <img className="bannerimgsp" src={imgsp} />
         <div>
                <h1 className="header">Srijan 1.0</h1>
         </div>
        </div>
        </div>
    )
}
export default Banner;