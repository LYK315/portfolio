import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constant';
import { kai, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [shadow, setShadow] = useState(false)

  const changeshadow = () => {
    window.scrollY >= 50 ? setShadow(true) : setShadow(false)
  }

  window.addEventListener('scroll', changeshadow)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary ${shadow ? 'shadow-2xl' : 'shadow-none'} shadow-indigo-800/30`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        {/* Navbar Home Icon  */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={kai} alt="logo" className='w-9 h-9 object-contain mr-2' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            LYK &nbsp;
            <span className='sm:block hidden'>|&nbsp; Portfolio</span>
          </p>
        </Link>

        {/* Navbar Links */}
        <ul className='list-none hidden flex-row sm:flex gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={
                `${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`
              }
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Burger Menu Icon */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt={menu}
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Burger Menu List */}
        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          {/* All Links */}
          <ul className='list-none flex flex-col justify-end items-start gap-4'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={
                  `${active === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`
                }
                onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle)
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav >
  );
}

export default Navbar;