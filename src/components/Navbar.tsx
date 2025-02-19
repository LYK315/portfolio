import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "utils/motion";
import * as icon from "assets/index";
import { General } from "assets/index";
import { NAVBAR } from "constants/index";
import { useAppSelector } from "stores/hook";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [openImgModal, setOpenImgModal] = useState(false);
  const isPlaying = useAppSelector((state) => state.musicPlayer.isPlaying);

  // Track Scroll and Set Shadow appearance for navbar
  const changeshadow = () => {
    const hoverTargetAchieved: boolean = window.scrollY >= 50 ? true : false;
    setShadow(hoverTargetAchieved);
  };

  // Listen to windows scroll
  window.addEventListener("scroll", changeshadow);

  return (
    <div
      className={`fixed w-full max-h-[4.1rem] flex justify-between items-center top-0 py-[15px] px-6 2xs:pl-4 xs:pl-10 z-50 bg-primary shadow-indigo-800/30 ${
        shadow ? "shadow-2xl" : "shadow-none"
      }`}
    >
      {/* Title - Name or Song */}
      <Link
        to="/"
        className={`flex items-center gap-2 pl-3`}
        onClick={() => {
          setActiveSection("");
          window.scrollTo(0, 0);
        }}
      >
        <img
          src={icon.Other.lyk}
          className="w-11 h-11 object-fill rounded-full mr-2 cursor-zoom-in shadow-[0_0_11px_3px_rgba(255,255,255,0.5)]"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpenImgModal(true);
          }}
          alt="Profile Image"
        />

        {/* Title | Current Playing */}
        <div className="flex flex-row text-white text-[18px] font-bold gap-2 hover:text-hover max-w-[18rem] max-h-[2rem] overflow-hidden rounded-2xl">
          {isPlaying ? (
            <div className="max-h-full max-w-full font-mono font-normal animate-scroll whitespace-nowrap">
              <img
                src={General.musicNote}
                alt="Custom Emoji"
                className="animate-bounce inline-block max-w-4 max-h-4"
              />
              <img
                src={General.musicNote}
                alt="Custom Emoji"
                className="animate-bounceSlow inline-block max-w-4 max-h-4 mr-2"
              />
              Current Playing: Redbone - Come and Get Your Love
            </div>
          ) : (
            <>
              <span>LYK</span>
              <span>|</span>
              <span>Portfolio</span>
            </>
          )}
        </div>
      </Link>

      {/* Profile Image Modal */}
      {openImgModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10"
          onClick={() => setOpenImgModal(false)}
        >
          <div className="relative">
            <img
              src={icon.Other.lyk}
              className="w-96 h-96 object-cover rounded-full"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
            <button
              className="absolute top-2 right-6 text-white bg-gray-700 rounded-full px-2 py-1"
              onClick={() => setOpenImgModal(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Navbar Links */}
      <ul className="list-none hidden flex-row sm:flex gap-10 mr-[1.5em]">
        {NAVBAR.map((item) => (
          <li
            key={item.id}
            className={`${
              activeSection === item.title ? "text-white" : "text-secondary"
            } hover:text-hover text-[18px] font-medium cursor-pointer`}
            onClick={() => setActiveSection(item.title)}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      {/* Burger Menu Icon */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={openMenu ? icon.General.close : icon.General.menu}
          alt={icon.General.menu}
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        />
      </div>

      {/* Burger Menu List */}
      <motion.div
        initial="hidden"
        animate={openMenu ? "show" : "hidden"}
        variants={fadeIn({
          direction: "left",
          type: "spring",
          delay: 0,
          duration: 0.75,
        })}
        className={`${
          openMenu ? "flex" : "hidden"
        } p-5 pr-10 absolute top-[4.5em] right-[1em] z-50 rounded-xl bg-tertiary sm:hidden shadow-md shadow-indigo-400/50`}
      >
        {/* All Links */}
        <ul className="list-none flex flex-col justify-end items-start gap-4">
          {NAVBAR.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              animate={openMenu ? "show" : "hidden"}
              variants={fadeIn({
                direction: "left",
                type: "spring",
                delay: 0.1 * index,
                duration: 0.75,
              })}
            >
              <li
                key={item.id}
                className={`${
                  activeSection === item.title ? "text-white" : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px] hover:text-hover`}
                onClick={() => {
                  setActiveSection(item.title);
                  setOpenMenu(!openMenu);
                }}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            </motion.div>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
