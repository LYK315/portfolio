import { useState } from "react";
import { General } from "@assets/index";

export default function ScrollToTop() {
  const [opacity, setOpacity] = useState('opacity-0')
  const [hover, setHover] = useState(false)

  function changeOpacity() {
    if (window.scrollY >= 250) {
      setOpacity('opacity-50')
    } else {
      setOpacity('opacity-0')
    }
  }

  function trackHover(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    if (e.type === 'mouseenter') {
      setHover(true);
    } else {
      setHover(false);
    }
  }

  window.addEventListener('scroll', changeOpacity)

  return (
    <div className='fixed xs:bottom-2 bottom-10 w-full flex justify-center items-cente z-50' >
      <div
        className={`w-10 h-10 rounded-full border-[2px] border-secondary bg-tertiary justify-center transition ease-in-out duration-[750ms] cursor-pointer ${hover ? 'animate-bounce' : 'animate-none'} ${hover ? 'opacity-100' : opacity} ${window.scrollY >= 200 ? 'block' : 'hidden'}`}
        onClick={() => window.scrollTo(0, 0)}
        onMouseEnter={(e) => trackHover(e)}
        onMouseLeave={(e) => trackHover(e)}
      >
        <img src={General.arrowUp} alt="arrow-up" className='object-contain p-2' />
      </div>
    </div >
  );
}