import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import phone from "../assets/svg/phone.svg";

const Navbar = () => {
  return (
    <main className="w-full bg-white">
      <div className="max-w-[1600px] mx-auto flex flex-row items-center justify-between">
        <img src={logo} alt="" className="h-[90px] w-auto" />
        <div className="flex flex-row gap-10">
          <Link to="/">
            <p className="font-semibold text-xl">Home</p>
          </Link>
          {/* <Link to={"/about"}>
            <p className="font-semibold text-xl">About Us</p>
          </Link> */}
          <Link to={"/services"}>
            <p className="font-semibold text-xl">Services</p>
          </Link>
          <Link to={"/projects"}>
            <p className="font-semibold text-xl">Projects</p>
          </Link>
          <Link to={"/contact"}>
            <p className="font-semibold text-xl">Contact</p>
          </Link>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <div className="size-[44px] rounded-full flex items-center justify-center bg-primary">
            <img src={phone} alt="" className="" />
          </div>
          <div className="space-y-1">
            <p className="text-[16px] leading-2">Need help?</p>
            <p className="text-[16px] tracking-tighter">(+92 315 1010 578)</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
