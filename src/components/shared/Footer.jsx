"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


import { FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const contacts = useRef(null);

  useGSAP(
    () => {
      gsap.to(".rightArrow", {
        width: "100%",
        duration: 2,
        scrollTrigger: {
          trigger: ".rightArrow",
          scroller: "body",
          scrub: false,
          start: "bottom bottom",
        },
      });
    },
    { scope: contacts.current }
  );

  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="foo-heading">
            <div className="row">
              <div className="col-md-7">
                <h2>We would love to hear from you!</h2>
              </div>
              <div className=" col-md-5">
                <button className="button get-in-toch-button">
                  Get in touch
                  <span>
                    <img src="./images/arrow-footer-button.png" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="contacts" ref={contacts}>
            <div className="row">
              <div className="col-md-6">
                <p>Email</p>
                <Link href={"mailto:mojo@cloudmojo.tech"}>
                  <span className="emailId">mojo@cloudmojo.tech</span>
                </Link>
              </div>
              <div className="col-md-6 fotter-text-right">
                <p>Call</p>
                <Link href={"tel:+91 91679 97777"}>
                  <span className="mobileNo">+91 91679 97777</span>
                </Link>
              </div>
            </div>

            <span className="top-sap-line rightArrow"></span>
            <span className="bottom-sap-line rightArrow"></span>
          </div>
        </div>

        <div className=" footer-bg">
          <div className="container footer-text">
            <div className="footer-text-inner">
              <h1>Don't miss a byte!</h1>
              <p>
                Subscribe to our newsletter and receive regular updates on the
                newest tech trends, product launches, and industry
                breakthroughs.
              </p>
              <div className="search-box">
                <input
                  className="inputStyle"
                  type="text"
                  placeholder="Email Address"
                ></input>
                <span className="searchIcon">
                  <img src="./images/search-ion.png" />
                </span>
              </div>
            </div>
          </div>

          <div className="bottom-footer ">
            <div className="row">
              <div className="top-to-bottom">
                <Link href="#top">
                  <span className="top-image">
                    <img src="./images/top-to-bottom.png" />
                  </span>
                  <span className="top-text">Top</span>
                </Link>
              </div>
            </div>

            <div className="p-0">
              <div className="row footer-social-iocn">
                <div className="col-md-6">
                  <img src="./images/CMT-Logo.png" />
                </div>
                <div className="col-md-6 social-icon">
                  <ul>
                    <li>
                      <Link href="#">
                        <span className="whats-app">
                          <FaWhatsapp />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="twitter">
                          <BsTwitterX />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="linkedin">
                          <FaLinkedinIn />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="facebook">
                          <FaFacebookF />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="instagram">
                          <FaInstagram />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="youtube">
                          <FaYoutube />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="line-top">
                  <img src="./images/line-top.png" height="2" />
                </div>
              </div>

              <div className="copy-right-text">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 p-0">
                      <ul>
                        <li>
                          <Link href="#">
                            Home <span className="copyrightIcon"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            What’s new<span className="copyrightIcon"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            Terms & Conditions
                            <span className="copyrightIcon"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            Privacy Policy
                            <span className="copyrightIcon"></span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            Leave a Review
                            <span className="copyrightIcon"></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-5 copy-right">
                      <p>
                        &copy; 2024 CloudMojo Tech Pvt. Ltd. All rights
                        reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
