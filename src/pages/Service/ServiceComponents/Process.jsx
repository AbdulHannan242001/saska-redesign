import React from "react";
import serviceBg from "../../../assets/images/servicesBg.png";
import process from "../../../assets/svg/process.svg";

const Process = () => {
  return (
    <main className="relative h-[1600px] w-full text-white">
      <div className="absolute inset-0 h-full w-full -z-10">
        <img src={serviceBg} alt="" />
      </div>
      <div className="max-w-[1600px] mx-auto z-50 h-full">
        <div className="h-full items-center flex flex-col justify-center gap-[60px]">
          <div className="flex flex-row">
            <div className="w-6/12 flex flex-col gap-[13px]">
              <p className="font-semibold text-2xl">How We Work</p>
              <p className="font-black text-[82px] leading-[100%]">
                Our Process <br />{" "}
                <span className="text-[64px]">Work Flow</span>{" "}
              </p>
              <p className="text-lg font-semibold">
                At SASKA Solutions, we follow a structured and efficient process
                to deliver high-quality digital solutions. Our workflow ensures
                clarity, transparency, and collaboration at every stage. Here’s
                a detailed breakdown of how we work:
              </p>
            </div>
            <div className="w-6/12">
              <img src={process} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between w-full gap-[30px]">
            
            <div className="flex flex-row gap-2">
              <div className="flex flex-col items-center">
                <span className="size-[54px] border-4 border-primary rounded-full flex items-center justify-center text-[32px] font-black text-primary">
                  {" "}
                  1{" "}
                </span>
                <div className="border-primary border-dashed h-full border-2"></div>
              </div>
              <div>
                <h1 className="text-[32px] font-bold">Consultation</h1>
                <h1 className="text-lg">
                  Every successful project starts with a clear understanding of
                  client requirements. <br /> During this phase:
                </h1>
                <ul className="ml-6 list-disc">
                  <li>
                    We listen to your business goals, challenges, and vision.
                  </li>
                  <li>We discuss your target audience and competitors.</li>
                  <li>
                    We identify the best approach, technologies, and strategies
                    for your project.
                  </li>
                  <li>We define project scope, timelines, and deliverables.</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="flex flex-col items-center">
                <span className="size-[54px] border-4 border-primary rounded-full flex items-center justify-center text-[32px] font-black text-primary">
                  {" "}
                  4{" "}
                </span>
                <div className="border-primary border-dashed h-full border-2"></div>
              </div>
              <div>
                <h1 className="text-[32px] font-bold">
                  Testing & Optimization
                </h1>
                <h1 className="text-lg">
                  Before launching, we conduct rigorous testing to ensure
                  flawless functionality. <br /> This includes:
                </h1>
                <ul className="ml-6 list-disc">
                  <li>
                    Functional Testing – Ensuring every feature works as
                    expected.
                  </li>
                  <li>
                    Performance Testing – Checking speed, responsiveness, and
                    optimization.
                  </li>
                  <li>
                    Security Testing – Identifying vulnerabilities and
                    strengthening security.
                  </li>
                  <li>
                    User Testing – Gathering feedback to enhance user
                    experience.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="flex flex-col items-center">
                <span className="size-[54px] border-4 border-primary rounded-full flex items-center justify-center text-[32px] font-black text-primary">
                  {" "}
                  2{" "}
                </span>
                <div className="border-primary border-dashed h-full border-2"></div>
              </div>
              <div>
                <h1 className="text-[32px] font-bold">Planning & Research</h1>
                <h1 className="text-lg">
                  After understanding your needs, we move to the planning stage,
                  where we:
                </h1>
                <ul className="ml-6 list-disc">
                  <li>
                    Conduct thorough market research to analyze trends and user
                    expectations.
                  </li>
                  <li>
                    Create a structured project roadmap to ensure smooth
                    execution.
                  </li>
                  <li>
                    Develop wireframes, user flows, and prototypes for design
                    clarity.
                  </li>
                  <li>
                    Choose the best tools and technologies for development.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="flex flex-col items-center">
                <span className="size-[54px] border-4 border-primary rounded-full flex items-center justify-center text-[32px] font-black text-primary">
                  {" "}
                  5{" "}
                </span>
                <div className="border-primary border-dashed h-full border-2"></div>
              </div>
              <div>
                <h1 className="text-[32px] font-bold">Deployment & Support</h1>
                <h1 className="text-lg">
                  Once the project passes all tests, we proceed with the final
                  deployment. Our commitment doesn’t end here!
                </h1>
                <ul className="ml-6 list-disc">
                  <li>
                    We deploy the project on the desired platform (web, mobile,
                    or cloud).
                  </li>
                  <li>We provide training and documentation for your team.</li>
                  <li>
                    We offer post-launch support to fix any issues and ensure
                    smooth operation.
                  </li>
                  <li>
                    We continuously monitor and optimize the solution for future
                    improvements.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="flex flex-col items-center">
                <span className="size-[54px] border-4 border-primary rounded-full flex items-center justify-center text-[32px] font-black text-primary">
                  {" "}
                  3{" "}
                </span>
                <div className="border-primary border-dashed h-full border-2"></div>
              </div>
              <div>
                <h1 className="text-[32px] font-bold">Design & Development</h1>
                <h1 className="text-lg">
                  Once the planning is finalized, our expert team starts
                  designing and developing the solution.
                </h1>
                <ul className="ml-6 list-disc">
                  <li>
                    Our UI/UX designers create visually appealing and
                    user-friendly interfaces.
                  </li>
                  <li>
                    The development team writes clean, optimized, and scalable
                    code.
                  </li>
                  <li>
                    We focus on mobile responsiveness, fast loading times, and
                    intuitive navigation.
                  </li>
                  <li>
                    Security and performance are prioritized during development.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Process;
