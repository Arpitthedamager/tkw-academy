// components/Footer.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../button/Button";

const Footer = () => {
  return (
    <div className="bg-black_3 py-10 relative overflow-hidden">
      {/* Background Spot with Framer Motion */}
      <motion.div
      id="contact-us"
        className="absolute top-auto -bottom-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-tertiary blur-[200px]"
        initial={{ opacity: 0, scale: 0.5, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: 1, scale: 1, translateX: "-50%", translateY: "-50%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
      />

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <motion.div
          className="orange-elipse"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="container mx-auto flex flex-col items-center">
          <div className="mb-6">
            <Image src="/favicon.ico" alt="Yin Yang" width={75} height={75} />
          </div>
          <div className="text-center justify-center">
            <h2 className="text-5xl md:text-8xl font-bold text-white">
              Let’s Fight Together
            </h2>
            <p className="text-secondary_text mt-6 mb-14 mx-4 md:mx-56 text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur. Molestie cum ut aliquam
              convallis. Lacus sed velit adipiscing diam. Donec elementum mi
              lobortis vulputate fringilla duis vitae tempor at.
            </p>
            <Button
              href=""
              variant="solid"
              className="px-4 py-2 text-lg"
            >
              Let’s Talk
            </Button>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-10 pb-6 pt-14">
          <div className="container mx-auto flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <div>
                © Martial Arts. All Rights Reserved 2024.
                <Link
                  href="/templates/licensing"
                  className="hover:text-tertiary"
                >
                  Licensing
                </Link>
              </div>
              <div className="flex space-x-1">
                <Link
                  href="https://wcopilot.com/templates"
                  target="_blank"
                  className="hover:text-tertiary"
                >
                  Template
                </Link>
                <span>by</span>
                <Link
                  href="https://wcopilot.com/"
                  target="_blank"
                  className="hover:text-tertiary"
                >
                  wCopilot
                </Link>
                <span>Powered by</span>
                <Link
                  href="https://webflow.com/"
                  target="_blank"
                  className="hover:text-tertiary"
                >
                  Webflow
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap justify-center space-x-4 md:text-xl">
              <Link href="/" className="text-white hover:text-tertiary">
                Home
              </Link>
              <Link href="#about-us" className="text-white hover:text-tertiary">
                About
              </Link>
              <Link href="#events" className="text-white hover:text-tertiary">
                Events
              </Link>
              <Link href="#blog" className="text-white hover:text-tertiary">
                Blog
              </Link>
              <Link href="#programs" className="text-white hover:text-tertiary">
                Programs
              </Link>
              <Link href="#pricing" className="text-white hover:text-tertiary">
                Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
