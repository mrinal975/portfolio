import React from "react";
import "./contact.css";
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerFill} from 'react-icons/ri';

const Contact = () => {
  return (<section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container">
      <article className="contact_option">
        <MdOutlineEmail />
        <h4>Email</h4>
        <h5>dumyMail@gmail.com</h5>
        <a href="dumyMail@gmail.com">Send a Message</a>
      </article>
      <article className="contact_option">
        <RiMessengerFill />
        <h4>Message</h4>
        <h5>dumyMail@gmail.com</h5>
        <a href="dumyMail@gmail.com">Send a Message</a>
      </article>
      <article className="contact_option">
        <RiMessengerFill />
        <h4>What's app</h4>
        <h5>dumyMail@gmail.com</h5>
        <a href="dumyMail@gmail.com">Send a Message</a>
      </article>
    </div>
    {/* END OF CONTACT OPTION */}
    <form action="">

    </form>
  </section>);
};

export default Contact;
