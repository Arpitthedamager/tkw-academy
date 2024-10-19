"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do I have to be in shape to get started?",
      answer: "Many people have the notion that enlightenment is one state. Many also believe that when it is attained, a person is forever in that state. For your necessary discernment. Thank you for reading.",
    },
    {
      question: "Can I get first class for free?",
      answer: "Many people have the notion that enlightenment is one state. Many also believe that when it is attained, a person is forever in that state. For your necessary discernment. Thank you for reading.",
    },
    {
      question: "Will I get hurt during the training?",
      answer: "Many people have the notion that enlightenment is one state. Many also believe that when it is attained, a person is forever in that state. For your necessary discernment. Thank you for reading.",
    },
  ];

  return (
    <div className="bg-black_3">
      <div className="max-w-[1200px] mx-auto px-8 pt-40 pb-36">
        <div className="flex flex-col md:flex-row">
          <div className="text-center justify-center md:text-left md:w-1/2 mb-4 md:mr-20 md:mb-0">
            <h2 className="text-4xl font-bold mb-8 text-white">How We Work / FAQ</h2>
            <p className="text-sm text-secondary_text mb-8">
              Lorem ipsum dolor sit amet consectetur. Molestie cum ut aliquam
              convallis. Lacus sed velit adipiscing diam.
            </p>
            <img
              src="/faq/image.jpg" // Replace with your image path
              alt="Description of the image"
              className="w-full h- rounded-md"
            />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-black_2 rounded-md">
                <div
                  onClick={() => toggleItem(index)}
                  className="flex text-left items-center cursor-pointer py-6 justify-between px-8 bg-black_2 rounded-none"
                >
                  <h6 className={`text-xl md:pr-16 ${openIndex === index ? "text-white" : "text-tertiary"}`}>
                    {faq.question}
                  </h6>
                  <span className={`text-tertiary ${openIndex === index ? "text-white" : ""}`}>
                    {openIndex === index ? "↑" : "↓"}
                  </span>                </div>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: openIndex === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {openIndex === index && (
                    <div className="flex text-left items-center cursor-pointer py-6 justify-between px-10 bg-black_2 rounded-none">
                      <p className="text-paragraph">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
