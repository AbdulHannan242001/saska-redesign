import React from "react";
import bannerHome from "../../../assets/banner/bannerHome.jpg";
import ChainedAvatar from "./ChainedAvatar";
import dummyImg1 from "../../../assets/images/dummyImg1.png";
import dummyImg2 from "../../../assets/images/dummyImg2.png";
import dummyImg3 from "../../../assets/images/dummyImg3.png";
import Pill from "./Pill";
import ArrowButton from "../../../components/ArrowButton";
import banner1 from '../../../assets/images/banner1.png'
import banner2 from '../../../assets/images/banner2.png'

const HomeBanner = () => {
  const images = [
    dummyImg1,
    dummyImg2,
    dummyImg3,
    dummyImg1,
    dummyImg2,
    dummyImg3,
  ];

  const services = [
    "UI/UX Design",
    "Graphic Designing",
    "Shopify Store Development",
    "Front-End Development",
    "Back-End Development",
    "Custom Software Development",
  ];

  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center text-white">
      {/* Background Image
      <img
        src={bannerHome}
        alt="Home Banner"
        className="absolute inset-0 w-full h-full object-cover"
      /> */}
      <div className="absolute h-full w-full inset-0 bg-dark"></div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-row items-center justify-between">
        <div className="flex flex-col gap-[20px] max-w-[640px]">
          <ChainedAvatar images={images} text={"100 + Client Reviews"} />
          <p className="text-[64px] leading-[112.00000000000001%] font-light">
            Great <span className="font-bold">Product</span> is <br></br>
            <span className="font-bold">built by great teams</span>
          </p>
          <p className="font-extralight leading-[144%] text-[20px]">
            We bring together our design skills and strategic thinking to craft
            experiences your customers will never forget.
          </p>
          <div className="flex flex-row flex-wrap gap-2">
            {services.map((service, index) => (
              <Pill key={index} text={service} />
            ))}
          </div>
          <div className="pt-[10px]">
            <ArrowButton text={"Lets Get Started"} />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-6/12">
            <div className="w-[395px] h-auto rounded-[13px] overflow-hidden">
                <img src={banner1} alt="" className="h-auto w-full items-center object-cover" />
            </div>
            <div className="w-[350px] h-auto rounded-[13px] overflow-hidden">
                <img src={banner2} alt="" className="h-auto w-full items-center object-cover" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
