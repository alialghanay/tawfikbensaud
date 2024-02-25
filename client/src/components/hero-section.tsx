"use client";
import Image from "next/image";
import HStatistic from "./bb-ui/h-statistic";
import HVideo from "./bb-ui/h-videos";

const HeroSection = () => {
  return (
    <section
      className="relative container flex flex-col items-center bg-primary mt-8 mx-0"
      id="home"
    >
      <div className="absolute inset-0 opacity-10 z-0 w-full h-3/5">
        <Image
          src="/bg.svg"
          alt="iam tawfik website background "
          fill
          className="w-full h-full"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-teal-700 to-transparent"></div>
      </div>

      <p className="self-start p-5 m-5 z-10">
        <span className="text-white text-3xl m-0">2014 - 2024</span>
        <br />
        <span className="text-white text-6xl font-bold font-rowdies m-0">
          I AM
        </span>
        <br />
        <span className="text-teal-400 text-6xl font-bold font-rowdies m-0">
          <br />
          TAWFIK
        </span>
      </p>
      <HStatistic />
      <HVideo />

      <div className="relative m-1">
        <div className="absolute inset-0 bg-gradient-to-t from-[#03847B] via-transparent border-2 border-border rounded-2xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
