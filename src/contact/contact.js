import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import Footer from "../footer/footer";
function Contact()
{
        const form = useRef();
        const sendEmail = (e) => {
          e.preventDefault();
          emailjs.sendForm('service_b4sy96g', 'template_fll42xd', form.current, '4-PANB6KhCwRgcl7U')
            .then((result) => {
                e.target.reset();
                console.log(result.text);
                alert("Mail sent!");
            }, (error) => {
                console.log(error.text);
                alert("error");
            });
        };
    

    return <div class="contact" id="contact">
        <h1 align="center">Contact Me</h1>
        <p align="center">Please fill the below form for any work assistance</p>
        <form className="contactme" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your name" name="from_name"/>
            <input type="email" className="email" placeholder="Your mail" name="your_mail"/>
            <textarea className="msg" placeholder="Messsage" rows="5" cols="30" name="message"/>
            <button type="submit" className='btn' value="send">Submit</button>
        </form>
    </div>
};

export default Contact;

