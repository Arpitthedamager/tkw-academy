// components/Instructors.js
"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const instructors = [
    {
        name: 'Esther Howard',
        title: 'Senpai',
        image: '/instructors/image.jpg',
        link: '/instructors/esther-howard',
    },
    {
        name: 'Jane Cooper',
        title: 'Kyokushinkai World Champion',
        image: '/instructors/image1.jpg',
        link: '/instructors/jane-cooper',
    },
    {
        name: 'Jenny Wilson',
        title: 'Karate Europe Champion',
        image: '/instructors/image2.jpg',
        link: '/instructors/jenny-wilson',
    },
    {
        name: 'Albert Flores',
        title: 'Karate Europe Coach',
        image: '/instructors/image3.jpg',
        link: '/instructors/albert-flores',
    },
];

const Instructors = () => {
    return (
        <div className="bg-black_3 relative overflow-hidden">
            {/* Background Spot with Framer Motion */}
            <motion.div
            id='instructors'
                className="orange-elipse absolute top-auto bottom-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-tertiary blur-[200px]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
            />
            <div className="overflow-hidden py-24 max-w-[1200px] mx-auto px-4 relative">
                <div className="text-center">
                    <motion.h5 
                        className="text-lg uppercase text-tertiary"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Team
                    </motion.h5>
                    <motion.h2 
                        className="text-4xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Our Instructors
                    </motion.h2>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                    {instructors.map((instructor, index) => (
                        <motion.div 
                            key={instructor.name} 
                            className="bg-transparent rounded-lg shadow-lg md:p-4 md:py-10 w-full max-w-xs flex-shrink-0 flex flex-col items-center md:items-start text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                        >
                            <motion.div 
                                className="image-container"
                                whileHover={{ scale: 1.1 }} // Zoom effect on hover
                                transition={{ duration: 0.3 }} // Duration of the zoom effect
                                initial={{ scale: 1 }} // Ensure it starts at normal size
                            >
                                <a href={instructor.link}>
                                    <Image
                                        src={instructor.image}
                                        alt={`${instructor.name} Image`}
                                        width={300}
                                        height={250} // Fixed height for uniformity
                                        className="w-72 h-72 object-cover rounded-md"
                                    />
                                </a>
                            </motion.div>
                            <a href={instructor.link} className="text-2xl mt-5 text-tertiary">
                                {instructor.name}
                            </a>
                            <div className="text-secondary_text mt-1 text-base">{instructor.title}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Instructors;
