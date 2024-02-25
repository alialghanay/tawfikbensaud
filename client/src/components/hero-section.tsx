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
      <div className="absolute inset-0 opacity-10 z-0 w-full h-1/2">
        <Image src="/world.svg" alt="map of the world" fill />
      </div>
      <h1
        className="font-rowdies text-wrap w-[400px] text-7xl font-light text-primary-foreground self-start
        p-5 m-5 z-10"
      >
        Offering aid to the less fortunate
      </h1>
      <HStatistic />
      <HVideo />

      <div className="relative m-1">
        <div className="absolute inset-0 bg-gradient-to-t from-[#03847B] via-transparent border-2 border-border rounded-2xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
