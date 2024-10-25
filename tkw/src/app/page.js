import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import TrainingProgram from "./components/trainingprogram/TrainingProgram";
import FreePassSection from "./components/freepasssection/FreePassSection";
import FAQ from "./components/faq/FAQ";
import BlogList from "./components/bloglist/BlogList";
import Footer from "./components/footer/Footer";
import Instructors from "./components/instructors/Instructors";
import AboutUs from "./components/aboutus/AboutUs";

export const metadata = {
  metadataBase: new URL("https://universaltaekwondoacademy.com"),
  title: "Universal Taekwondo Academy - Master the Art of Taekwondo",
  description: "Universal Taekwondo Academy offers expert training in Taekwondo, focusing on self-discipline, fitness, and personal growth in a supportive community.",
  keywords: "Taekwondo, martial arts, self-defense, fitness, Universal Taekwondo Academy, training, martial arts academy, sport, health",
  author: "Universal Taekwondo Academy Team",
  openGraph: {
    title: "Universal Taekwondo Academy - Master the Art of Taekwondo",
    description: "Join us at Universal Taekwondo Academy for expert training and a vibrant community dedicated to martial arts.",
    url: "https://universaltaekwondoacademy.com",
    siteName: "Universal Taekwondo Academy",
    images: [
      {
        url: "https://universaltaekwondoacademy.com/favicon.ico", // Update with actual favicon URL
        width: 800,
        height: 600,
        alt: "Universal Taekwondo Academy Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@UniversalTKD", // Update with actual Twitter handle if available
    title: "Universal Taekwondo Academy - Master the Art of Taekwondo",
    description: "Join us at Universal Taekwondo Academy for expert training in Taekwondo and a supportive community.",
    image: "https://universaltaekwondoacademy.com/favicon.ico", // Update with actual favicon URL
  },
};

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
        <AboutUs />
        <TrainingProgram />
        <Instructors />
        <FreePassSection />
        <FAQ />
        <BlogList />
        <Footer />
        {/* </div> */}
      </main>
    </>
  );
}
