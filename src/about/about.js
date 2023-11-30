import React from "react";
import "./about.css";
function About()
{
    function skill()
    {
        document.getElementById("cert").style.display="none"
        document.getElementById("skills").style.display="flex"
        document.getElementById("education").style.display="none"

    }

    function cert()
    {
        document.getElementById("cert").style.display="flex"
        document.getElementById("skills").style.display="none"
        document.getElementById("education").style.display="none"
    }

    function edu()
    {
        document.getElementById("cert").style.display="none"
        document.getElementById("skills").style.display="none"
        document.getElementById("education").style.display="flex"
    }

    return <div className="about" id="about">
    <h1 align="center">About</h1>
    <div id="abnav">
        <h3 id="abitem" onClick={skill}>Skills</h3>
        <h3 id="abitem" onClick={cert}>Certifications</h3>
        <h3 id="abitem" onClick={edu}>Education</h3>
    </div>
    <div className="aboutme">
        <div className="skills" id="skills">
            <h2 align="center" id="head">Technical Skills</h2>
            <ul>
                <li>C</li>
                <li>Java</li>
                <li>Python</li>
                <li>Html</li>
                <li>Css</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>Data Structures and Algorithms</li>
            </ul>
        </div>

        <div class="cert" id="cert">
            <h2 align="center" id="head">Certifications</h2>
            <ul>
                <li>Full stack WebDevelopment <span class="high">(Udemy)</span></li>
                <li>Data Structures & Algorithms<span class="high">(GFG)</span></li>
                <li>Basics Of AI<span class="high">(IBM)</span></li>
                <li>CyberSecurity & Ethical Hacking <span class="high">(VI)</span></li>
                <li>Chegg Work Certificate<span class="high">(Chegg)</span></li>
            </ul>
        </div>

        <div class="education" id="education">
            <h2 align="center" id="head">Education</h2>
            <ul>
                <li>BTech 3rd Year @ CVR College Of Engineering </li>
                <li>CGPA:9.24</li>
                <li>Chegg Q/A Expert</li>
            </ul>
        </div>
    </div>
    </div>
}

export default About;