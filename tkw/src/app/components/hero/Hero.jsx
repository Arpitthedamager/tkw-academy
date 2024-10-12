"use client"; // This line makes the component a client component

import { motion } from "framer-motion";
import Button from "../button/Button";

const Hero = () => {
  return (
    <div className="relative bg-[url('/hero/hero_bg.jpg')] bg-cover bg-center text-text h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-80" /> {/* Overlay */}
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center text-center  md:text-left h-full z-10">
        <div className="md:w-1/2 p-4 pb-0 mt-20 md:mt-36">
          <motion.h1
            className="text-5xl p-6 md:pl-0 md:text-8xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Train Your <span className="text-tertiary">Martial Arts</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 md:text-lefttext-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Unlock your inner warrior: martial arts training made easy. Elevate
            your fighting game. Learn martial arts with expert guidance.
          </motion.p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:mx-0 mx-14 md:space-x-4 mb-8">
            <Button href="/contact-us" variant="solid" className="px-4 py-2 text-lg">
              Enroll Now
            </Button>
            <Button href="/programs" variant="transparent" className="px-4 py-2 text-lg">
              See Our Classes
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 p-4 flex justify-center items-end space-x-12 mt-0 md:pt-24 md:pl-40 md:mt-96">
          <div className="flex flex-col items-start">
            <span className="text-6xl font-semibold">8K+</span>
            <div className="text-lg md:text-2xl font-medium">Students</div>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-6xl font-semibold">20+</span>
            <div className="text-lg md:text-2xl font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
