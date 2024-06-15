import React, { useRef } from "react";
import { RiMailLine } from "@remixicon/react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_SERVICE_ID;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        e.target.reset();
        alert("Your email was sent, thank you!");
      },
      () => {
        alert(
          "Your email was Not sent reachout to tanksalif@gmail.com, thank you!"
        );
      }
    );
  };
  return (
    <div className="col-lg-8">
      <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
        <form
          ref={form}
          id="contactForm"
          className="contactForm"
          name="contactForm"
          onSubmit={sendEmail}
        >
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  defaultValue=""
                  placeholder="Steve Milner"
                  required=""
                  data-error="Please enter your Name"
                />
                <label htmlFor="name" className="for-icon">
                  <i className="far fa-user"></i>
                </label>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  defaultValue=""
                  placeholder="hello@websitename.com"
                  required=""
                  data-error="Please enter your Email"
                />
                <label htmlFor="email" className="for-icon">
                  <i className="far fa-envelope"></i>
                </label>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Write Your message"
                  required=""
                  data-error="Please Write your Message"
                ></textarea>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mb-0">
                <button type="submit" className="theme-btn">
                  Connect{" "}
                  <i>
                    <RiMailLine size={16} />
                  </i>
                </button>
                <div id="msgSubmit" className="hidden"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
