import React from "react";
import ArrowButton from "../../components/ArrowButton";
import contactBanner from "../../assets/svg/contactBanner.svg";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
  return (
    <main>
      <div className="bg-dark w-full h-[90vh] px-[20px]">
        <div className="h-[80vh] max-w-[1600px] mx-auto flex flex-row items-center justify-between text-white">
          <div className="w-4/12 flex flex-col gap-[25px]">
            <p className="font-bold text-5xl">
              Let’s Build Something Amazing Together!
            </p>
            <p>
              We’d love to hear from you! Whether you have a project idea, need
              expert advice, or just want to say hello, our team is ready to
              help. Let’s collaborate and create something impactful.
            </p>
            <ArrowButton text={"Get Consultation"} />
          </div>
          <div className="w-8/12">
            <img src={contactBanner} alt="" />
          </div>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto relative">
        <div className="mt-[-25vh] w-full px-[40px]">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Contact;
