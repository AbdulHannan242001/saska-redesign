import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { MdArrowBack, MdArrowForward } from "react-icons/md";

const SwiperSlider = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  const testimonials = [
    "Best IT solution provider in current market. Provide detail and comprehensive system as per user requirements. Well managed and integrated interface to seamless data migration.",
    "Best IT solution provider in current market. Provide detail and comprehensive system as per user requirements. Well managed and integrated interface to seamless data migration.",
    "Best IT solution provider in current market. Provide detail and comprehensive system as per user requirements. Well managed and integrated interface to seamless data migration.",
  ];

  return (
    <main className="">
      <section className="flex flex-row justify-between">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            ref={swiperRef}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide>
                <div className="w-full h-full relative cursor-grab border">
                  <div className="w-[640px] min-h-[200px]">
                    <p className="text-2xl font-normal">{testimonial}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col items-center justify-between mb-6">
          <div className="flex flex-col gap-x-6">
            <span
              onClick={handleNext}
              className="font-mono text-lg flex justify-center items-center border border-neutral-300 text-neutral-300 rounded-full size-[40px] hover:bg-white hover:text-slate-800 transition-all duration-200 ease-linear cursor-pointer"
            >
              <MdArrowForward />
            </span>
            <span
              onClick={handlePrev}
              className="font-mono text-lg flex justify-center items-center border border-neutral-300 text-neutral-300 rounded-full size-[40px] hover:bg-white hover:text-slate-800 transition-all duration-200 ease-linear cursor-pointer"
            >
              <MdArrowBack />
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SwiperSlider;
