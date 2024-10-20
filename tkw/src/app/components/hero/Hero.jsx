"use client"; // This line makes the component a client component

import { motion } from "framer-motion";
import Button from "../button/Button";

const Hero = () => {
  return (
    <div className="relative bg-[url('/hero/hero_bg.jpg')] bg-cover bg-center h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-80" /> {/* Overlay */}
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center text-center md:text-left h-full z-10">
        {/* Left content */}
        <motion.div
          className="md:w-1/2 p-4 pb-0 mt-20 md:mt-36"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-5xl p-6 md:pl-0 md:text-8xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }} // Changed y to 50
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            Train Your <span className="text-tertiary">Martial Arts</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 md:text-left text-center"
            initial={{ opacity: 0, y: 20 }} // Changed y to 20
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Unlock your inner warrior: martial arts training made easy. Elevate
            your fighting game. Learn martial arts with expert guidance.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:mx-0 mx-14 md:space-x-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button href="#contact-us" variant="solid" className="px-4 py-2 text-lg">
                Enroll Now
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button href="#programs" variant="transparent" className="px-4 py-2 text-lg">
                See Our Classes
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right content (Statistics) */}
        <motion.div
          className="md:w-1/2 p-4 flex justify-center items-end space-x-12 mt-0 md:pt-24 md:pl-40 md:mt-96"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-6xl font-semibold">8K+</span>
            <div className="text-lg md:text-2xl font-medium">Students</div>
          </motion.div>

          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-6xl font-semibold">20+</span>
            <div className="text-lg md:text-2xl font-medium">Years Experience</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
