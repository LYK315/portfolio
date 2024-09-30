import { Link } from 'react-router-dom';
import { useState } from 'react';
import KaiLogo from '../assets/kai.svg'
import * as icon from '../assets';
import { NAVBAR } from '../constants';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [openMenu, setOpenMenu] = useState(false)
  const [shadow, setShadow] = useState(false)

  // Track Scroll and Set Shadow appearance for navbar
  const changeshadow = () => {
    const hoverTargetAchieved: boolean = window.scrollY >= 50 ? true : false;
    setShadow(hoverTargetAchieved);
  }

  // Listen to windows scroll
  window.addEventListener('scroll', changeshadow)

  return (
    <div className={`fixed w-full flex justify-between items-center top-0 py-[15px] px-6 pl-10 z-50 bg-primary shadow-indigo-800/30 ${shadow ? 'shadow-2xl' : 'shadow-none'}`}>

        {/* Title Name */}
        <Link
          to='/'
          className='flex items-center gap-2 pl-3'
          onClick={() => {
            setActiveSection('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={KaiLogo} className='w-9 h-9 object-contain mr-2' />

          <div className="flex flex-row text-white text-[18px] font-bold gap-2 hover:text-hover">
            <span>LYK</span>
            <span>|</span>
            <span>Portfolio</span>
          </div>
        </Link>

        {/* Navbar Links */}
        <ul className='list-none hidden flex-row sm:flex gap-10 mr-[1.5em]'>
          {NAVBAR.map((item) => (
            <li
              key={item.id}
              className={
                `${activeSection === item.title ? 'text-white' : 'text-secondary'} hover:text-hover text-[18px] font-medium cursor-pointer`
              }
              onClick={() => setActiveSection(item.title)}
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>

        {/* Burger Menu Icon */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={openMenu ? icon.close : icon.menu}
            alt={icon.menu}
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>

        {/* Burger Menu List */}
        <div className={`${openMenu ? 'flex' : 'hidden'} p-5 pr-10 absolute top-[4.5em] right-[1em] z-50 rounded-xl bg-primary sm:hidden`}>
          {/* All Links */}
          <ul className='list-none flex flex-col justify-end items-start gap-4'>
            {NAVBAR.map((item) => (
              <li
                key={item.id}
                className={
                  `${activeSection === item.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px] hover:text-hover`
                }
                onClick={() => {
                  setActiveSection(item.title);
                  setOpenMenu(!openMenu)
                }}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}