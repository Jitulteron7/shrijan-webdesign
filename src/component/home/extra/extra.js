import React from "react"
import "./extra.css"
import person1 from "../../img/person1.jpg"
import person2 from "../../img/person2.jpg"
import person3 from "../../img/person3.jpg"
// import person1 from "../../../img/person1.jpg"
// import person1 from "../../../img/person1.jpg"
// import person1 from "../../../img/person1.jpg"
const Extra =()=>{
    
    return(
        <>
        <div id="team"  className="extra">
        <center><h3 className="exheader">Our Team </h3></center>
            <div class="row">
            <br/>
                    <div class="col l4 s12 m6">
                    <div class="card">
                        <div class="card-image">
                        <img src={person1} />
                        <span class="card-title">Person1</span>
                        </div>
                        <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>    
                    </div>
                    </div>
                    <div class="col l4 s12 m6">
                    <div class="card">
                        <div class="card-image">
                        <img src={person2} />
                        <span class="card-title">Person2</span>
                        </div>
                        <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                    </div>
                    <div class="col l4 s12 m6">
                    <div class="card">
                        <div class="card-image">
                        <img src={person3} />
                        <span class="card-title">Person3</span>
                        </div>
                        <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                    </div>
                    {/* <div class="col l4 s12 m6">
                    <div class="card">
                        <div class="card-image">
                        <img src={person3} />
                        <span class="card-title">Person3</span>
                        </div>
                        <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                    </div> */}
                    <div class="col l6 s12 m6">
                    <div class="card">
                        <div class="card-image">
                        <img src={person3} />
                        <span class="card-title">Person3</span>
                        </div>
                        <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                    </div>
                    <div class="col l6 s12 m6">
                    <div class="card">
                        <div class="card-image">
                        <img src={person3} />
                        <span class="card-title">Person3</span>
                        </div>
                        <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Extra