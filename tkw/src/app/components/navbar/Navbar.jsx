"use client"; // This line makes the component a client component

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Button from "../button/Button";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    controls.start({ x: isOpen ? '-100%' : '0%' });
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      controls.start({ x: '0%' });
      window.addEventListener('click', handleClickOutside);
    } else {
      controls.start({ x: '-100%' });
      window.removeEventListener('click', handleClickOutside);
    }
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, controls]);

  return (
    <nav className="fixed top-0 left-0 w-full mt-4 text-white bg-transparent z-20">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-8 py-4">
        <Link href="/" className="text-2xl flex font-bold">
          <img src="favicon.ico" alt="Logo" className="h-10 w-auto mr-2 pb-2" />
          Martial Arts
        </Link>
        <div className="hidden md:flex md:flex-row md:flex">
          <Link href="/" className="m-6 text-xl hover:text-tertiary">Demos</Link>
          <div className="relative m-6 text-xl group">
            <button className="flex items-center hover:text-tertiary">
              Who We Are
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg hidden group-hover:block">
              {['About Us', 'Instructors', 'Pricing', 'Testimonials', 'FAQ', 'Contact Us'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="block px-4 py-2 transition-transform transform hover:bg-tertiary hover:text-white hover:translate-x-1">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/programs" className="m-6 text-xl hover:text-tertiary">Programs</Link>
          <Link href="/events" className="m-6 text-xl hover:text-tertiary">Events</Link>
          <Link href="/blog" className="m-6 text-xl hover:text-tertiary">Blog</Link>
          <Link href="#cart" className="m-6 flex items-center hover:text-tertiary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-6 h-6 fill-current">
              <path d="M2.60592789,2 L0,2 L0,0 L4.39407211,0 L4.84288393,4 L16,4 L16,9.93844589 L3.76940945,12.3694378 L2.60592789,2 Z M15.5,17 C14.6715729,17 14,16.3284271 14,15.5 C14,14.6715729 14.6715729,14 15.5,14 C16.3284271,14 17,14.6715729 17,15.5 C17,16.3284271 16.3284271,17 15.5,17 Z M5.5,17 C4.67157288,17 4,16.3284271 4,15.5 C4,14.6715729 4.67157288,14 5.5,14 C6.32842712,14 7,14.6715729 7,15.5 C7,16.3284271 6.32842712,17 5.5,17 Z" />
            </svg>
          </Link>
          <Button href="/contact-us" variant="solid" className="m-6 mt-0">
            Enroll Now
          </Button>
        </div>
        {/* Hamburger Icon */}
        <button className="md:hidden text-white z-30" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
            <path d="M3 6h18M3 12h18m-7 6h7" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <motion.div
        ref={ref}
        initial={{ x: '-100%' }}
        animate={controls}
        className="fixed top-0 left-0 w-3/4 h-full bg-black text-white shadow-lg z-30"
      >
        <div className="flex flex-col p-4">
          <button className="self-end" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link href="/" className="text-2xl my-4">Demos</Link>
          <Link href="/about" className="my-4">About Us</Link>
          <Link href="/instructors" className="my-4">Instructors</Link>
          <Link href="/pricing" className="my-4">Pricing</Link>
          <Link href="/testimonials" className="my-4">Testimonials</Link>
          <Link href="/faq" className="my-4">FAQ</Link>
          <Link href="/contact-us" className="my-4">Contact Us</Link>
          <Link href="/programs" className="my-4">Programs</Link>
          <Link href="/events" className="my-4">Events</Link>
          <Link href="/blog" className="my-4">Blog</Link>
          <Link href="#cart" className="my-4">Cart</Link>
          <Button href="/contact-us" variant="solid" className="my-4">Enroll Now</Button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
