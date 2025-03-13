import React, { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import stock1 from "../../../assets/images/stock1.png";
import project4 from "../../../assets/images/project4.jpg";

const Projects4 = () => {
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end start"],
  });

  const isInView = useInView(target, { once: true, amount: 0.5 });

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.4 },
    }),
  };

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <main className="w-full">
      <div ref={target} className="w-full h-[200vh]">
        <div className="flex flex-col md:flex-row h-screen md:h-[calc(100vh-60px)] sticky top-15 md:top-15">
          <div className="w-full md:w-8/12 relative flex flex-col justify-between items-center overflow-hidden md:h-full h-[50vh]">
            <div className="absolute inset-0 h-full w-[105%]">
              <img
                src={project4}
                alt="Bethmar Main Project Image"
                className="h-full w-full object-cover"
              />
            </div>

            <motion.div
              style={{
                scale,
                opacity,
              }}
              className="h-auto w-auto mx-auto"
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <img
                src={stock1}
                alt="Stock Image for Bethmar Project"
                className="h-full w-full object-cover p-[30px]"
              />
            </motion.div>
          </div>

          <div className="w-full md:w-4/12 p-[10px] md:p-[30px] bg-gradient-to-b from-dark to-zinc-950 flex flex-col justify-start md:justify-center relative overflow-hidden md:h-full h-[50vh]">
            {/* <div className="absolute size-[150px] md:size-[350px] rounded-full top-[-30%] left-[-25%] blur-3xl bg-primary"></div> */}

            <motion.span
              className="text-primary text-sm md:text-lg font-black"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.25}
            >
              STOCK INVENTORY & MANAGEMENT SYSTEM
            </motion.span>

            <motion.p
              className="text-base font-light text-white tracking-tighter pb-[10px] md:pb-[20px]"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.5}
            >
              Empowering Businesses with Seamless Inventory Control.
            </motion.p>

            <motion.p
              className="text-sm md:text-lg text-gray-200 font-medium max-w-lg tracking-tight pb-[10px] md:pb-[25px]"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1}
            >
              We developed a comprehensive Stock Inventory & Management System
              to simplify and optimize inventory processes. The goal was to
              create a platform that not only provides real-time stock updates
              but also enhances decision-making through dynamic visual reports.
              Integrated with a powerful POS system, it ensures smooth
              transactions and automatic stock adjustments. The result is a
              user-friendly, efficient system that strengthens inventory
              control, streamlines operations, and empowers businesses to manage
              stock with confidence.
            </motion.p>

            {/* <motion.div
              className=""
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1.5}
            >
              <a
                href="https://tsdashapp.com"
                target="_blank"
                className="text-white hover:border-b-1 border-white transition-all duration-300 ease-in"
              >
                Visit Site
              </a>
            </motion.div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects4;
