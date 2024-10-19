"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const FreePassSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <div className="relative section overflow-hidden">
      {/* Background Image for Mobile with Animation */}
      <motion.div
        className="md:block absolute right-0 top-0 bottom-0 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.5 }} // Slow and late animation for the image
      >
        <img
          src="https://cdn.prod.website-files.com/63fce03a21e36b96315d0a99/63ff393957c2b740097aa209_Rectangle%2015%20(1).jpg"
          alt="Free Pass"
          className="w-full h-full md:max-w-2xl object-cover"
        />

        {/* Icon Positioned Over the Image */}
        <div className="absolute top-4 md:right-16 left-auto bottom-0 z-20">
          <img
            src="https://cdn.prod.website-files.com/63fce03a21e36b96315d0a99/63ff3a47b8a92133ecc1b2e7_Vector%20(5).png"
            alt="Icon"
            className="w-full h-auto mr-10"
          />
        </div>
      </motion.div>

      {/* Main Content with Animation */}
      <div className="bg-black_4">
        <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-20 md:pl-9 text-white z-20 relative">
          <div className="flex flex-col md:flex-row items-start md:text-left text-center">
            {/* Form Section */}
            <div className="form-contact-us w-full md:mr-96 md:pr-64">
              <h2 className="text-5xl font-bold mb-8">Get Your Free Pass</h2>
              <p className="text-lg mb-6">
                Lorem ipsum dolor sit amet consectetur. Molestie cum ut aliquam
                convallis. Lacus sed velit adipiscing diam.
              </p>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 p-6 md:pl-0">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      name="full-name"
                      placeholder="Full Name"
                      required
                      className="field-input w-full px-4 py-2 rounded-md bg-transparent border text-white"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="field-input w-full px-4 py-2 rounded-md bg-transparent border text-white"
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    className="field-input w-full px-4 py-2 rounded-md bg-transparent border text-white"
                  />
                  <input
                    type="submit"
                    value="Get Pass Now"
                    className="primary-button px-6 py-3 mt-4 bg-tertiary text-black rounded-md cursor-pointer"
                  />
                </form>
              ) : (
                <div className="success-message text-green-500 space-y-4 p-6 pb-40 md:pl-0">
                  Thank you! Your submission has been received!
                </div>
              )}

              {/* Error Message */}
              <div className="error-message text-red-500 hidden">
                Oops! Something went wrong while submitting the form.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreePassSection;
