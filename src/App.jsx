import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Skills, Works, StarsCanvas, Connect } from './components';
import { useState } from 'react';
import { arrowUp } from './assets';

const App = () => {
  const [opacity, setOpacity] = useState('opacity-0')
  const [hover, setHover] = useState(false)

  const changeOpacity = () => {
    if (window.scrollY >= 250) {
      setOpacity('opacity-50')
    } else {
      setOpacity('opacity-0')
    }
  }
  const trackHover = (e) => {
    if (e._reactName == 'onMouseEnter') {
      setHover(true)
    } else {
      setHover(false)
    }
  };

  window.addEventListener('scroll', changeOpacity)

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Skills />
        <Works />
        {/* <Feedbacks /> */}
        {/* <Contact /> */}
        <Connect />
        <StarsCanvas />

        <div className='w-full flex justify-center text-secondary text-[14px] mt-8 py-12'>
          © 2024 Liaw Yi Kai
        </div>

        {/* Scroll to Top Button */}
        <div className='fixed xs:bottom-2 bottom-10 w-full flex justify-center items-cente'>
          <div
            className={`w-10 h-10 rounded-full border-[2px] border-secondary bg-tertiary justify-center transition ease-in-out duration-[750ms] cursor-pointer ${hover ? 'animate-bounce' : 'animate-none'} ${hover ? 'opacity-100' : opacity} ${window.scrollY >= 200 ? 'flex' : 'hidden'}`}
            onClick={() => window.scrollTo(0, 0)}
            onMouseEnter={(e) => trackHover(e)}
            onMouseLeave={(e) => trackHover(e)}
          >
            <img src={arrowUp} alt="arrow-up" className='object-contain p-2' />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
