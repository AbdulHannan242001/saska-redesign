import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/svg/logo.svg";

const SimpleFooter = () => {
  const location = useLocation();
  
  return (
    <div className="bg-zinc-950 text-gray-200 py-4 px-[30px]">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row w-full justify-start md:justify-between">
        {/* Logo & Socials */}
        <div className="flex flex-row items-center gap-4 mb-6 md:mb-0 md:flex-col md:justify-between">
          <div className="text-center">
            <img src={logo} alt="Logo" className="h-16 md:h-[80px] w-auto" />
            <p className="text-xs md:text-sm font-semibold text-white">
              Your Digital Path to Success
            </p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/saskasolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-primary text-primary p-2"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/SaskaSolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-primary text-primary p-2"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/saska-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-primary text-primary p-2"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Pages */}
        <div className="flex flex-col">
          <p className="font-semibold text-white uppercase text-sm md:text-base mb-2">
            Pages
          </p>
          <ul className="flex flex-col items-center md:items-start gap-0 list-none">
            <li className="text-sm md:text-base">
              <Link to="/">Home</Link>
            </li>
            <li className="text-sm md:text-base">
              <Link to="/services">Services</Link>
            </li>
            <li className="text-sm md:text-base">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="text-sm md:text-base">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col">
          <p className="font-semibold text-white uppercase text-sm md:text-base mb-2">
            Services
          </p>
          <ul className="flex flex-col items-center md:items-start gap-0 list-none">
            <li className="text-sm md:text-base">
              <Link
                to={{
                  pathname: "/services",
                  state: { scrollTo: "design" },
                }}
              >
                UI/UX and Graphic Designing
              </Link>
            </li>
            <li className="text-sm md:text-base">
              <Link
                to={{
                  pathname: "/services",
                  state: { scrollTo: "web" },
                }}
              >
                Front-End Development
              </Link>
            </li>
            <li className="text-sm md:text-base">
              <Link
                to={{
                  pathname: "/services",
                  state: { scrollTo: "web" },
                }}
              >
                Back-End Development
              </Link>
            </li>
            <li className="text-sm md:text-base">
              <Link
                to={{
                  pathname: "/services",
                  state: { scrollTo: "software" },
                }}
              >
                Custom Software Development
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimpleFooter;
