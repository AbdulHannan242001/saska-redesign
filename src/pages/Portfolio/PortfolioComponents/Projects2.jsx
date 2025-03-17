import React, { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import sqcommercial from "../../../assets/images/sqcommercial.png";
import sqcommercial1 from "../../../assets/images/sqcommercial1.png";
import project2 from "../../../assets/images/project2.jpg";
import ArrowButton from "../../../components/ArrowButton";

const Projects2 = () => {
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end start"],
  });
  const isInView = useInView(target, { once: false, amount: 0.5 });

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.5 },
    }),
  };

  const x1 = useTransform(scrollYProgress, [0, 0.8], [400, -100]);
  const x2 = useTransform(scrollYProgress, [0, 0.8], [-500, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0.3, 1]);

  return (
    <main className="w-full">
      <div ref={target} className="w-full h-[200vh]">
        <div className="flex flex-col lg:flex-row h-screen md:h-[calc(100vh-60px)] sticky top-15 md:top-15">
          <div className="w-full lg:w-8/12 relative flex flex-col justify-between items-center overflow-hidden md:h-full h-[40vh]">
            <div className="absolute inset-0 h-full w-full">
              <img src={project2} alt="" className="h-full w-full" />
            </div>
            <motion.div
              style={{
                x: x2,
                opacity: opacity,
              }}
              className="h-[50%] w-fit ml-auto"
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <img
                src={sqcommercial}
                alt="Project 1"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{
                x: x1,
                opacity: opacity,
              }}
              className="h-[50%] w-fit mr-auto"
            >
              <img
                src={sqcommercial1}
                alt="Project 1"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
          <div className="w-full lg:w-4/12 p-[10px] md:p-[30px] bg-gradient-to-b from-dark to-zinc-950 flex flex-col justify-start md:justify-center relative overflow-hidden md:h-full h-[60vh]">
            {/* <div className="absolute size-[150px] md:size-[350px] rounded-full top-[-30%] left-[-25%] blur-3xl bg-primary"></div> */}
            <motion.span
              className="text-primary text-sm md:text-lg font-black"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.25}
            >
              SQ COMMERCIALS
            </motion.span>
            <motion.p
              className="text-base font-light text-white tracking-tighter pb-[10px] md:pb-[20px]"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.5}
            >
              Crafting a Professional Platform for Industry Excellence.
            </motion.p>
            <motion.p
              className="text-sm md:text-lg text-gray-200 font-medium max-w-lg tracking-tight pb-[10px] md:pb-[25px]"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1}
            >
              SQ Commercial reached out to elevate their brand with a clean and
              professional website. They needed a platform that not only
              showcased their civil infrastructure and telecom solutions but
              also reflected their commitment to quality. We designed a modern,
              user-friendly site that clearly communicates their services while
              offering a smooth browsing experience. The result is a website
              that builds trust and strengthens their professional image.
            </motion.p>
            <motion.div
              className=""
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1.5}
            >
              <a
                href="https://www.sqcommercial.co.uk"
                target="_blank"
                className="text-white hover:border-b-1 border-white transition-all duration-300 ease-in"
              >
                Visit Site
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects2;
