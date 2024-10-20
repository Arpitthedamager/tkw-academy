import Image from "next/image";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import MartialArtsSection from "./components/martialartssection/MartialArtsSection";
import TrainingProgram from "./components/trainingprogram/TrainingProgram";
import FreePassSection from "./components/freepasssection/FreePassSection";
import FAQ from "./components/faq/FAQ";
import BlogList from "./components/bloglist/BlogList";
import Footer from "./components/footer/Footer";
import Instructors from "./components/instructors/Instructors";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div>
          <Hero />
        </div>
        {/* <div className="max-w-[1200px] mx-auto px-4"> */}
          {/* <MartialArtsSection /> */}
          <TrainingProgram/>
          <Instructors/>
          <FreePassSection/>
          <FAQ/>
          <BlogList/>
          <Footer/>
        {/* </div> */}
      </main>
    </>
  );
}
