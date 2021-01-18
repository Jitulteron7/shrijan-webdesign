import React,{useEffect,useRef} from "react"
import "./events.css"
import M from "materialize-css"

const Event=()=>{
    const modal1=useRef(null)
    const modal2=useRef(null)
    const modal3=useRef(null)
    const modal4=useRef(null)
    const modal5=useRef(null)
    const modal6=useRef(null)
    const modal7=useRef(null)
    const modal8=useRef(null)
    const modal9=useRef(null)
    const modal10=useRef(null)
    const modal12=useRef(null)
    const modal11=useRef(null)
    const modal13=useRef(null)
    const modal14=useRef(null)
    useEffect(()=>{
        M.Modal.init(modal1.current)
        M.Modal.init(modal2.current)
        M.Modal.init(modal3.current)
        M.Modal.init(modal4.current)
        M.Modal.init(modal5.current)
        M.Modal.init(modal6.current)
        M.Modal.init(modal7.current)
        M.Modal.init(modal8.current)
        M.Modal.init(modal9.current)
        M.Modal.init(modal10.current)
        M.Modal.init(modal11.current)
        M.Modal.init(modal12.current)
        M.Modal.init(modal13.current)
        M.Modal.init(modal14.current)
    })
    return(
        <>
        <div id="events" className=" continer ">
        
        <div className="row background ">
            <div className="col l12">
            <div className="titlehead ">
                    Events
                </div>
                <div className="title ">
                   1. Empressario  Module  in Tecnoesis   <i class="fas fa-crown"></i>
                </div>
              
                <div className="events row">
                    <div className="col l3 s12 m6">
                        <div className="card ">
                            <div className="boxhead">
                                Pitch Please
                            </div>
                      <center>  <button class="  btn modal-trigger blue" href="#modal1">View</button></center>
                       
                        </div>
                </div>
                    <div className="col l3 s12 m6">
                    <div className="card ">
                        <div className="boxhead">
                        If I were the CEO
                        </div>
                        <div className="iconbox">
                            
                        </div>
                        <center>  <button class=" btn modal-trigger blue" href="#modal2">View</button></center>
                    </div>
                    </div>
                    <div className="col l3 s12 m6">
                    <div className="card ">
                        <div className="boxhead">
                        Bech Ke Dikhao
                        </div>
                        <center>  <button class=" btn modal-trigger blue" href="#modal3">View</button></center>
                    </div>
                    </div>
                    <div className="col l3 s12 m6">
                    <div className="card ">
                        <div className="boxhead">
                        Adovation
                        </div>
                        <center>  <button class=" btn modal-trigger blue" href="#modal4">View</button></center>
                    </div>
                    </div>
                    <div className="col l3 s12 m6">
                    <div className="card ">
                        <div className="boxhead">
                        Wolf Of Wall Street
                        </div>
                        <center>  <button class=" btn modal-trigger blue" href="#modal5">View</button></center>
                    </div>
                    </div>
                </div>
                <br/><br/>
                <div className="title ">
                   2.  Srijan 1.0 <i class="fas fa-user-tie"></i>
                </div>
                <div className="events row">
                <div className="col l3 s12 m6">
                <div className="card ">
                        <div className="boxhead">
                        Guest Lectures
                        </div>
                        <center>  <button class="  btn modal-trigger blue" href="#modal7">View</button></center>
                    </div> 
                </div>
                    <div className="col l3 s12 m6">
                    <div className="card ">
                        <div className="boxhead">
                        Pitching Competition
                        </div>
                        <div className="iconbox">
                            
                        </div>
                        <center>  <button class=" btn modal-trigger blue" href="#modal8">View</button></center>
                    </div>
                    </div>
                    <div className=" col l3 s12 m6">
                    <div className="card ">
                        <div className="boxhead">
                        Board Room
                        </div>
                        <center>  <button class=" btn modal-trigger blue" href="#modal9">View</button></center>
                    </div>
                    </div>
                    <div className="col l3 s12 m6">
                    <div className="card ">
                        <div className="boxhead">
                        Business Model Canvas Competition

                        </div>
                        <center>  <button class=" btn modal-trigger blue" href="#modal10">View</button></center>
                    </div>
                    </div>
                    <div className="col l3 s12 m6">
                    <div className="card ">
                        <div className="boxhead">
                        Stock Market Workshop
                        </div>
                        <center>  <button class=" btn modal-trigger blue" href="#modal11">View</button></center>
                    </div>
                    </div>
                    <div className="col l3 s12 m6">
                    <div className="card ">
                        <div className="boxhead">
                        Business Quiz
                        </div>
                        <center>  <button class=" btn modal-trigger blue" href="#modal12">View</button></center>
                    </div>
                    </div>
                    <div className="col l3 s12 m6">
                    <div className="card ">
                        <div className="boxhead">
                        IPL Auction
                        </div>
                        <center>  <button class=" btn modal-trigger blue" href="#modal13">View</button></center>
                    </div>
                    </div>
                    <div className="col l3 s12 m6">
                    <div className="card ">
                        <div className="boxhead">
                        Comedy Night
                        </div>
                        <center>  <button class=" btn modal-trigger blue" href="#modal14">View</button></center>
                    </div>
                    </div>
                    
                    
                </div>
                
                
            </div>
            
            <div className="overlay">

            </div>
            
        </div>
        {/* modal1 */}
        <div ref={modal1} id="modal1" class="modal">
                        <div class="modal-content">
                            <h4>Pitch Please</h4>
                            <p>

                            <div>
                            Business is the activity of making one's living or making money by producing or buying and selling products (such as goods and services).[1][2][need quotation .
                            </div>
                            <div>
                            A corporate tax, also called corporation tax or company tax, is a direct tax imposed by a jurisdiction on the income or capital of corporations or analogous legal entities.  
                            </div>
                        </p>
                        </div>
                        <div class="modal-footer">
                            <a  class="modal-close  waves-green btn-flat">Done</a>
                        </div>
                        </div>
                        <div ref={modal2} id="modal2" class="modal">
                        <div class="modal-content">
                            <h4>If I were the CEO</h4>
                            <p>

                            <div>
                            Business is the activity of making one's living or making money by producing or buying and selling products (such as goods and services).[1][2][need quotation .
                            </div>
                            <div>
                            A corporate tax, also called corporation tax or company tax, is a direct tax imposed by a jurisdiction on the income or capital of corporations or analogous legal entities.  
                            </div>
                        </p>
                        </div>
                        <div class="modal-footer">
                            <a  class="modal-close  waves-green btn-flat">Done</a>
                        </div>
                        </div>
                        <div ref={modal3} id="modal3" class="modal">
                        <div class="modal-content">
                            <h4>Bech Ke Dikhao</h4>
                            <p>

                            <div>
                            Business is the activity of making one's living or making money by producing or buying and selling products (such as goods and services).[1][2][need quotation .
                            </div>
                            <div>
                            A corporate tax, also called corporation tax or company tax, is a direct tax imposed by a jurisdiction on the income or capital of corporations or analogous legal entities.  
                            </div>
                        </p>
                        </div>
                        <div class="modal-footer">
                            <a  class="modal-close  waves-green btn-flat">Done</a>
                        </div>
                        </div>
                        <div ref={modal4} id="modal4" class="modal">
                        <div class="modal-content">
                            <h4>Adovation</h4>
                            <p>

                            <div>
                            Business is the activity of making one's living or making money by producing or buying and selling products (such as goods and services).[1][2][need quotation .
                            </div>
                            <div>
                            A corporate tax, also called corporation tax or company tax, is a direct tax imposed by a jurisdiction on the income or capital of corporations or analogous legal entities.  
                            </div>
                        </p>
                        </div>
                        <div class="modal-footer">
                            <a  class="modal-close  blue btn-flat">Done</a>
                        </div>
                        </div>
                        <div ref={modal5} id="modal5" class="modal">
                        <div class="modal-content">
                            <h4>Wolf Of Wall Street</h4>
                            <p>

                            <div>
                            Business is the activity of making one's living or making money by producing or buying and selling products (such as goods and services).[1][2][need quotation .
                            </div>
                            <div>
                            A corporate tax, also called corporation tax or company tax, is a direct tax imposed by a jurisdiction on the income or capital of corporations or analogous legal entities.  
                            </div>
                        </p>
                        </div>
                        <div class="modal-footer">
                            <a  class="modal-close  waves-green btn-flat">Done</a>
                        </div>
                        </div>
                        <div ref={modal7} id="modal7" class="modal">
                        <div class="modal-content">
                            <h4>Guest Lecture</h4>
                            <p>

                            <div>
                            Business is the activity of making one's living or making money by producing or buying and selling products (such as goods and services).[1][2][need quotation .
                            </div>
                            <div>
                            A corporate tax, also called corporation tax or company tax, is a direct tax imposed by a jurisdiction on the income or capital of corporations or analogous legal entities.  
                            </div>
                        </p>
                        </div>
                        <div class="modal-footer">
                            <a  class="modal-close  waves-green btn-flat">Done</a>
                        </div>
                        </div>
                        <div ref={modal8} id="modal8" class="modal">
                        <div class="modal-content">
                            <h4>Pitching Competition</h4>
                            <p>

                            <div>
                            Business is the activity of making one's living or making money by producing or buying and selling products (such as goods and services).[1][2][need quotation .
                            </div>
                            <div>
                            A corporate tax, also called corporation tax or company tax, is a direct tax imposed by a jurisdiction on the income or capital of corporations or analogous legal entities.  
                            </div>
                        </p>
                        </div>
                        <div class="modal-footer">
                            <a  class="modal-close  waves-green btn-flat">Done</a>
                        </div>
                        </div>
                        <div ref={modal9} id="modal9" class="modal">
                        <div class="modal-content">
                            <h4>Board Room</h4>
                            <p>

                            <div>
                            Business is the activity of making one's living or making money by producing or buying and selling products (such as goods and services).[1][2][need quotation .
                            </div>
                            <div>
                            A corporate tax, also called corporation tax or company tax, is a direct tax imposed by a jurisdiction on the income or capital of corporations or analogous legal entities.  
                            </div>
                        </p>
                        </div>
                        <div class="modal-footer">
                            <a  class="modal-close  waves-green btn-flat">Done</a>
                        </div>
                        </div>
                        <div ref={modal10} id="modal10" class="modal">
                        <div class="modal-content">
                            <h4>Business Model Canvas Competition</h4>
                            <p>

                            <div>
                            Business is the activity of making one's living or making money by producing or buying and selling products (such as goods and services).[1][2][need quotation .
                            </div>
                            <div>
                            A corporate tax, also called corporation tax or company tax, is a direct tax imposed by a jurisdiction on the income or capital of corporations or analogous legal entities.  
                            </div>
                        </p>
                        </div>
                        <div class="modal-footer">
                            <a  class="modal-close  waves-green btn-flat">Done</a>
                        </div>
                        </div>
                        <div ref={modal11} id="modal11" class="modal">
                        <div class="modal-content">
                            <h4>Stock Market Workshop</h4>
                            <p>

                            <div>
                            Business is the activity of making one's living or making money by producing or buying and selling products (such as goods and services).[1][2][need quotation .
                            </div>
                            <div>
                            A corporate tax, also called corporation tax or company tax, is a direct tax imposed by a jurisdiction on the income or capital of corporations or analogous legal entities.  
                            </div>
                        </p>
                        </div>
                        <div class="modal-footer">
                            <a  class="modal-close  waves-green btn-flat">Done</a>
                        </div>
                        </div>
                        <div ref={modal12} id="modal12" class="modal">
                        <div class="modal-content">
                            <h4>Business Quiz</h4>
                            <p>

                            <div>
                            Business is the activity of making one's living or making money by producing or buying and selling products (such as goods and services).[1][2][need quotation .
                            </div>
                            <div>
                            A corporate tax, also called corporation tax or company tax, is a direct tax imposed by a jurisdiction on the income or capital of corporations or analogous legal entities.  
                            </div>
                        </p>
                        </div>
                        <div class="modal-footer">
                            <a  class="modal-close  waves-green btn-flat">Done</a>
                        </div>
                        </div>
                        <div ref={modal13} id="modal13" class="modal">
                        <div class="modal-content">
                            <h4>IPL Auction</h4>
                            <p>

                            <div>
                            Business is the activity of making one's living or making money by producing or buying and selling products (such as goods and services).[1][2][need quotation .
                            </div>
                            <div>
                            A corporate tax, also called corporation tax or company tax, is a direct tax imposed by a jurisdiction on the income or capital of corporations or analogous legal entities.  
                            </div>
                        </p>
                        </div>
                        <div class="modal-footer">
                            <a  class="modal-close  waves-green btn-flat">Done</a>
                        </div>
                        </div>
                        <div ref={modal14} id="modal14" class="modal">
                        <div class="modal-content">
                            <h4>Comedy Night</h4>
                            <p>

                            <div>
                            Business is the activity of making one's living or making money by producing or buying and selling products (such as goods and services).[1][2][need quotation .
                            </div>
                            <div>
                            A corporate tax, also called corporation tax or company tax, is a direct tax imposed by a jurisdiction on the income or capital of corporations or analogous legal entities.  
                            </div>
                        </p>
                        </div>
                        <div class="modal-footer">
                            <a  class="modal-close  waves-green btn-flat">Done</a>
                        </div>
                        </div>

        </div>
        </>
    )
}
export default Event;