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
    <div className="relative overflow-hidden">
      {/* Background Ellipses */}
      <motion.div
        id="contact-us"
        className="absolute top-auto left-1/2 w-[300px] h-[300px] rounded-full bg-tertiary blur-[200px]"
        initial={{
          opacity: 0,
          scale: 0.5,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{ willChange: "transform", transformStyle: "preserve-3d" }}
      />

      <div className="bg-black_3 relative">
        <motion.div
          className="orange-elipse absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-tertiary blur-[200px]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="max-w-[1200px] mx-auto px-8 pr-14 py-40 md:pt-40 pt-10 pb-96  md:pb-40">
          {/* About Us Section */}
          <div className="md:flex md:gap-20 mb-40 relative">
          <div className="grid grid-cols-2 gap-5 mt-8 mb-16 md:w-1/2 w-full relative">
              <motion.img
                src="/about-us/image.jpg"
                alt=""
                className="rounded-sm md:w-full md:h-auto h-64"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              />
              <motion.img
                src="/about-us/image1.jpg"
                alt=""
                className="rounded-sm relative top-20 md:w-full md:h-auto h-64"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              />
            </div>
            <div className="md:w-1/2 text-center md:text-start flex">
              <div className="">
                <div className="">
                  <h2 className="uppercase text-lg font-bold p-4 pl-0 pt-10 md:pt-0 text-tertiary">
                    About Us
                  </h2>
                  <h2 className="text-5xl md:pr-40 text-white">
                    We Are Martial Arts School
                  </h2>
                  <p className="mt-4 text-lg md:pr-10 text-paragraph">
                    Lorem ipsum dolor sit amet consectetur. Molestie cum ut
                    aliquam convallis. Lacus sed velit adipiscing diam. Donec
                    elementum mi lobortis vulputate fringilla duis vitae tempor
                    at.
                  </p>
                </div>

                <div
                  role="list"
                  className="gap-y-4 "
                >
                  {/* Link 1 */}
                  <div role="listitem" className="mt-4">
                    <a
                      href="/programs/muay-thai-kickboxing"
                      className="flex items-center justify-between py-6 px-4 bg-black_2 transition duration-300 rounded-md"
                    >
                      <div className="left-text-block flex items-center">
                        <div className="all-caps-text text-white text-xl mr-4">
                          01
                        </div>
                        <h6 className="text-tertiary text-2xl">
                          Muay Thai Kickboxing
                        </h6>
                      </div>
                      <div className="icon-arrow text-tertiary text-2xl">→</div>
                    </a>
                  </div>

                  {/* Link 2 */}
                  <div role="listitem" className="mt-4">
                    <a
                      href="/programs/aikido-for-self-defense"
                      className="flex items-center justify-between py-6 px-4 bg-black_2 transition duration-300 rounded-md"
                    >
                      <div className="left-text-block flex items-center">
                        <div className="all-caps-text text-white text-xl mr-4">
                          02
                        </div>
                        <h6 className="text-tertiary text-2xl">
                          Aikido for Self-Defense
                        </h6>
                      </div>
                      <div className="icon-arrow text-tertiary text-2xl">→</div>
                    </a>
                  </div>

                  {/* Link 3 */}
                  <div role="listitem" className="mt-4">
                    <a
                      href="/programs/ninjutsu-the-art-of-the-ninja"
                      className="flex items-center justify-between py-6 px-4 bg-black_2 transition duration-300 rounded-md"
                    >
                      <div className="left-text-block flex items-center">
                        <div className="all-caps-text text-white text-xl mr-4">
                          03
                        </div>
                        <h6 className="text-tertiary text-2xl">
                          Ninjutsu: The Art of the Ninja
                        </h6>
                      </div>
                      <div className="icon-arrow text-tertiary text-2xl">→</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="md:hidden">
            <h2 className="uppercase text-lg font-bold text-tertiary">
              Testimonials
            </h2>
            <h2 className="text-3xl md:text-5xl text-white mt-4">
              Hear From Our People
            </h2>
          </div>
          <div className="mt-12 flex flex-col-reverse md:flex-row">
            {/* Text Section */}
            <div className="flex-1 mt-8 md:mt-0 md:pr-4">
              <div className="hidden md:block">
                <h2 className="uppercase text-lg font-bold text-tertiary">
                  Testimonials
                </h2>
                <h2 className="text-3xl md:text-5xl text-white mt-4">
                  Hear From Our People
                </h2>
              </div>
              <div className="mt-7 relative flex">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-lg shadow-lg mb-4 absolute w-full h-full transition-opacity duration-500 ${
                      index === currentTestimonial ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-white text-xl md:text-2xl">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-8">
                      <h6 className="text-tertiary text-lg md:text-2xl">
                        {testimonial.author}
                      </h6>
                      <div className="text-secondary_text text-base md:text-xl">
                        {testimonial.title}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <motion.img
                src={testimonials[currentTestimonial]?.image}
                alt={testimonials[currentTestimonial]?.author}
                className="w-full h-96 rounded-lg mb-8 md:mb-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
