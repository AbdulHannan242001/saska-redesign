import React from "react";

const ChainedAvatar = ({ text, images }) => {
  return (
    <div className="flex items-center text-white rounded-full">
      <div className="flex -space-x-2">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Client ${index + 1}`}
            className="w-[36px] h-[36px] border-[1px] border-white rounded-full"
          />
        ))}
      </div>
      <span className="ml-4 text-lg">{text}</span>
    </div>
  );
};

export default ChainedAvatar;
