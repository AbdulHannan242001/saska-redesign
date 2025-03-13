import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TbArrowRight } from "react-icons/tb";
import logo from "../assets/svg/logo.svg";
import { FaXTwitter } from "react-icons/fa6";

const RevealFooter = () => {
  return (
    <div
      className="relative h-screen md:h-[25vh] max-w-[1600px] mx-auto px-4 md:px-0"
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-screen md:h-[calc(100vh+25vh)] -top-[0vh] md:-top-[100vh]">
        <div className="sticky top-0 md:top-[calc(100vh-25vh)] h-screen md:h-[25vh]">
          <div className="bg-white h-screen md:h-[25vh] ">
            <div className="text-gray-800 flex flex-row justify-between items-start pt-6 md:pt-10 pb-8 md:pb-0">
              {/* Logo & Socials */}
              <div className="flex flex-col gap-4 w-full md:w-auto items-center mb-6 md:mb-0">
                <div className="flex flex-col items-center">
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-16 md:h-[80px] w-auto"
                  />
                  <p className="text-xs md:text-sm font-semibold text-gray-500 text-center">
                    Your Digital Path to Success
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-3 md:gap-[15px] w-fit ml-auto">
                <a
                  href="https://www.instagram.com/saskasolutions/"
                  target="_blank"
                  className="cursor-pointer transition-all ease-in duration-200 hover:text-white hover:bg-primary rounded-full size-8 md:size-[36px] border border-primary text-primary flex items-center justify-center"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/SaskaSolutions/"
                  target="_blank"
                  className="cursor-pointer transition-all ease-in duration-200 hover:text-white hover:bg-primary rounded-full size-8 md:size-[36px] border border-primary text-primary flex items-center justify-center"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/saska-solutions"
                  target="_blank"
                  className="cursor-pointer transition-all ease-in duration-200 hover:text-white hover:bg-primary rounded-full size-8 md:size-[36px] border border-primary text-primary flex items-center justify-center"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
            <div className="pt-[5vh]">
              <p className="text-xs md:text-sm font-semibold text-gray-500 text-center h-full py-2 border-t border-gray-200">
                © 2023 Saska Solutions. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevealFooter;
