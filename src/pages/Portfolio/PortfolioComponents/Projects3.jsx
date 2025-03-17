import React, { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import bethmar1 from "../../../assets/images/bethmar1.png";
import bethmar2 from "../../../assets/images/bethmar2.png";
import project3 from "../../../assets/images/project3.jpg";
import ArrowButton from "../../../components/ArrowButton";

const Projects3 = () => {
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

  const y1 = useTransform(scrollYProgress, [0, 0.7], [200, -200]);
  const y2 = useTransform(scrollYProgress, [0, 0.7], [-300, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

  return (
    <main className="w-full">
      <div ref={target} className="w-full h-[200vh]">
        <div className="flex flex-col lg:flex-row h-screen md:h-[calc(100vh-60px)] sticky top-15 md:top-15">
          <div className="w-full lg:w-4/12 p-[10px] md:p-[30px] bg-gradient-to-b from-dark to-zinc-950 flex flex-col justify-start md:justify-center relative overflow-hidden md:h-full h-[50vh]">
            {/* <div className="absolute size-[150px] md:size-[350px] rounded-full top-[-30%] left-[-25%] blur-3xl bg-primary"></div> */}
            <motion.span
              className="text-primary text-sm md:text-lg font-black"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.25}
            >
              BETHMAR LIMITED
            </motion.span>
            <motion.p
              className="text-base font-light text-white tracking-tighter pb-[10px] md:pb-[20px]"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.5}
            >
              Building an Online Presence for Industry Leaders.
            </motion.p>
            <motion.p
              className="text-sm md:text-lg text-gray-200 font-medium max-w-lg tracking-tight pb-[10px] md:pb-[25px]"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1}
            >
              Bethmar Ltd. approached us to establish their first digital
              footprint—showcasing their expertise in civil, power, and telecom
              infrastructure. Understanding their need for professionalism and
              simplicity, we developed a sleek single-page website. The design
              highlights their core services with interactive elements and
              smooth animations, ensuring a modern and trustworthy online
              presence. The result? A digital platform that positions Bethmar as
              a leading player in their industry.
            </motion.p>
            <motion.div
              className=""
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1.5}
            >
              <a href="https://bethmar.co.uk" target="_blank" className="text-white hover:border-b-1 border-white transition-all duration-300 ease-in">Visit Site</a>
            </motion.div>
          </div>
          <div className="w-full lg:w-8/12 relative flex flex-col justify-between items-center overflow-hidden md:h-full h-[50vh]">
            <div className="absolute inset-0 h-full w-full">
              <img src={project3} alt="" className="h-full w-full" />
            </div>
            <motion.div
              style={{
                y: y2,
                opacity: opacity,
              }}
              className="h-[50%] w-fit ml-auto"
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <img
                src={bethmar1}
                alt="Project 1"
                className="h-full w-full object-cover p-[30px]"
              />
            </motion.div>
            <motion.div
              style={{
                y: y1,
                opacity: opacity,
              }}
              className="h-[50%] w-fit mr-auto"
            >
              <img
                src={bethmar2}
                alt="Project 1"
                className="h-full w-full object-cover p-[30px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects3;
