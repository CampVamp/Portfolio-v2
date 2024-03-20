"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import PaperPlane from "@/public/paper-plane.svg";
import Image from "next/image";

const Hero = () => {
  gsap.registerPlugin(MotionPathPlugin);
  const paperPlaneRef = useRef(null);
  const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
      { x: 100, y: 0, scale: 5 },
      { x: 200, y: 0, scale: 7 },
      { x: 600, y: 0, scale: 6 },
      { x: 3000, y: -100, scale: 3 },
      { x: 2000, y: -600, scale: 3 },
      { x: 900, y: 0, scale: 3 },
      { x: 1200, y: -10, scale: 2 },
      { x: 1350, y: -40, scale: 2 },
    ],
  };
  useGSAP(() => {
    const tween = gsap.to(paperPlaneRef.current, {
      duration: 4,
      motionPath: {
        path: flightPath.values,
        curviness: flightPath.curviness,
        autoRotate: flightPath.autoRotate,
      },
      ease: "power2.inOut",
    });
  });

  return (
    <div className="relative h-screen w-full flex items-center px-6 md:px-12 overflow-hidden">
      <div className="flex flex-col justify-center gap-4 md:gap-8">
        <div className="text-5xl md:text-9xl font-semibold text-neonGreen flex flex-col gap-4">
          <div>Hello</div>
          <div>My Name is</div>
          <div className="text-[#c4d4b4]">Ajay ram</div>
        </div>
        <div className="text-stone-500 text-3xl font-medium">
          Full Stack Developer
        </div>
      </div>
      <div className="absolute h-72 w-72 -left-80 hidden md:block">
        <Image
          src={PaperPlane}
          alt="Plane"
          fill
          ref={paperPlaneRef}
          className="text-neonGreen"
        />
      </div>
    </div>
  );
};

export default Hero;
