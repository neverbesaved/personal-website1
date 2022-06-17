import React, { useState } from "react";
import {
  FaBars,
  FaGithub,
  FaFacebook,
  FaSpotify,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [header, setHeader] = useState(false);
  const handleClick = () => {
    setHeader(!header);
  };
  return (
    <div className="fixed w-full h-[75px] flex justify-between items-center px-4 bg-[#0A1929] border-b-2 border-[#A5DEF1] text-gray-300">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <h1 className="cursor-pointer text-[#A5DEF1] text-4xl font-[Fascinate] pl-8">
            Alex T.
          </h1>
        </Link>
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Homepage
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About me
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact me
          </Link>
        </li>
      </ul>
      {/* Hamburger  */}
      <div onClick={handleClick} className="md:hidden cursor-pointer z-10">
        {!header ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile navbar */}
      <ul
        className={
          !header
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0A1929] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Homepage
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About me
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact me
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="bg-[#333333] w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/neverbesaved"
              target="_blank"
            >
              GitHub <FaGithub />
            </a>
          </li>
          <li className="bg-blue-600 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.facebook.com/ticau.alexandru"
              target="_blank"
            >
              Facebook <FaFacebook />
            </a>
          </li>
          <li className="bg-[#1db954] w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://open.spotify.com/user/31nyxokdszpt72elpvabqljfiwci?si=6a249895be5a4b26"
              target="_blank"
            >
              Spotify <FaSpotify />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
