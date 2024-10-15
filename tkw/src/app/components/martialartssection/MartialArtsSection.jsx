"use client";
import React from 'react';
import { motion } from 'framer-motion';

const MartialArtsSection = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="overflow-hidden">
            <div className="bg-orange-500 h-20"></div>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="uppercase text-white">About Us</div>
                    <h2 className="text-3xl font-bold text-gray-800">We Are Martial Arts School</h2>
                    <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur. Molestie cum ut aliquam convallis. Lacus sed velit adipiscing diam. Donec elementum mi lobortis vulputate fringilla duis vitae tempor at.
                    </p>
                </motion.div>

                <div className="flex justify-around mb-12">
                    {["Muay Thai Kickboxing", "Aikido for Self-Defense", "Ninjutsu: The Art of the Ninja"].map((program, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="text-center"
                        >
                            <div className="text-white uppercase">{String(index + 1).padStart(2, '0')}</div>
                            <h6 className="text-orange-500">{program}</h6>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="uppercase text-gray-800">Testimonials</div>
                    <h2 className="text-2xl font-bold">Hear From Our People</h2>
                    <div className="mt-6">
                        <div className="w-full overflow-hidden relative">
                            {/* Slide 1 */}
                            <motion.div
                                className="absolute w-full transition-transform duration-500 transform"
                                initial={{ x: 0 }}
                                animate={{ x: 0 }} // You can implement sliding logic here
                            >
                                <p className="italic">"I have been coaching for many years, and I can honestly say that this martial arts course is one of the best I have seen."</p>
                                <h6 className="text-orange-500">John McMiller</h6>
                                <div>Kyokushinkai Karate Champion</div>
                            </motion.div>
                            {/* Add more slides similarly */}
                        </div>
                    </div>
                </motion.div>

                <div className="flex justify-around mt-12">
                    {[
                        "/partner-logo-1.png",
                        "/partner-logo-2.png",
                        "/partner-logo-3.png",
                        "/partner-logo-4.png"
                    ].map((src, index) => (
                        <img key={index} src={src} alt={`Partner ${index + 1}`} className="h-16" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MartialArtsSection;
