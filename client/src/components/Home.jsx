import React, { useRef, useEffect } from "react";
import "../css/Home.css";
import { motion } from "framer-motion";
import { services } from "../constans";
import { useState } from "react";
import { parallax, door, sushi, placeholder, contact } from "../assets";
import { ParallaxZoom, My3DLandingPage, Footer, DownloadApp } from '../components'
import VerticalList from "./VerticalList";
import { NavLink, useLocation } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { LuMailOpen, LuPhoneCall } from "react-icons/lu";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa'; // Importing the arrow up icon






export default function Home() {
  const [menuChoice, setMenuChoice] = useState("");
  const ref = useRef(null);


  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, [contactRef]);



  const handleChoice = (e) => {
    if (e.target.innerHTML === menuChoice) setMenuChoice("");
    else setMenuChoice(e.target.innerHTML);
  };

  const pageVariants = {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: "0%", transition: { duration: 0.3 } },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);


  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY >80) { 
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
  
    window.addEventListener("scroll", toggleVisibility);
  
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  


  return (
    <div>

      <div className="Home" id='home'>
        <div className="HomeContainer">
          <div className="HomeContainerLeft">
            <span>Menyu.az</span>
            <span>Hər Dadın Öz Hekayəsi Var</span>
            <span>Şəhərdəki Ən Yaxşı Restoranları Keşf Edin,Menyular Üzərindən Seçiminizi Edin, Sifarişlərinizi Rahatlıqla Verin və Arzuladığınız Masa Üçün Rezervasiya Edin.</span>
            <div><NavLink to="./restaurants" className="button-29">Indi sifariş et</NavLink></div>
          </div>
          <div className="HomeContainerRight">
            <img src="https://woltfood.evgenrec.com/assets/img/home-img.png" alt="description" />
          </div>
        </div>
      </div>
      <div className="Home_Second_Part" id='about'>
        <section id="about-us">
          <div class="about-us-container" ref={ref}>
            <h2>Haqqımızda</h2>
            <p>
              Menyu Kafe və Restoranlar üçün ən vacib elementlərdən biridir. Buna görə də menyular gözəl, göz oxşayan, hətta iştah açan dizaynı və çapı ilə seçilməlidir. Bunu isə bizə rahatlıqla etibar edə bilərsiniz. Biz hər kəsin bacardığını deyil, bacarmadığını edirik.
            </p>
            <p>
              Bu səbəbdən ölkənin seçilən restoran və kafeləri də bizi seçir. Siz də başqalarından seçilmək istəyirsinizsə, mütləq bizə müraciət edin. Peşakar işçi qüvvəsi ilə hər zaman işimizlə zövqünüzü oxşayacağıq.
            </p>
          </div>
        </section>
      </div>

      <div className="contact-section" ref={contactRef} id="contact">
        <h2>Bizimlə Əlaqə</h2>
        <iframe className={isVisible ? 'in-view' : ''} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.7837155699945!2d49.80735047656318!3d40.36931985852261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d3dfac9afeb%3A0x2abc3050cf74860c!2sMenyu.az!5e0!3m2!1saz!2saz!4v1708686481277!5m2!1saz!2saz" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className={`contact-info ${isVisible ? 'in-view' : ''}`}>
          <h3 className="info_h">Məlumatlarımız</h3>
          <p><span><SlLocationPin />Ünvan:</span>  Azərbaycan Nəşriyyatı, 1-ci mərtəbə</p>
          <p><span><LuMailOpen />E-poçt:</span>  menyu.az@gmail.com</p>
          <p><span><LuPhoneCall />Telefon:</span>  055 801 03 04 ,  050 801 03 04</p>
          <p><span><FaInstagram />Instagran:</span> <a href="https://www.instagram.com/menyu.az" target="_blank">@menyu.az</a></p>


        </div>
        <div className={`contact-form ${isVisible ? 'in-view' : ''}`}>
          <h3 className="Contact_h">Bizimlə Əlaqəyə keçin</h3>
          <form>
            <input type="text" placeholder="Adınız" required />
            <input type="text" placeholder="Soyadınız" required />
            <input type="email" placeholder="E-poçt ünvanınızı daxil edin" required />
            <input type="text" placeholder="Mesajınızı daxil edin..."></input>
            <button type="submit">Göndər</button>
          </form>
        </div>
      </div>
      <DownloadApp />
      <Footer />
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            cursor: "pointer",
            zIndex: 5000, 
            animation: "slideIn 0.5s ease-out forwards",
          }}
          className="scroll-to-top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
