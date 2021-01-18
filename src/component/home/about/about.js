import React from "react"
import "./about.css"
import elon from "../../img/elon.jpg"
const About =()=>{
    return(
        <>
           <div id="about" className="about row">
            <h1 className="aboutHead">
                About Srijan 1.0
            </h1>
            <br/>
            <div className="containers">
                <div className="col l6">
               <p className="aboutContent">  <div className="focus">Welcome to Srijan 1.0</div>
                    <div>
                    Srijan 1.0, in association with Institute Innovation Cell 2.0 and E-Cell NIT Silchar, brings to
                    you an amazing opportunity as well as enormous platform to accentuate and enhance
                    your managerial prowess.
                    </div>
                    <div>
                    Our aim is to bring an inclusive ecosystem for entrepreneurial activities among students
                    and develop managerial aspects among them. We whole heartedly intend to spread the
                    spirit of entrepreneurship and motivate and educate people about the same. It provides
                    a stage to all the future Industrialist and entrepreneurs to nurture their ideas and foster
                    in their fields of interest.
                    </div>
                    <div>
                    The National Innovation and Entrepreneurship Summit 2019 consists of three enormous
                    days of amazing events including lectures by high profile speakers, industry experts,
                    panel discussions, focused workshops, case study analysis. Along with these, we also
                    bring to you events related to fundamental entrepreneurship, apart from conventional
                    Business Model Canvas Competition, and Business Quizzes, promoting the spirit of
                    hustling and inculcate the flair of start-up ideas among the participants.
                    This is NIT Silchar's remarkable attempt to attract start up and management ideas from
                    </div>
                    all over the country and encourage the minds behind them.
                    </p>
                </div>
                <div className="col l6 ">
                    <img className="img" src={elon}/>
                </div>
                </div>
            </div>
        </>
    )
}
export default About;