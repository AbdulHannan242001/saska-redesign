import React from "react";
import bannerPortfolio from "../../../assets/banner/bannerPortfolio.jpg";
import portfolioBanner from "../../../assets/svg/portfolioBanner.svg";
import ArrowButton from "../../../components/ArrowButton";
const PortfolioBanner = () => {
  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center text-white">
      <img
        src={bannerPortfolio}
        alt="Home Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-row items-center justify-between h-full">
        <div className="flex flex-col gap-[25px] w-5/12">
          <h1 className="text-5xl font-bold">Innovate, Design, Deliver</h1>
          <p className="text-2xl">
            Empowering your business with tailored digital solutions. Together,
            we turn ideas into reality with state-of-the-art design and
            technology.
          </p>
          <p className="text-xl font-light">
            Let’s embark on a journey to transform your vision into impactful
            results.
          </p>
          <div className="flex flex-row gap-[32px]">
            <ArrowButton text="Lets Get Started" />
            <ArrowButton text="Get A Quote" />
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <img src={portfolioBanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioBanner;
