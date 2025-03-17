import React from "react";
import ArrowButton from "../../../components/ArrowButton";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, media }) => {
  const navigate = useNavigate();
  return (
    <main className=" lg:w-[450px] h-full min-h-[500px] rounded-2xl flex flex-col py-[10px] justify-start gap-[54px] relative z-50 bg-gradient-to-tl to-dark from-primary/10 text-white backdrop-blur-sm overflow-hidden">
      <div className="h-full m-[10px] p-[10px] lg:p-[30px]">
        <div className="size-[48px] lg:size-[72px] bg-gradient-to-tr from-gray-950 to-dark rounded-full mb-[10px] lg:mb-[30px] flex items-center justify-center text-white">
          <img src={media} alt="" className="invert h-[28px] w-auto lg:h-full lg:w-full" />
        </div>
        <div className="flex flex-col gap-[5px] mb-[30px]">
          <h1 className="font-black text-4xl">{title}</h1>
          <p className="lg:h-[20vh]">{description}</p>
        </div>
        <ArrowButton onClick={() => {navigate("/contact")}} text="Get Consultation" />
      </div>
    </main>
  );
};

export default Card;
