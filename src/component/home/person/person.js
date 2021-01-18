import React,{cloneElement, useEffect, useRef} from "react"
import "./person.css"
import M from "materialize-css";
import imgperson from "../../img/person.jpg"
const Person =()=>{
    const slidebro=useRef(null)
    useEffect(()=>{
        
        M.Slider.init(slidebro.current)
    },[])
    return(
        <>
   <div id="guest" className="person">
   <br/>
   <h3 className="slideHeader">Our Guest of Honours</h3>
 <div ref={slidebro} class="slider">
 
    <ul  class="slides">
      <li>
      <center>
        <img className="slideimg" src="https://hindi.cdn.zeenews.com/hindi/sites/default/files/2020/04/19/543991-mukesh.gif"/>  
        <div class="caption center-align">
          <h3 className="name" >Indian business tycoon</h3>
          <h5 class="light grey-text text-lighten-3">Indian business tycoon.</h5>
        </div>
        </center>
      </li>
      <li>
      <center>
        <img className="slideimg" src="https://thelogicalindian.com/h-upload/2020/05/13/172953-azim-premjifb.jpg"/>  
        <div class="caption center-align">
          <h3 className="name">Azim Premji</h3>
          <h5 class="light grey-text text-lighten-3">Indian business tycoon.</h5>
        </div>
        </center>
      </li>
      <li>
      <center>
        <img className="slideimg" src="https://www.forbesindia.com/media/images/2018/Nov/img_110467_lakshmimittal.jpg"/>  
        <div class="caption center-align">
          <h3 className="name">Lakshmi Mittal</h3>
          <h5 class="light grey-text text-lighten-3">CEO of ArcelorMittal.</h5>
        </div>
        </center>
      </li>
      <li>
      <center>
        <img className="slideimg" src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Gautam_Adani.jpg"/>  
        <div class="caption center-align">
          <h3 className="name">Gautam Adani</h3>
          <h5 class="light grey-text text-lighten-3">Gautam Adani.</h5>
        </div>
        </center>
      </li>
    </ul>
  </div>
                <div className="overlay1">
                </div>
                
            </div>
            
        </>
    )
}
export default Person;