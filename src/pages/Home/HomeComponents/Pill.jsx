import React from "react";

const Pill = ({ text }) => {
  return (
    <div className="rounded-[15px] bg-[#975BF1]/20 font-medium text-white text-sm px-4 py-2">
      {text}
    </div>
  );
};

export default Pill;
