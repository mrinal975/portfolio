import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const YOUR_SERVICE_ID = "service_i28kasc";
  const YOUR_TEMPLATE_ID = "template_904dmfi";
  const YOUR_PUBLIC_KEY = "q1mhEQH5AGPAR6w8E";
  const [isMailSend, setIsMailSend] = useState(false);
  let [isSuccess, setIsSuccess] = useState(false);
  let [mailSendMessage, setMailSendMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("succes");
          setIsMailSend(true);
          setIsSuccess(true);
          setMailSendMessage("Email send successfully");
          setTimeout(() => {
            setIsMailSend(true);
            setMailSendMessage("");
          }, "3000");
        },
        (error) => {
          console.log("fail");
          setIsMailSend(true);
          setIsSuccess(false);
          setMailSendMessage("Email sending failed");
          setTimeout(() => {
            setIsMailSend(true);
            setMailSendMessage("");
          }, "3000");
        }
      );

    // e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>dumyMail@gmail.com</h5>
            <a href="mailto:mrinal.mallik.se@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Message</h4>
            <h5>dumyMail@gmail.com</h5>
            <a href="https://m.me/mrinalmallik80051/" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>What's app</h4>
            <h5>+8801632319339</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+8801632319339"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          {isMailSend ? (
            <h4 className={isSuccess ? "success" : "fail"}>
              {mailSendMessage}
            </h4>
          ) : null}

          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
