"use client";
import Image from "next/image";
import HMain from "./bb-ui/h-main";
import "./bb-ui/text-shadow.css";
import HStatistic from "./bb-ui/h-statistic";
import HVideo from "./bb-ui/h-videos";
const HeroSection = () => {
  return (
    <section
      className="w-full relative container bg-primary overflow-hidden -z-40 p-0 mt-8 mx-0"
      id="home"
    >
      <div className="w-full absolute inset-0 h-3/4">
        <Image
          src="/bg.svg"
          alt="iam tawfik website background"
          fill
          priority
          className="-z-30 object-cover opacity-15"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-teal-700 to-transparent"></div>
      </div>

      <div className="flex flex-col items-center">
        <HMain />
        <HStatistic />
        <HVideo />
      </div>

      <div className="relative m-1">
        <div className="absolute inset-0 bg-gradient-to-t from-[#03847B] via-transparent border-2 border-border rounded-2xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
