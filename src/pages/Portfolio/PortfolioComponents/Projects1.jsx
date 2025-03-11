import React, { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import ListLink from "../../../assets/images/ListLink.png";
import ListLink1 from "../../../assets/images/ListLink1.png";
import ListLink2 from "../../../assets/images/ListLink2.png";
import ListLink3 from "../../../assets/images/ListLink3.png";
import project1 from "../../../assets/images/project1.jpg"

const Projects1 = () => {
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end center"],
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

  const y1 = useTransform(scrollYProgress, [0, 0.8], [400, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.8], [-500, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

  return (
    <main className="w-full">
      <div ref={target} className="w-full h-[200vh]">
        <div className="flex flex-col md:flex-row max-w-[1600px] mx-auto h-screen md:h-[90vh] sticky  top-15 md:top-20">
          <div className="w-full md:w-4/12 p-[10px] md:p-[30px] bg-dark shadow-inner flex flex-col justify-center relative overflow-hidden h-[40vh] md:h-full">
            <div className="absolute size-[150px] md:size-[350px] rounded-full top-[-30%] left-[-25%] blur-3xl bg-primary z-10"></div>
            <motion.span
              className="text-primary text-sm md:text-lg font-black"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.25}
            >
              LIST LINK APP
            </motion.span>
            <motion.p
              className="text-base font-light text-white tracking-tighter pb-[20px]"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.50}
            >
              LOOK AT THIS IMAGE IT LOOKS GREAT !!! <br /> DOESN'T IT ?
            </motion.p>
            <motion.p
              className="md:text-xl text-gray-200 font-semibold max-w-lg tracking-tight"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1}
            >
              Well, that's why I chose it in the first place.
            </motion.p>
          </div>
          <div className="w-full md:w-8/12 relative flex flex-row justify-between items-center overflow-hidden h-[60vh] md:h-full">
            <div className="absolute inset-0 h-full w-full">
                <img src={project1} alt="" className="h-full w-full" />
            </div>
            <motion.div
              style={{
                y: y2,
                opacity: opacity,
              }}
              className="h-[70%] w-fit"
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <img
                src={ListLink}
                alt="Project 1"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{
                y: y1,
                opacity: opacity,
              }}
              className="h-[70%] w-fit"
            >
              <img
                src={ListLink1}
                alt="Project 1"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{
                y: y2,
                opacity: opacity,
              }}
              className="h-[70%] w-fit md:block hidden"
            >
              <img
                src={ListLink2}
                alt="Project 2"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{
                y: y1,
                opacity: opacity,
              }}
              className="h-[70%] w-fit md:block hidden"
            >
              <img
                src={ListLink3}
                alt="Project 3"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects1;
