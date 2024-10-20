// components/AboutUs.js
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "I appreciate the emphasis on safety in this martial arts course. The instructors are careful to ensure that students are trained in a safe environment and that they have the proper protective gear. As a coach, I feel confident that my students are in good hands.",
    author: "John McMiller",
    title: "Kyokushinkai Karate Champion",
    image:
      "https://cdn.prod.website-files.com/63fce03a21e36b96315d0a99/63fdfd6c9d35c5f205791286_Image%2005.jpg",
  },
  {
    quote:
      "I have been coaching for many years, and I can honestly say that this martial arts course is one of the best I have seen. The curriculum is well-structured, and the techniques taught are effective and applicable in real-world situations.",
    author: "Jane Doe",
    title: "Martial Arts Enthusiast",
    image:
      "https://cdn.prod.website-files.com/63fce03a21e36b96315d0a99/63fe02736dad4cd31908ddbd_Image%2004.jpg",
  },
  {
    quote:
      "The instructors in this martial arts course are exceptional. They are knowledgeable, patient, and dedicated to helping their students succeed. They provide constructive feedback and ensure that each student gets individual attention.",
    author: "Alice Smith",
    title: "Self-Defense Advocate",
    image:
      "https://cdn.prod.website-files.com/63fce03a21e36b96315d0a99/63fe0330162371ceb4829237_Image%2006.jpg",
  },
];

const AboutUs = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="bg-black_3">
        <div className="max-w-[1200px] mx-auto px-8 pr-14   py-40 pb-96">
          <div className="text-center">
            <h2 className="uppercase text-xl font-bold text-secondary">
              About Us
            </h2>
            <h2 className="text-4xl text-primary">
              We Are Martial Arts School
            </h2>
            <p className="mt-4 text-lg text-paragraph">
              Lorem ipsum dolor sit amet consectetur...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {/* Program Links */}
            {/* ... (program links code remains the same) */}
          </div>

          <div className="mt-12 flex flex-col md:flex-row">
            <div className="flex-1 pr-4">
              <h2 className="uppercase text-lg font-bold text-tertiary">
                Testimonials
              </h2>
              <h2 className="text-5xl md:mr-60 text-white mt-4">
                Hear From Our People
              </h2>
              <div className="mt-7 relative  flex">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-lg shadow-lg mb-4 md:pl-0 absolute w-full h-full transition-opacity duration-500 ${
                      index === currentTestimonial ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-white text-2xl">"{testimonial.quote}"</p>
                    <div className="mt-8">
                      <h6 className="text-tertiary text-2xl">
                        {testimonial.author}
                      </h6>
                      <div className="text-secondary_text text-xl">
                        {testimonial.title}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <motion.img
                src={testimonials[currentTestimonial]?.image}
                alt={testimonials[currentTestimonial]?.author}
                className="w-full h-max rounded-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            {/* <div className="mt-4 relative flex md:hidden">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-lg shadow-lg mb-4 absolute w-full h-full transition-opacity duration-500 ${
                    index === currentTestimonial ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-paragraph">"{testimonial.quote}"</p>
                  <div className="mt-2">
                    <h6 className="text-tertiary">{testimonial.author}</h6>
                    <div className="text-secondary_text">
                      {testimonial.title}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
