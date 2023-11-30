import React from "react";
import "./footer.css"
import img from "../imgs/linkedIn_PNG26.png"
import insta from "../imgs/insta.png"
import git from "../imgs/git.jpeg"

function Footer()
{
    return <div className="footer">
    <a href="https://instagram.com/sathvik_mintuu?igshid=NGVhN2U2NjQ0Yg==" target="_blank"><img src={insta} width="50px" height="50px" alt="instagram"></img></a>
    <a href="https://www.linkedin.com/in/sathvik-chandanala-7b343628b/" target="_blank"><img src={img} width="50px" height="50px" alt="Linkedin"></img></a>
    <a href="https://github.com/sathvikchandanala" target="_blank"><img className="git" src={git} width="50px" height="50px" alt="github"></img></a>
    </div>
}

export default Footer;