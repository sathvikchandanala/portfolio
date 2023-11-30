import React,{useState} from "react";
import "./nav.css";
import logo from "../imgs/Black White Yellow Simple Initial Name Logo.png"
import resume from "../imgs/My resume_page-0001.jpg"
import menu from "../imgs/menu.png"
import About from "../about/about"
import {Link} from "react-scroll";
function Nav()
{
    let count=0;

    function show()
    {
        count++;
        if(count%2==0)
        {
            document.getElementById("menuitems").style.display="none";
        }

        else
        {
            document.getElementById("menuitems").style.display="flex"
        }
    }


    return <div className="deff" id="def">
        <div className="navbar" id="nav">
            <img src={logo} alt="logo" width="100px" height="100px" id="item" className="logo"></img>
            <div class="fields" id="item">
                <Link id="it" to="deff">Home</Link>
                <Link id="it" activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
                <Link id="it" activeClass="active" to="port" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
                <Link id="it" activeClass="active" to="contact" spy={true} smooth={true}  duration={500}>Contact</Link>
            </div>
            <a href={resume} download id="btn">Download Resume</a>
        </div>
        <div className="alt">
                <img src={logo} alt="logo" width="100px" height="100px" id="altlogo"></img>
                <div id="menubar">
                    <img src={menu} alt="menu" width="50px" height="50px" id="menu" onClick={show}></img>
                    <div id="menuitems" style={{display:"none"}}>
                        <Link id="list" to="deff">Home</Link>
                        <Link id="list" activeClass="active" to="about" spy={true} smooth={true} offset={-20} duration={500}>About</Link>
                        <Link id="list" activeClass="active" to="port" spy={true} smooth={true} offset={-2} duration={500}>Projects</Link>
                        <Link id="list" activeClass="active" to="contact" spy={true} smooth={true}  duration={500}>Contact</Link>
                        <a href={resume} download id="list">Resume</a>
                    </div>
                </div>
        </div>
    </div>
}

export default Nav;