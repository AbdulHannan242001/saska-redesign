import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TbArrowRight } from "react-icons/tb";
import logo from "../assets/svg/logo.svg";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
                <img
                  src={logo}
                  alt="Logo"
                  className="h-16 md:h-[80px] w-auto"
                />
                <p className="text-xs md:text-sm font-semibold text-white text-center">
                  Your Digital Path to Success
                </p>
              </div>
              <div className="flex flex-row items-center gap-3 md:gap-[15px] w-fit mx-auto">
                <div className="rounded-full size-8 md:size-[30px] border border-primary text-primary flex items-center justify-center">
                  <a href="https://www.instagram.com/saskasolutions/" target="_blank">
                    <FaInstagram size={16} />
                  </a>
                </div>
                <div className="rounded-full size-8 md:size-[30px] border border-primary text-primary flex items-center justify-center">
                  <a href="https://www.facebook.com/SaskaSolutions/" target="_blank">
                    <FaFacebookF size={16} />
                  </a>
                </div>
                <div className="rounded-full size-8 md:size-[30px] border border-primary text-primary flex items-center justify-center">
                  <a href="https://www.linkedin.com/company/saska-solutions" target="_blank">
                    <FaLinkedinIn size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Pages */}
            <div className="flex flex-col gap-4 w-full md:w-auto mb-6 md:mb-0">
              <p className="font-semibold text-white uppercase text-sm md:text-base">
                Pages
              </p>
              <ul className="flex flex-col gap-1 md:gap-[0px] list-disc pl-4">
                <li className="text-sm md:text-base">
                  {" "}
                  <Link to={"/"}> Home</Link>
                </li>
                <li className="text-sm md:text-base">
                  {" "}
                  <Link to={"/services"}> Services</Link>
                </li>
                <li className="text-sm md:text-base">
                  {" "}
                  <Link to={"/projects"}> Projects</Link>
                </li>
                <li className="text-sm md:text-base">
                  {" "}
                  <Link to={"/contact"}> Contact</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-4 w-full md:w-auto mb-6 md:mb-0">
              <p className="font-semibold text-white uppercase text-sm md:text-base">
                Services
              </p>
              <ul className="flex flex-col gap-1 md:gap-[0px] list-disc pl-4">
                <li className="text-sm md:text-base">
                  {" "}
                  <Link to={"/services"}>UI/UX and Graphic Designing</Link>{" "}
                </li>
                <li className="text-sm md:text-base">
                  {" "}
                  <Link to={"/services"}>Front-End Development</Link>{" "}
                </li>
                <li className="text-sm md:text-base">
                  {" "}
                  <Link to={"/services"}>Back-End Development</Link>{" "}
                </li>
                <li className="text-sm md:text-base">
                  {" "}
                  <Link to={"/services"}>Custom Software Development</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevealFooter;
