import React from "react";
import testimonial from "../../../assets/svg/testimonial.svg";
import commaLeft from "../../../assets/svg/commaLeft.svg";
import Swiper from "../../../components/Swiper";

const Testimonials = () => {
  return (
    <main className="w-full">
      <div className="mx-auto max-w-[1600px] border relative py-[50px] min-h-[650px]">
        <div className="flex flex-col gap-[10px] items-center justify-center">
          <p className="text-2xl font-medium text-primary">Cleints Feedback</p>
          <div>
            <p className="text-center font-bold text-3xl">
              These People trusted us, be next....
            </p>
          </div>
        </div>
        <div className="w-6/12 border h-[450px] flex flex-row justify-center relative">
          <img src={commaLeft} alt="" className="absolute top-0 left-[calc(0%+50px)]" />
          <Swiper />
        </div>
        <div className="absolute top-0 right-0">
          <img src={testimonial} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
