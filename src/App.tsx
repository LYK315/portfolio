import { BrowserRouter } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Journey from './Components/Journey/Journey';
import Skills from './Components/Skills/Skills';
import Projects from './Components/PrevProject/Projects';
import Connect from './Components/ConnectMe/Connect';
import ScrollToTop from './Components/ScrollToTop';

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

          {/* Footer */}
          <div className='w-full flex justify-center text-secondary text-[14px] mt-8 py-12'>
            © 2025 Liaw Yi Kai
          </div>
        </div>

    </BrowserRouter>
  )
}


export default App
