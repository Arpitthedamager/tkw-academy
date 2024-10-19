"use client";
import React from "react";
import Button from "../button/Button";
import Link from "next/link";
import { motion } from "framer-motion";

const TrainingProgram = () => {
  const programs = [
    {
      title: "Kids Karate Group",
      description:
        "In the Kids Karate Group program, children learn the fundamentals of karate, including basic punches, kicks, and blocks.",
      date: "March 24, 2023",
      time: "12:00 - 14:00",
      link: "/programs/kids-karate-group",
      image:
        "/t-program/image.jpg",
    },
    {
      title: "Teen & Adult Group",
      description:
        "In the Teen & Adult Group program, students learn the fundamentals of martial arts.",
      date: "March 15, 2023",
      time: "12:00 - 14:00",
      link: "/programs/teen-adult-group",
      image:
        "/t-program/image1.jpg",
    },
    {
      title: "Traditional Arts",
      description:
        "In the Traditional Arts program, students learn the techniques and philosophies of specific styles.",
      date: "March 20, 2023",
      time: "12:00 - 14:00",
      link: "/programs/traditional-arts",
      image:
        "/t-program/image2.jpg",
    },
  ];

  return (
    <div className="section bg-accent text-secondary">
      <div className="base-container w-container max-w-[1200px] mx-auto px-4 py-36">
        {/* Apply motion.div to heading-conten */}
        <motion.div
          className="heading-conten md:flex items-center pb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <div className="heading-text text-center md:text-left">
            <h5 className="uppercase text-tertiary text-lg pl-2">
              Classes Program
            </h5>
            <h2 className="text-4xl font-bold p-2">Training Program</h2>
          </div>
          <div className="flex justify-center md:justify-end mt-4 md:mt-0 md:ml-auto">
            <Button
              href="/programs"
              variant="transparent"
              className="px-8 h-16"
            >
              View All
            </Button>
          </div>
        </motion.div>

        <div className="collection-list-wrapper-program">
          <div role="list" className="flex flex-col space-y-4">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                role="listitem"
                className="flex flex-col md:flex-row rounded-lg p-4 pb-5 shadow-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="left-block-content md:flex-1 flex flex-col">
                  <Link
                    href={program.link}
                    className="text-2xl font-bold text-tertiary py-4"
                  >
                    {program.title}
                  </Link>
                  <p className="text-xl text-secondary_text">
                    {program.description}
                  </p>
                  <div className="data-time-block md:flex gap-4 mt-4">
                    <div className="data-block flex items-center">
                      <span className="icon">📅</span>
                      <span className="small-text">{program.date}</span>
                    </div>
                    <div className="data-block flex items-center mt-4">
                      <span className="icon">🕒</span>
                      <span className="small-text">{program.time}</span>
                    </div>
                  </div>
                  <div className="my-8 text-xl">
                    <Link
                      href={program.link}
                      className="flex hover:text-tertiary"
                    >
                      View More <span className="text-tertiary pl-2">→</span>
                    </Link>
                  </div>
                </div>
                <Link
                  href={program.link}
                  className="image-link-block md:w-1/2 mt-4 md:mt-0 md:ml-4"
                >
                  <motion.img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-[250px] object-cover rounded-lg md:ml-10"
                    style={{ maxWidth: "500px", minWidth: "250px" }}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }} // Zoom in effect on hover
                    transition={{ duration: 0.3 }} // Smooth transition
                  />
                </Link>
                <hr className="h-0 bg-secondary_text my-5 md:visible" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingProgram;
