import React from "react";
import { TbArrowRight } from "react-icons/tb";

const ArrowButton = ({ text }) => {
  return (
    <div className="w-fit cursor-pointer bg-primary px-3 py-2 flex flex-row gap-2 text-white text-lg font-medium items-center">
      <p>{text}</p>
      <span>
        <TbArrowRight size={22} />
      </span>
    </div>
  );
};

export default ArrowButton;
