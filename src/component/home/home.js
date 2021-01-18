import React from "react";
import Banner from "./banner/banner";
import About from "./about/about"
import Events from "./event/events"
import Extra from "./extra/extra";
import Person from "./person/person";
import Email from "./email/email"
const Home =()=>{
    return(
        <>
        <Banner/>
        <About/>
        <Events/>
        <Extra/>
        <Person/>
        <Email/>
        </>
    )
}
export default Home;