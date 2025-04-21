import React from "react";
import ArrowButton from "../../../components/ArrowButton";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, media }) => {
  const navigate = useNavigate();
  return (
    <main className="lg:w-fit h-full md:min-w-[400px] md:min-h-[500px] rounded-2xl flex flex-col py-[10px] justify-start gap-[54px] relative z-50 bg-gradient-to-tl to-dark from-primary/10 text-white backdrop-blur-sm overflow-hidden">
      <div className="h-full p-[10px] lg:p-[20px]">
        <div className="size-[48px] lg:size-[72px] bg-gradient-to-tr from-gray-950 to-dark rounded-full mb-[10px] lg:mb-[30px] flex items-center justify-center text-white">
          <img src={media} alt="" className="invert h-[28px] w-auto lg:h-[44px]" />
        </div>
        <div className="flex flex-col gap-[5px] mb-[20px] min-h-[250px]">
          <h1 className="font-black text-2xl">{title}</h1>
          <p className="max-w-xs">{description}</p>
        </div>
        <ArrowButton onClick={() => {navigate("/contact")}} text="Get Consultation" />
      </div>
    </main>
  );
};

export default Card;
