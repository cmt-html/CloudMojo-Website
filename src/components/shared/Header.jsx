"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap"; // Import GSAP
import Link from "next/link";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const [activeMenu, setActive] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);
  const [whiteLogo, setWhiteLogo] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const [tl] = useState(() => gsap.timeline({ paused: true }));

  const menuItem = useRef(null);

  const handelarMenucolsed = () => {
    setActive(!activeMenu);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  useGSAP(() => {
    tl.to("header nav", {
      top: 0,
      right: 0,
      duration: "0.5",
    })
      .from(".menu-items > li", {
        x: "200",
        duration: "0.3",
        stagger: "0.2",
        opacity: "0",
      })
      .from(".social-icons ul li", {
        x: "300",
        duration: "0.3",
        stagger: "0.2",
        opacity: "0",
      });
  }, [tl]);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderScroll(window.scrollY > 20); // Change 100 to your preferred threshold
    };

    if (activeMenu) {
      tl.play().timeScale(1);
    } else {
      tl.timeScale(2.5).reverse();
    }

    if (activeMenu) {
      document.body.classList.add("overflow-hidden");
      // animateHeader();
    } else {
      document.body.classList.remove("overflow-hidden");
      // animateHeaderReverse();
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check scroll position on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("overflow-hidden");
    };
  }, [activeMenu]);

  return (
    <header
      className={`
        ${headerScroll ? "scroll" : ""} 
        ${whiteLogo ? "logo-white" : ""}
        ${activeMenu ? "activeMenu" : ""}
      `}
    >
      <div className="main-header">
        <div className="logo">
          <Link href={"/"}>
            <img id="logo" src="./images/cmt-logo-cloud.svg" alt="logo" />{" "}
          </Link>
        </div>
        <div className="right-icon" onClick={handelarMenucolsed}>
          <span> &nbsp;</span>
          <span> &nbsp;</span>
          <span> &nbsp;</span>
        </div>
      </div>

      <nav>
        <div className="close-icon">
          <img src="/images/close-icon.svg" alt="close-icon"  onClick={handelarMenucolsed} />
        </div>

        <div className="menu-wrapper">
          <ul className="menu-items" ref={menuItem}>
            <li
              onClick={toggleSubmenu}
              className={`${isSubmenuOpen ? "open" : ""}`}
            >
              <Link href="#">Solutions</Link>

              <ul className={`sub-menu`}>
                <li>
                  <Link href={"#"}>Finance</Link>
                </li>
                <li>
                  <Link href={"#"}>Digital</Link>
                </li>
                <li>
                  <Link href={"#"}>Communication</Link>
                </li>
                <li>
                  <Link href={"#"}>AI Automation</Link>
                </li>
                <li>
                  <Link href={"#"}>Digital Archiving</Link>
                </li>
                <li>
                  <Link href={"#"}>Retail</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"#"}>Services</Link>
            </li>
            <li>
              <Link href={"#"}>Resources</Link>
            </li>
            <li>
              <Link href={"#"}>About Us</Link>
            </li>
            <li>
              <Link href={"#"}>Contact</Link>
            </li>
          </ul>
          <div className="social-icons">
            <ul>
              <li>
                <Link href="#">
                  <img src="./images/Facebooknav.png" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <img src="./images/Instagramnav.png" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <img src="./images/Youtubenav.png" />
                </Link>
              </li>

              <li>
                <Link href="#">
                  <img src="./images/Whatsapnav.png" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <img src="./images/twitternav.png" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <img src="./images/Linkedinnav.png" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="backdropShadow" onClick={handelarMenucolsed}>
        &nbsp;
      </div>

      {/* <div className="">
        <div className="icon" onClick={handelarMenucolsed}>
          <img src="./images/menu-dots.png" />
        </div>
        <div className="header-top">
          <div className="row">
            <div className="col-md-6">
              <div className="logo  logo-white">
                <img src="./images/cmt-logo-cloud.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav>
        <div className="side-bar">
          <div className="cross-icon" onClick={handelarMenucolsed}>
            <img src="./images/cross-button.png" />
          </div>
          <div className="navbar">
            <ul className="menu-bar">
              <li>
                <a href="#">Solutions </a>

                <ul className="d-block">
                  <li>
                    <Link href="#">Finance</Link>
                  </li>
                  <li>
                    <Link href="#">Digital</Link>
                  </li>
                  <li>
                    <Link href="#">Communication</Link>
                  </li>
                  <li>
                    <Link href="#">AI Automation</Link>
                  </li>
                  <li>
                    <Link href="#">Digital Archiving</Link>
                  </li>
                  <li>
                    <Link href="#">Retail</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Services</a>
                <ul className="d-none">
                  <li>
                    <Link href="#">IT Infrastructure</Link>
                  </li>
                  <li>
                    <Link href="#">Management</Link>
                  </li>
                  <li>
                    <Link href="#">Digital</Link>
                  </li>
                  <li>
                    <Link href="#">Transformation</Link>
                  </li>
                  <li>
                    <Link href="#">Cyber Security</Link>
                  </li>
                  <li>
                    <Link href="#">Manage Cloud </Link>
                  </li>
                  <li>
                    <Link href="#">Services</Link>
                  </li>
                  <li>
                    <Link href="#">QR Code Solution</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>

            <div className="social-icon-nav">
              <ul>
                <li>
                  <Link href="#">
                    <img src="./images/Facebooknav.png" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img src="./images/Instagramnav.png" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img src="./images/Youtubenav.png" />
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#">
                    <img src="./images/Whatsapnav.png" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img src="./images/twitternav.png" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <img src="./images/Linkedinnav.png" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="backdropShadow">&nbsp;</div>
      </nav> */}
    </header>
  );
};

export default Header;
