import React from "react";
import ArrowButton from "../../../components/ArrowButton";

const Card = ({ title, description, media }) => {
  return (
    <main className="w-[450px] h-full min-h-[500px] rounded-2xl shadow-primary/10 shadow-2xl flex flex-col items-center py-[10px] justify-center gap-[54px] relative z-50 bg-dark text-white backdrop-blur-sm overflow-hidden">
      <div className="absolute flex flex-col justify-center h-auto m-[10px] p-[30px]">
        <div className="size-[72px] bg-[#E2E0E6] rounded-full mb-[30px]">
          <img src={media} alt="" />
        </div>
        <div className="flex flex-col gap-[5px] mb-[30px]">
          <h1 className="font-black text-4xl">{title}</h1>
          <p>{description}</p>
        </div>
        <ArrowButton text="Get Consultation" />
      </div>
      <div className="absolute left-0 top-[-20%] bg-primary/30 size-[200rem] rounded-full blur-3xl"></div>
    </main>
  );
};

export default Card;
