import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import displayPicture from "../assets/DisplayPicture.jpg";
import resume from "../assets/ADIGUNIsraelCC.pdf";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleClick = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-gray-300">
      <div>
        <a href="https://github.com/IcyEazy">
          <img
            className="border-2 border-white-400 hover:border-teal-400"
            src={displayPicture}
            alt="logo"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </a>
      </div>

      {/* {menu} */}
      <ul className="hidden md:flex">
        <li className="hover:text-teal-500 hover:font-bold hover:scale-110">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-teal-500 hover:font-bold hover:scale-110">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-teal-500 hover:font-bold hover:scale-110">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-teal-500 hover:font-bold hover:scale-110">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:text-teal-500 hover:font-bold hover:scale-110">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* {hamburger} */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {openMobileMenu ? <FaTimes /> : <FaBars />}
      </div>
      {/* {mobile menu} */}
      <ul
        className={
          openMobileMenu
            ? "absolute top-0 left-0 w-full h-screen bg-[#0A192F] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl hover:text-teal-500 hover:font-bold hover:scale-110">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-teal-500 hover:font-bold hover:scale-110">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-teal-500 hover:font-bold hover:scale-110">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-teal-500 hover:font-bold hover:scale-110">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-teal-500 hover:font-bold hover:scale-110">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* {social icons} */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600 brRad">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/adigun-israel-769aa7190/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333] brRad">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/IcyEazy"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0] brRad">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:israelcollins1409@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69] brRad">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={resume}
              download={resume}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
