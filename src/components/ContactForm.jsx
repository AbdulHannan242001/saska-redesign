import React from "react";
import contactBg from "../assets/images/contact-bg.png";
import ArrowButton from "./ArrowButton";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="min-h-[740px] w-full relative shadow-[0px_12px_8px_5px_rgba(0,0,0,0.15)] h-fit ">
      <div className="absolute inset-0">
        <img src={contactBg} alt="" />
      </div>
      <div className="h-[80%] w-full absolute bottom-[50%] translate-y-[50%] ">
        <div className="h-full w-10/12 mx-auto flex justify-center gap-10">
          <div className="w-6/12 flex flex-col gap-[30px] text-white">
            <p className="w-fit text-2xl font-bold p-3 bg-white/20 backdrop-blur-2xl rounded-xl">
              {" "}
              Contact Us{" "}
            </p>
            <p className="text-5xl font-bold">
              Connect With Your Next Great Hire Today!
            </p>
            <p className="text-xl font-light">
              Every project we undertake is a testament to our dedication and
              expertise. From small startups to large enterprises, our solutions
              are designed to inspire and deliver impactful results.
            </p>
            <ArrowButton text={"Get Consultation"} />
          </div>
          <div className="w-6/12 text-white">
            <form action="" className="flex flex-col gap-3">
              <div>
                <label htmlFor="name" className="text-[16px] px-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border border-white/30 rounded-xl w-full p-3 bg-white/10"
                />
              </div>
              <div>
                <label htmlFor="eamil" className="text-[16px] px-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="name"
                  id="name"
                  className="border border-white/30 rounded-xl w-full p-3 bg-white/10"
                />
              </div>
              <div>
                <label htmlFor="company" className="text-[16px] px-2">
                  Company
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border border-white/30 rounded-xl w-full p-3 bg-white/10"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-[16px] px-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border border-white/30 rounded-xl w-full p-3 bg-white/10"
                />
              </div>
              <div>
                <label htmlFor="details" className="text-[16px] px-2">
                  Project Details *
                </label>
                <textarea
                  name="name"
                  id="name"
                  className="border border-white/30 rounded-xl w-full p-3 bg-white/10 min-h-[20vh]"
                />
              </div>
              <button className="border border-white/30 rounded-xl w-full p-1 bg-white/10 relative cursor-pointer">
                <div className="size-[55px] rounded-lg flex items-center justify-center bg-primary">
                  <span>
                    <FaArrowRight size={38}  />
                  </span>
                </div>
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-2xl">Submit</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
