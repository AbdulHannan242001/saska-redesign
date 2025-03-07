import React from "react";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/svg/logo.svg";

const RevealFooter = () => {
  return (
    <div
      className="relative h-screen md:h-[40vh] max-w-[1600px] mx-auto"
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+40vh)] -top-[100vh]">
        <div className="sticky top-[calc(100vh-40vh)] h-[40vh]">
          <div className="bg-white h-screen md:h-[40vh] text-gray-800 flex flex-row justify-around pt-10 items-start mx-auto">
            <div className="flex flex-col gap-[15px]">
              <div className="flex flex-col items-center">
                <img src={logo} alt="" className="h-[80px]" />
                <p className="text-sm font-semibold text-gray-500">
                  Your Digital Path to Success
                </p>
              </div>
              <div className="flex flex-row items-center gap-[15px] w-fit mx-auto">
                <div className="rounded-full size-[30px] border border-primary text-primary flex items-center justify-center">
                  <FaXTwitter />
                </div>
                <div className="rounded-full size-[30px] border border-primary text-primary flex items-center justify-center">
                  <FaFacebookF />
                </div>
                <div className="rounded-full size-[30px] border border-primary text-primary flex items-center justify-center">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px]">
                <p className="font-semibold text-gray-500 uppercase">Pages</p>
                <ul className="flex flex-col gap-[10px] list-disc">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="flex flex-col gap-[15px]">
                <p className="font-semibold text-gray-500 uppercase">Services</p>
                <ul className="flex flex-col gap-[10px] list-disc">
                    <li>UI/UX and Graphic Designing</li>
                    <li>Front-End Development</li>
                    <li>Back-End Development</li>
                    <li>Custom Software Development</li>
                </ul>
            </div>
            <div className="flex flex-col gap-[15px]">
                <p className="font-semibold text-gray-500 uppercase">Newsletter</p>
                <input type="email" className="bg-gray-200 p-3 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevealFooter;
