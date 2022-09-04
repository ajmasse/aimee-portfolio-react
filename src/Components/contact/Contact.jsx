import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_p5dgcgr",
      "template_2dkm7ky",
      form.current,
      "hRoZQBRNqMRSYanTW"
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <div className="contact__header">
        <h5>Get in Touch</h5>
        <h2>
          {" "}
          <span className="tag">&lt;h2&gt;</span>Contact Me{" "}
          <span className="tag">&lt;/h2&gt;</span>
        </h2>
      </div>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h3>Email Address</h3>
            <h5>ajmasse68@gmail.com</h5>
            <a
              href="mailto:ajmasse68@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send Email
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
