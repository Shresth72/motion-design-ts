"use client";

import { FC, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface SecondAnimeProps {}

const SecondAnime: FC<SecondAnimeProps> = ({}) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline();

      tl.from(".animation-circle-second", {
        scale: 0,
      })

      ScrollTrigger.create({
        animation: tl,
        trigger: ".second-anime",
        end: "center top",
        start: "top bottom-=100",
        // markers: true,
        scrub: 3,
      });
    });

    return () => ctx.revert();
  });

  return (
    <div className="second-anime">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="animation-circle-second"
      >
        <circle cx="50" cy="50" r="48.5" />
      </svg>
      <div className="animation-text-second">
        <h1>Prepare Libraries</h1>
        <p>Access a broad range of high performance library preparation kits</p>
      </div>
    </div>
  );
};

export default SecondAnime;