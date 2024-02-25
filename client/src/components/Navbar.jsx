import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPeopleGroup,
  faAddressBook,
  faHandshake,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import "../css/Navbar.css";
import { motion } from "framer-motion";
import { menyuazlogo } from "../assets";
export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate(); // Add this line


  const handleMenuClick = () => {
    setIsMenu(!isMenu);
  };

  let location = useLocation().pathname;

  const scrollToAboutUs = () => {
    navigate("/"); // Navigate to the home page
    setTimeout(() => {
      const section = document.getElementById('about'); // Assuming your second part has an id="about"
      const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get the navbar's height
      if (section) {
        window.scrollTo({
          top: section.offsetTop-navbarHeight,
          behavior: 'smooth',
        });
      }
    }, 0);
  };

  const scrollToContactUs = () => {
    navigate("/"); 
    setTimeout(() => {
      const section = document.getElementById('contact'); // Assuming your second part has an id="about"
      const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get the navbar's height
      if (section) {
        window.scrollTo({
          top: section.offsetTop-navbarHeight,
          behavior: 'smooth',
        });
      }
    }, 0);
  };

  const scrollToHome = () => {
    navigate("/"); // Navigate to the home page
    setTimeout(() => {
      // Ensure the navigation has completed
      const section = document.getElementById('home'); // Assuming your second part has an id="about"
      if (section) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }, 0);
  };


  return (
    <motion.div
      initial={{ transform: "translateY(-100%)" }}
      animate={{ transform: "translateY(0)" }}
      exit={{ transform: "translateY(-100%)" }}
      className="sm:px-[6rem] xl:px-[12rem] min-w-full h-[3em] bg-yellow-500 flex justify-between left-[0] fixed text-[1em] z-[30] navbar"
    >
      <NavLink to="./" className="h-full aspect-square">
        <img src={menyuazlogo} className="w-full h-full p-1" />
      </NavLink>
      <div className="hidden sm:flex items-cente">
        <div onClick={scrollToHome}
          className={`h-full flex items-center px-[1rem] hover:bg-yellow-400`}
        >
          <FontAwesomeIcon icon={faHouse} />
          <label className="font-bold p-1 hidden lg:inline">Ana Səhifə</label>
        </div>
        <div className="w-[1px] h-[50%] bg-black"></div>
        <div onClick={scrollToAboutUs} className={`h-full flex items-center px-[1rem] hover:bg-yellow-400 ${location === "/about" ? "bg-yellow-600" : ""}`}>
          <FontAwesomeIcon icon={faPeopleGroup} />
          <label className="font-bold p-1 hidden lg:inline">Haqqımızda</label>
        </div>
        <div className="w-[1px] h-[50%] bg-black"></div>
        <NavLink
          to="/restaurants"
          className={`h-full flex items-center px-[1rem] hover:bg-yellow-400 ${location == "/services" ? "bg-yellow-600" : ""
            }`}
        >
          <FontAwesomeIcon icon={faUtensils} />
          <label className="font-bold p-1 hidden lg:inline">Restoranlar</label>
        </NavLink>
        {/* <NavLink
          to="/partners"
          className={`h-full flex items-center px-[1rem] hover:bg-yellow-400 ${location == "/partners" ? "bg-yellow-600" : ""
            }`}
        >
          <FontAwesomeIcon icon={faHandshake} />
          <label className="font-bold p-1 hidden lg:inline">Partnyorlar</label>
        </NavLink> */}
        <div className="w-[1px] h-[50%] bg-black"></div>
        <div onClick={scrollToContactUs}
          className={`h-full flex items-center px-[1rem] hover:bg-yellow-400 ${location == "/contact" ? "bg-yellow-600" : ""
            }`}
        >
          <FontAwesomeIcon icon={faAddressBook} />
          <label className="font-bold p-1 hidden lg:inline">Əlaqə</label>
        </div>
      </div>
      <div
        className="flex sm:hidden items-center px-[1rem] hover:bg-yellow-400 z-[40]"
        onClick={handleMenuClick}
      >
        <div className="relative flex flex-col justify-center items-center gap-[4px] bars inline w-[1.5em]">
          <div
            className={`line w-full h-[4px] rounded bg-black transition duration-[200ms] ${isMenu ? "rotate-[45deg] absolute" : ""
              }`}
          ></div>
          <div
            className={`line w-full h-[4px] rounded bg-black  duration-[200ms] ${isMenu ? "hidden absolute" : ""
              }`}
          ></div>
          <div
            className={`line w-full h-[4px] rounded bg-black transition duration-[200ms] ${isMenu ? "rotate-[-45deg] absolute" : ""
              }`}
          ></div>
        </div>
        <div
          className={`absolute w-[50%] ${!isMenu ? "active-div" : "non-active-div"
            } flex flex-col text-center justify-center text-[0.6em] bg-[gray] top-[5em] right-[0] rounded-bl-[1em] overflow-hidden `}
        >
          <div onClick={scrollToHome}
            style={{ "--i": 5 }}
            className={`w-full navlink menuclick active:bg-yellow-500 p-4 ${location == "/" ? "bg-yellow-600" : ""
              } `}
          >
            <FontAwesomeIcon icon={faHouse} />
            <label className="font-bold p-2">Ana Səhifə</label>
          </div>
          <div onClick={scrollToAboutUs}
            style={{ "--i": 4 }}
            className={`w-full  navlink menuclick active:bg-yellow-500 p-4 ${location == "/about" ? "bg-yellow-600" : ""
              }`}
          >
            <FontAwesomeIcon icon={faPeopleGroup} />
            <label className="font-bold p-2">Haqqımızda</label>
          </div>
          <NavLink
            to="/restaurants"
            style={{ "--i": 3 }}
            className={`w-full  navlink menuclick active:bg-yellow-500 p-4 ${location == "/services" ? "bg-yellow-600" : ""
              }`}
          >
            <FontAwesomeIcon icon={faUtensils} />
            <label className="font-bold p-2">Restoranlar</label>
          </NavLink>
          {/* <NavLink
            style={{ "--i": 2 }}
            to="/partners"
            className={`w-full navlink menuclick active:bg-yellow-500 p-4 ${location == "/partners" ? "bg-yellow-600" : ""
              }`}
          >
            <FontAwesomeIcon icon={faHandshake} />
            <label className="font-bold p-2">Partnyorlar</label>
          </NavLink> */}
          <div onClick={scrollToContactUs}
            style={{ "--i": 1 }}
            className={`w-full navlink menuclick active:bg-yellow-500 p-4 ${location == "/contact" ? "bg-yellow-600" : ""
              }`}
          >
            <FontAwesomeIcon icon={faAddressBook} />
            <label className="font-bold p-2">Əlaqə</label>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
