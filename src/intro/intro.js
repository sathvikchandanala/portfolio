import React from "react";
import "./intro.css";
import work from "../imgs/search.png"
import me from "../imgs/me-removebg.png"
function Intro()
{
    return <div className="intro" id="intro">
        <div className="text">
            <h3 class="hello">Hello,</h3>
            <h1 className="simple">I'am<span className="myname"> Sathvik</span> Chandanala</h1>
            <p id="caption">Full stack web developer</p>
            <button className="button" onClick={()=>{document.getElementById("contact").scrollIntoView({behavior:"smooth"})}}><img className="work" src={work} width="30px" height="30px" alt="hire"></img>Hire me</button>
        </div>
        <div>
            <img className="self" src={me} alt="myimage"></img>
        </div>
    </div>
}

export default Intro;