"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const cloudRefs = useRef([]);
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const clouds = cloudRefs.current;
    const logo = logoRef.current;
    const container = containerRef.current;

    // Pin the container (clouds + logo) until all animations are completed
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=3000", // Adjust based on the scroll length needed for manual movements
      pin: true, // Pin the container
      scrub: true, // Scrub allows the animations to move with scroll progress
    });

    // Animate each cloud to move in different directions on scroll
    clouds.forEach((cloud, index) => {
      const movementConfig = [
        { x: 300, y: -100 }, // Cloud 1: Move right and up
        { x: -200, y: 100 }, // Cloud 2: Move left and down
        { x: 100, y: 200 }, // Cloud 3: Move right and down
        { x: -150, y: -150 }, // Cloud 4: Move left and up
        // Add more directions for additional clouds
      ];

      // Use different directions for each cloud
      const { x, y } = movementConfig[index % movementConfig.length];

      gsap.to(cloud, {
        x, // Move cloud horizontally
        y, // Move cloud vertically
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: true, // Move clouds with scroll
        },
      });
    });

    // Manually move the logo on scroll
    gsap.to(logo, {
      top:  "30%", //-window.innerHeight / 2, // Move logo up as you scroll (adjust as needed)
      scale: 1, // Scale the logo down as it moves
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        // end: "+=800", // Adjust based on scroll length for logo movement
        scrub: true, // Logo moves with scroll
      },
    });

    gsap.to(logo, {
      top:  "5%", //-window.innerHeight / 2, // Move logo up as you scroll (adjust as needed)
      left: "5%",
      maxWidth: "250",
      scale: 1, // Scale the logo down as it moves
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        //end: "+=800", // Adjust based on scroll length for logo movement
        scrub: true, // Logo moves with scroll
      },
    });

    // Reveal the header after the logo reaches its position


    // ScrollTrigger.create({
    //   trigger: container,
    //   start: "bottom top",
    //   onEnter: () => {
    //     gsap.to(header, { opacity: 1, duration: 1 }); // Show header when the logo is at the top
    //   },
    // });

    // Initially hide the header
    // gsap.set(header, { opacity: 0 });
  }, []);

  return (
    <>
      <section className="home-landing">
        <div className="cloudContainer" ref={containerRef}>
          <div className="logo-container" ref={logoRef}>
            <img
              src="/images/home-clouds/clou-dmojo-logo.svg"
              alt="clou-dmojo-logo.svg"
            />
          </div>
          <img
            src="/images/home-clouds/cloud-1.png"
            alt="cloud-1.png"
            className="cloud-1 cloud"
            ref={(el) => (cloudRefs.current[0] = el)}
          />
          <img
            src="/images/home-clouds/cloud-2.png"
            alt="cloud-2.png"
            className="cloud-2 cloud"
            ref={(el) => (cloudRefs.current[1] = el)}
          />
          <img
            src="/images/home-clouds/cloud-3.png"
            alt="cloud-3.png"
            className="cloud-3 cloud"
            ref={(el) => (cloudRefs.current[2] = el)}
          />
          <img
            src="/images/home-clouds/cloud-4.png"
            alt="cloud-4.png"
            className="cloud-4 cloud"
            ref={(el) => (cloudRefs.current[3] = el)}
          />
          <img
            src="/images/home-clouds/cloud-5.png"
            alt="cloud-5.png"
            className="cloud-5 cloud"
            ref={(el) => (cloudRefs.current[4] = el)}
          />
          <img
            src="/images/home-clouds/cloud-6.png"
            alt="cloud-6.png"
            className="cloud-6 cloud"
            ref={(el) => (cloudRefs.current[5] = el)}
          />
          <img
            src="/images/home-clouds/cloud-7.png"
            alt="cloud-7.png"
            className="cloud-7 cloud"
            ref={(el) => (cloudRefs.current[6] = el)}
          />
          <img
            src="/images/home-clouds/cloud-8.png"
            alt="cloud-8.png"
            className="cloud-8 cloud"
            ref={(el) => (cloudRefs.current[7] = el)}
          />
          <img
            src="/images/home-clouds/cloud-9.png"
            alt="cloud-9.png"
            className="cloud-9 cloud"
            ref={(el) => (cloudRefs.current[8] = el)}
          />
          <img
            src="/images/home-clouds/cloud-10.png"
            alt="cloud-10.png"
            className="cloud-10 cloud"
            ref={(el) => (cloudRefs.current[9] = el)}
          />
          <img
            src="/images/home-clouds/cloud-11.png"
            alt="cloud-11.png"
            className="cloud-11 cloud"
            ref={(el) => (cloudRefs.current[10] = el)}
          />
          <img
            src="/images/home-clouds/cloud-12.png"
            alt="cloud-12.png"
            className="cloud-12 cloud"
            ref={(el) => (cloudRefs.current[11] = el)}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
