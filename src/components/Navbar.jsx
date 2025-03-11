import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import phone from "../assets/svg/phone.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false); // State for hamburger menu

  return (
    <main className="w-full bg-white shadow-md shadow-primary/30 px-4 md:px-5 h-[60px]">
      <div className="max-w-[1600px] mx-auto flex flex-row items-center justify-between py-1">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-12 w-auto md:h-[54px]" />

        {/* Hamburger Button (Visible on Mobile) */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"} {/* Toggle between hamburger and close icon */}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-6 md:gap-10 absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-10`}
        >
          <Link to="/" onClick={() => setIsOpen(false)}>
            <p className="text-lg md:text-xl hover:text-primary">Home</p>
          </Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>
            <p className="text-lg md:text-xl hover:text-primary">Services</p>
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            <p className="text-lg md:text-xl hover:text-primary">Projects</p>
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <p className="text-lg md:text-xl hover:text-primary">Contact</p>
          </Link>
        </div>

        <div className="hidden md:flex flex-row gap-2 items-center justify-center">
          <div className="size-11 rounded-full flex items-center justify-center bg-primary">
            <img src={phone} alt="Phone" className="size-6" />
          </div>
          <div className="space-y-0">
            <p className="text-sm md:text-[16px] leading-tighter">Need help?</p>
            <p className="text-sm tracking-tight">(+92 315 1010 578)</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;