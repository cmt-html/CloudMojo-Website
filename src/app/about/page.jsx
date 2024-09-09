"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = cardsRef.current;
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${cards.length * 400}`, // Adjust this value based on the animation length
      pin: true, // This pins the container
      scrub: 2, // Sync animations with the scroll
    });

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 0,
        },
        {
          y: -(index * card.offsetHeight * 0.7), // Move cards up by 70% of their height
          ease: "none",
          boxShadow: "rgba(28, 28, 28, 0.2) 0px -2px 8px 0px",
          filter: "blur(0.8px);",
          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "top 200px",
            scrub: 2,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section className="about-bg-color logo-white">
        <div className="bg-wrapper" id="top">
          <img
            src="./images/main-banner.png"
            width="100%"
            className="bannerImg"
          />

          <div className="bannerText">
            <h1> CloudMojo, where innovation meets digital transformation. </h1>
          </div>
        </div>
      </section>

      <section className="about-bg-color">
        <div className="about ">
          <div className="aboutText">
            <div className="container">
              <h2>
                We are a dynamic team of visionaries, dedicated to reshaping the
                future of businesses through cutting-edge AI-powered SaaS
                products.
              </h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-7"></div>
                <div className="col-md-5">
                  <div className="line-border"></div>
                  <p>
                    Our journey began with a simple yet<br></br> powerful
                    belief: that technology should<br></br> adapt to your needs,
                    empowering you
                    <br></br> to navigate the complexities of the<br></br>{" "}
                    digital era seamlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-cloud">
            <img src="/images/clouds/about-cloud-1.svg" alt="clouds" />
            <img src="/images/clouds/about-cloud-2.svg" alt="clouds" />
          </div>
        </div>
      </section>

      <section className="about-bg-color">
        <div className="container ourVistion ">
          <h1>Our Vision</h1>
          <div className="row ">
            <div className="display-our-mission">
              <div className="our-visition-one">
                <span className="circle"></span>To be the leading force in
                <br></br> revolutionizing industries<br></br> through
                groundbreaking<br></br> technological advancements.
              </div>
              <div className="our-visition-two">
                <span className="circle"></span>Become the beacon of trust{" "}
                <br></br> for businesses seeking a<br></br> quantum leap in
                digital<br></br> transformation.
              </div>
              <div className="our-visition-three">
                <span className="circle"></span>Instil a culture of perpetual
                <br></br> innovation, driving sustained<br></br> growth and
                adaptability.
              </div>
            </div>
            <div className="circle-img">
              <img src="./images/circle-img.png" className="bannerImg" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-bg-color">
        <div className="container ourMission ">
          <h1>Our Mission</h1>
          <div className="row ">
            <div className="display-our">
              <div>
                <img src="./images/target-board.png" className="bannerImg" />
              </div>
              <ul className="ourMissionList">
                <li>
                  Drive efficiency and productivity <br></br>through
                  state-of-the-art IT solutions.
                </li>
                <li className="listRight">
                  Harness the power of innovation to <br></br>create
                  user-centric SaaS products.
                </li>
                <li className="listRight color-gray">
                  Stay at the forefront of technological<br></br> advancements
                  to consistently exceed<br></br> client expectations.
                </li>
                <li className="color-gray">
                  Foster long-term partnerships by <br></br>delivering
                  exceptional customer value.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-bg-color card-container" ref={containerRef}>
        <div
          className="cardBlue cardb"
          ref={(el) => (cardsRef.current[0] = el)}
        >
          <div className="container">
            <h2 className="mainCardHeading">Our Values</h2>
          </div>
        </div>
        <div
          className="cardBlue-1 cardb"
          ref={(el) => (cardsRef.current[1] = el)}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-5 d-flex">
                <h2 className="cardHeading mainCardHeading cardno">01</h2>
                <h2 className="cardHeadingh2">Innovation</h2>
              </div>
              <div className="col-md-6">
                <p className="cardPara">
                  We thrive on extending the boundaries of what's possible. Our
                  team of experts combines a passion for innovation with a deep
                  understanding of industry challenges, delivering solutions
                  that fit your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cardBlue-2 cardb"
          ref={(el) => (cardsRef.current[2] = el)}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-5 d-flex">
                <h2 className="cardHeading mainCardHeading cardno">02</h2>
                <h2 className="cardHeadingh2">AI Expertise</h2>
              </div>
              <div className="col-md-6">
                <p className="cardPara">
                  Harnessing the power of artificial intelligence, we bring you
                  SaaS products that not only solve today's problems but also
                  anticipate and adapt to the challenges of tomorrow. Our
                  AI-driven approach ensures that your business stays ahead in
                  the ever-evolving digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cardBlue-3 cardb"
          ref={(el) => (cardsRef.current[3] = el)}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-5 d-flex">
                <h2 className="cardHeading mainCardHeading cardno">03</h2>
                <h2 className="cardHeadingh2">Customer-Centric Focus</h2>
              </div>
              <div className="col-md-6">
                <p className="cardPara">
                  Your success is our success. We are committed to understanding
                  your unique requirements and tailoring our solutions to fit
                  seamlessly into your workflow. Our customer-centric approach
                  ensures that you receive not just a product, but a partnership
                  geared towards your growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-diffrence">
        <div className="container">
          <div className="row">
            <h2 className="headH1">The CloudMojo Difference</h2>
            <div className="about-main">
              <div className="about-col-1">
                <h2>Digital Transformation Pioneers</h2>
                <p>
                  We don't just follow trends; we set them. By choosing
                  CloudMojo, you are choosing a partner dedicated to driving
                  digital transformation and helping your business stay ahead in
                  a fast-paced world.
                </p>
              </div>
              <div className="about-col-2">
                <h2>Proven Track Record</h2>
                <p>
                  Our SaaS products have been instrumental in transforming
                  businesses across diverse industries. From streamlining
                  operations to enhancing customer experiences, our solutions
                  have a proven track record of delivering tangible results.
                </p>
              </div>
              <div className="about-col-3">
                <h2>Collaborative Culture</h2>
                <p>
                  We believe that the best ideas come from collaboration. Our
                  diverse team of experts works in tandem with your team,
                  ensuring a collaborative approach that brings out the best
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="about-focus">
          <img
            className="about-diffrenc-img"
            src="./images/our_focus_area.png"
          />
          <div className="container">
            <div className="row">
              <h1>Our Focus Areas</h1>
              <div className="about-main">
                <div className="about-col-1">
                  <h2>Marketing Tech</h2>
                  <p>
                    Revolutionize your marketing strategies with our Marketing
                    Tech solutions. From data-driven insights to personalized
                    customer experiences, our products are designed to elevate
                    your marketing efforts and drive measurable results. Stay
                    ahead of the curve in the ever-evolving landscape of digital
                    marketing.
                  </p>
                </div>
                <div className="about-col-2">
                  <h2>Hyper Automation</h2>
                  <p>
                    Navigate the era of automation seamlessly with our Hyper
                    Automation solutions. We empower businesses to automate
                    repetitive tasks, optimize workflows, and unlock new levels
                    of efficiency. Our goal is to provide you with the tools to
                    boost your business productivity.
                  </p>
                </div>
                <div className="about-col-3">
                  <h2>Fintech</h2>
                  <p>
                    Embrace the future of finance with our innovative Fintech
                    solutions. We understand the nuances of the financial
                    industry and have developed cutting-edge products that
                    streamline processes, enhance security, and drive
                    unprecedented growth for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="areas-of-expertise">
        <div className="bg-color-white">
          <div className="container  ">
            <div className="aboutText ">
              <h1>Areas of Expertise</h1>
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                  <div className="line-border"></div>
                  <p>
                    At CloudMojo, we are more than just a technology company; we
                    are solution providers at our core. We thrive on embracing
                    challenges and turning them into opportunities for
                    innovation. Our approach is simple yet powerful - we tackle
                    complex requirements with the aim of productizing solutions
                    that not only propel businesses forward but also contribute
                    to making a positive impact on the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
