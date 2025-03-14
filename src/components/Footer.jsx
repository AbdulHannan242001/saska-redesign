import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TbArrowRight } from "react-icons/tb";
import logo from "../assets/svg/logo.svg";
import { FaXTwitter } from "react-icons/fa6";

const RevealFooter = () => {
  return (
    <div
      className="relative h-screen md:h-[30vh] max-w-[1600px] mx-auto px-4 md:px-0"
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-screen md:h-[calc(100vh+30vh)] -top-[0vh] md:-top-[100vh]">
        <div className="sticky top-0 md:top-[calc(100vh-30vh)] h-screen md:h-[30vh]">
          <div className="bg-zinc-950 h-screen md:h-[30vh] text-gray-200 flex flex-col md:flex-row justify-between items-start pt-6 md:pt-10 pb-8 md:pb-0">
            {/* Logo & Socials */}
            <div className="flex flex-col gap-4 w-full md:w-auto items-center mb-6 md:mb-0">
              <div className="flex flex-col items-center">
                <img src={logo} alt="Logo" className="h-16 md:h-[80px] w-auto" />
                <p className="text-xs md:text-sm font-semibold text-white text-center">
                  Your Digital Path to Success
                </p>
              </div>
              <div className="flex flex-row items-center gap-3 md:gap-[15px] w-fit mx-auto">
                <div className="rounded-full size-8 md:size-[30px] border border-primary text-primary flex items-center justify-center">
                  <FaXTwitter size={16} />
                </div>
                <div className="rounded-full size-8 md:size-[30px] border border-primary text-primary flex items-center justify-center">
                  <FaFacebookF size={16} />
                </div>
                <div className="rounded-full size-8 md:size-[30px] border border-primary text-primary flex items-center justify-center">
                  <FaLinkedinIn size={16} />
                </div>
              </div>
            </div>

            {/* Pages */}
            <div className="flex flex-col gap-4 w-full md:w-auto mb-6 md:mb-0">
              <p className="font-semibold text-white uppercase text-sm md:text-base">
                Pages
              </p>
              <ul className="flex flex-col gap-2 md:gap-[10px] list-disc pl-4 md:pl-0">
                <li className="text-sm md:text-base">Home</li>
                <li className="text-sm md:text-base">About Us</li>
                <li className="text-sm md:text-base">Services</li>
                <li className="text-sm md:text-base">Projects</li>
                <li className="text-sm md:text-base">Contact</li>
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-4 w-full md:w-auto mb-6 md:mb-0">
              <p className="font-semibold text-white uppercase text-sm md:text-base">
                Services
              </p>
              <ul className="flex flex-col gap-2 md:gap-[10px] list-disc pl-4 md:pl-0">
                <li className="text-sm md:text-base">UI/UX and Graphic Designing</li>
                <li className="text-sm md:text-base">Front-End Development</li>
                <li className="text-sm md:text-base">Back-End Development</li>
                <li className="text-sm md:text-base">Custom Software Development</li>
              </ul>
            </div>

            {/* Newsletter */}
            {/* <div className="flex flex-col gap-4 w-full md:w-auto">
              <p className="font-semibold text-white uppercase text-sm md:text-base">
                Newsletter
              </p>
              <div className="flex flex-row gap-2 md:gap-[15px] p-2 md:p-3 rounded-full bg-gray-200 w-full max-w-xs mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Join our newsletter"
                  className="bg-transparent text-sm md:text-base flex-1 outline-none px-2"
                />
                <button className="bg-primary text-white p-1 md:p-1 rounded-full flex items-center justify-center">
                  <TbArrowRight className="md:size-[22px] size-[16px]" />
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevealFooter;