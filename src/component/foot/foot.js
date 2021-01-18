import React from "react";
import "materialize-css";
import "./foot.css"
export default function About(){

    function Year(){
        const date=new Date();
        const Year=date.getFullYear()
        return(Year);
    }


    return(
        <div>
       
 
       <footer class="page-footer">
          <div class="container">
            <div class="row">
              {/* <div class="col l4 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div> */}
              <div class="col l4  s12">
                <h5 class="white-text">Social Media</h5>
                <ul style={{display:"flex",justifyContent:"space-around",margin:"20px"}}>
                
                  <li><a target="black" href="https://developer.mozilla.org/en-US/" class="grey-text text-lighten-3" ><i class="fab fa-facebook fa-2x"></i></a></li>
                  <li><a target="black" href="https://developer.mozilla.org/en-US/docs/Web/Tutorials" class="grey-text text-lighten-3" ><i class="fab fa-linkedin fa-2x"></i></a></li>
                  <li><a target="black" href="https://developer.mozilla.org/en-US/docs/Learn/Forms" class="grey-text text-lighten-3" ><i class="fab fa-twitter fa-2x"></i></a></li>
                </ul>
              </div>
              <div class="col l4  s12">
                <h5 class="white-text">Quick Links</h5>
                <ul style={{display:"block-inline",justifyContent:"space-around",margin:"20px"}}>
                  <li><a class="grey-text text-lighten-3" href="#!">About The Journal</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Write Post</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">FAQ</a></li>
                </ul>
              </div>
              <div class="col l4  s12">
                <h5 class="white-text">Subscribe  </h5>
                <input  placeholder="Enter Your Email" type=""/>
                <button className="btn blue borderR">Subscribe</button>
                  
              </div>

            </div>
          </div>
          <div class="footer-copyright">
          
            <div class="container" style={{textAlign:"center",fontSize:"1.2rem",}}>
            <div >
                <h4>THE ENTREPRENEURSHIP CELL</h4>
          </div>
            © {Year()} All Rights Reserved By <span style={{color:"#fff",fontWeight:"bold"}}> E-CELL NIT Silchar</span> 
            </div>
          </div>
        </footer>
        </div>
    )
}