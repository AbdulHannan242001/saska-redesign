import React, { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import tsdash from "../../../assets/images/tsdash.png";
import tsdash1 from "../../../assets/images/tsdash1.png";
import tsdash2 from "../../../assets/images/tsdash2.png";
import tsdash3 from "../../../assets/images/tsdash3.png";
import project5 from "../../../assets/images/project5.jpg";

const Projects5 = () => {
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

  const y1 = useTransform(scrollYProgress, [0, 0.5], [400, -20]);
  const y2 = useTransform(scrollYProgress, [0, 0.5], [-500, 20]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0.3, 1]);

  return (
    <main className="w-full">
      <div ref={target} className="w-full h-[200vh]">
        <div className="flex flex-col md:flex-row h-screen md:h-[90vh] sticky  top-15 md:top-20">
          <div className="w-full md:w-4/12 p-[10px] md:p-[30px] bg-dark shadow-inner flex flex-col justify-start md:justify-center relative overflow-hidden h-[50vh] md:h-full">
            <div className="absolute size-[150px] md:size-[350px] rounded-full top-[-30%] left-[-25%] blur-3xl bg-primary z-10"></div>
            <motion.span
              className="text-primary text-sm md:text-lg font-black"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.25}
            >
              TS ADMIN DASHBOARD
            </motion.span>
            <motion.p
              className="text-base font-light text-white tracking-tighter pb-[10px] md:pb-[20px]"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.5}
            >
              Simplifying List Management with Smart Solutions.
            </motion.p>
            <motion.p
              className="text-sm md:text-lg text-gray-200 font-medium max-w-lg tracking-tight pb-[10px] md:pb-[25px]"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1}
            >
              The idea for tsdash originated when a client approached us with
              a unique challenge—managing toy lists among friends to avoid
              gifting duplicates. While this was the initial need, the app also
              had to be flexible enough to handle a variety of similar
              scenarios. We developed a web app that allows users to create
              personalized spaces and lists, offering full control over who can
              view or edit them. Whether it’s managing gifts, organizing
              parties, or tracking shared tasks, tsdash simplifies
              coordination with an intuitive and adaptable approach.
            </motion.p>
            <motion.div
              className=""
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1.5}
            >
              <a
                href="https://edndte.com"
                target="_blank"
                className="text-white hover:border-b-1 border-white transition-all duration-300 ease-in"
              >
                Visit Site
              </a>
            </motion.div>
          </div>
          <div className="w-full md:w-8/12 relative flex flex-col flex-wrap justify-between items-center overflow-hidden h-[50vh] md:h-full">
            <div className="absolute inset-0 h-full w-full">
              <img src={project5} alt="" className="h-full w-full" />
            </div>
            <motion.div
              style={{
                y: y2,
                opacity: opacity,
              }}
              className="h-[40%] w-fit"
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <img
                src={tsdash}
                alt="Project 1"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{
                y: y1,
                opacity: opacity,
              }}
              className="h-[40%] w-fit"
            >
              <img
                src={tsdash1}
                alt="Project 1"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{
                y: y2,
                opacity: opacity,
              }}
              className="h-[40%] w-fit md:block hidden"
            >
              <img
                src={tsdash2}
                alt="Project 2"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              style={{
                y: y1,
                opacity: opacity,
              }}
              className="h-[40%] w-fit md:block hidden"
            >
              <img
                src={tsdash3}
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

export default Projects5;
