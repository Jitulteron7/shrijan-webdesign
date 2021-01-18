import React from "react";
import "./email.css"
const Email=()=>{
    return(
        <>
        <div id="contact" className="container row">
        <center><h4>Get In Touch With Us</h4> </center>
            <div className="col l6">
                <input type="" placeholder="name" />
                <input type="" placeholder="email" />
                <input type="" placeholder="subject" />
            </div>
            <div className=" input-field col l6">
            <textarea className="text"  rows="10" cols="50"  placeholder="message..." ></textarea>
            </div>
            <center><button className="btn blue">Submit</button></center>
        </div>
        </>
    )
}
export default Email;