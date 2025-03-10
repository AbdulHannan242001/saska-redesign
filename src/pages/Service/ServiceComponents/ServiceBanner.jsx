import React from "react";
import service from "../../../assets/svg/service.svg";

const ServiceBanner = () => {
  return (
    <div className="relative w-full h-[70vh] flex items-center justify-center text-white">
      {/* Background Image
      <img
        src={bannerService}
        alt="Home Banner"
        className="absolute inset-0 w-full h-full object-cover "
      /> */}
      <div className="absolute inset-0 bg-dark h-full w-full"></div>
      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto flex flex-row items-center justify-between">
        <div className="flex flex-col gap-[25px] w-fit max-w-[656px]">
          <p className="text-xl text-primary">Great Team, Great Products</p>
          <p className="text-[84px] text-white leading-[120%] font-black">
            Our Services
          </p>
          <p className="text-base">
            At SASKA Solutions, we provide innovative and tailored solutions to
            help businesses thrive in the digital landscape. Our expert team
            specializes in design, development, and custom software solutions,
            ensuring seamless digital experiences for our clients.
          </p>
        </div>
        <div className="flex flex-row items-end w-full h-full">
          <img src={service} alt="" className=" ml-auto w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
