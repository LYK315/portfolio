import { BrowserRouter } from "react-router-dom";
import Navbar from "@components/Navbar";
import Hero from "@components/Hero/Hero";
import About from "@components/About/About";
import Journey from "@components/Journey/Journey";
import Skills from "@components/Skills/Skills";
import Projects from "@components/PrevProject/Projects";
import Connect from "@components/ConnectMe/Connect";
import ScrollToTop from "@components/ScrollToTop";
import VideoModal from "@components/VideoModal";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />

      {/* Body Contents */}
      <div className="flex flex-col bg-primary min-w-full h-fit z-10">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Connect />
        <ScrollToTop />

        {/* Modal for Enlarged Video */}
        <VideoModal />

        {/* Footer */}
        <div className="w-full flex justify-center text-secondary text-[14px] mt-8 py-12">
          © 2025 Liaw Yi Kai
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
