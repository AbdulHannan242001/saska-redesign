import React, { useRef } from "react";

import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';

import ArrowButton from "./ArrowButton";

import contactBg from "../assets/images/contact-bg.png";

import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_htvfes9',
        'template_lihw05o',
        form.current,
        '8GvgYzGjkwINOneAo'
      )
      .then(
        (result) => {
          console.log(result.status);
          if (result.status === 200) {
            toast.success("Form submitted successfully!");
          }
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to submit the form. Please try again.');
        }
      );
  };

  return (
    <div className="w-full relative h-fit">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full min-h-[400px] md:min-h-[600px] rounded-3xl overflow-hidden">
        <img
          src={contactBg}
          alt="Contact Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center">
        <div className="w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row justify-center gap-10 py-[100px]">
          {/* Left Section */}
          <div className="w-full md:w-6/12 text-white flex flex-col gap-4 md:gap-6">
            <p className="w-fit text-xl md:text-2xl font-bold p-3 bg-white/20 backdrop-blur-2xl rounded-xl">
              Contact Us
            </p>
            <p className="text-2xl md:text-5xl font-bold leading-tight">
              Connect With Your Next Great Hire Today!
            </p>
            <p className="text-sm md:text-xl font-light">
              Every project we undertake is a testament to our dedication and
              expertise.
            </p>
            <ArrowButton onClick={() => { navigate("/contact") }} text={"Get Consultation"} />
          </div>

          {/* Right Section (Form) */}
          <div className="w-full md:w-6/12 text-white">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
              <div>
                <label htmlFor="name" className="text-[16px] px-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-white/30 rounded-xl w-full p-3 bg-white/10"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-[16px] px-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-white/30 rounded-xl w-full p-3 bg-white/10"
                />
              </div>
              <div>
                <label htmlFor="company" className="text-[16px] px-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="border border-white/30 rounded-xl w-full p-3 bg-white/10"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-[16px] px-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="border border-white/30 rounded-xl w-full p-3 bg-white/10"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-[16px] px-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="border border-white/30 rounded-xl w-full p-3 bg-white/10 min-h-[20vh]"
                />
              </div>
              <button className="border border-white/30 rounded-xl w-full p-1 bg-white/10 relative cursor-pointer">
                <div className="size-[55px] rounded-lg flex items-center justify-center bg-primary">
                  <FaArrowRight size={38} />
                </div>
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-2xl">
                  Submit
                </p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
