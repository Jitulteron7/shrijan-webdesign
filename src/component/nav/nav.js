import React,{useEffect,useRef} from "react";
import "./nav.css"
import M from "materialize-css"
import logo from "../img/logo.png"
import {Link as Yo} from "react-scroll"
const Navbar=()=>{
 
const  scrollFunction=()=>{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("nav").style.backgroundColor = "#fff";
    document.querySelector(".view").style.display = "block";
    document.querySelector(".brand-logo").style.color = "#000";
   
   

  } else {
    document.querySelector("nav").style.backgroundColor = "transparent";
    document.querySelector(".view").style.display = "none";
    document.querySelector(".brand-logo").style.color = "#fff";
   
  }
}
    const sidebar=useRef()
    useEffect(()=>{
        M.Sidenav.init(sidebar.current)
        window.onscroll =()=>{
            scrollFunction()};
    })
    return(
        <>     
  <nav  className="navbar">
    <div className="nav-wrapper ">
    <img className="brand-img" src={logo}/>
      <a href="#!" className="brand-logo">
       NITS E-Cell</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down view">
        <li><Yo to="#" smooth={true} href="sass.html">Home</Yo></li>
        <li><Yo smooth={true} to="about">About Us</Yo></li>
        <li><Yo smooth={true} to="events">Events</Yo></li>
        <li><Yo smooth={true} to="team">Our Team</Yo></li>
        <li><Yo smooth={true} to="guest">Guest of Honours</Yo></li>
        <li><Yo smooth={true} to="contact">Contact Us</Yo></li>
        
      </ul>
    </div>
  </nav>

  <ul ref={sidebar} className="sidenav view" id="mobile-demo">
        <li className="mainside">
          <center><img style={{width:"150px",height:"150px"}} src={require("../img/logo.png")} />
          </center>
        </li>
        <li><Yo onClick={()=>{M.Sidenav.getInstance(sidebar.current).close()}} to="#" smooth={true} href="sass.html">Home</Yo></li>
        <li><Yo onClick={()=>{M.Sidenav.getInstance(sidebar.current).close()}} smooth={true} to="about">About Us</Yo></li>
        <li><Yo onClick={()=>{M.Sidenav.getInstance(sidebar.current).close()}} smooth={true} to="events">Events</Yo></li>
        <li><Yo onClick={()=>{M.Sidenav.getInstance(sidebar.current).close()}} smooth={true} to="team">Our Team</Yo></li>
        <li><Yo onClick={()=>{M.Sidenav.getInstance(sidebar.current).close()}} smooth={true} to="guest">Guest of Honours</Yo></li>
        <li><Yo onClick={()=>{M.Sidenav.getInstance(sidebar.current).close()}} smooth={true} to="contact">Contact Us</Yo></li>
    
  </ul>
        </>
    )
}
export default Navbar;