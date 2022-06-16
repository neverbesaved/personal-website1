import React, { useState } from "react";
import {
  FaBars,
  FaGithub,
  FaFacebook,
  FaSpotify,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [header, setHeader] = useState(false);
  const handleClick = () => {
    setHeader(!header);
  };
  return (
    <div className="fixed w-full h-[75px] flex justify-between items-center px-4 bg-[#0A1929] border-b-2 border-[#A5DEF1] text-gray-300">
      <div>
        <h1 className="text-[#A5DEF1] text-4xl font-[Fascinate] pl-8">Alex T.</h1>
      </div>

      <ul className="hidden md:flex">
        <li>Homepage</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact me</li>
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
        <li className="py-6 text-4xl">Homepage</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact me</li>
      </ul>

      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/neverbesaved" target="_blank"
            >
              GitHub <FaGithub />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.facebook.com/ticau.alexandru" target="_blank"
          >
            Facebook <FaFacebook />
          </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://open.spotify.com/user/31nyxokdszpt72elpvabqljfiwci?si=6a249895be5a4b26" target="_blank"
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
