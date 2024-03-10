import * as React from "react";

import Image from "next/image";
import person from "@/lib/json/persons.json";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";

const TeamCarousel = () => {
  return (
    <Carousel className="w-1/2 mt-16 p-0 lg:hidden">
      <CarouselContent className="m-0 h-full">
        {person.map((person, index) => {
          return (
            <CarouselItem
              key={index}
              className="flex flex-col justify-center items-center p-0 pt-1"
            >
              <div className="w-fit h-fit bg-primary rounded-t-full shadow-cos shadow-black mb-2 px-1 pt-1">
                <div className="relative w-[100px] h-[150px] xs:w-[125px] xs:h-[175px] sm:w-[150px] sm:h-[200px] md:w-[200px] md:h-[250px]">
                  <Image src={"/" + person.image} alt={person.name} fill />
                </div>
              </div>
              <p className="text-center text-base sm:text-lg md:text-xl font-bold font-cairo">
                {person.name}
              </p>
              <p className="text-center text-sm sm:text-base md:text-lg font-bold text-zinc-500 font-cairo">
                {person.bio}
              </p>
              <p className="text-center text-sm sm:text-base md:text-lg font-bold text-zinc-500 font-cairo">
                {person.postion}
              </p>
              <div className="flex justify-center">
                <Link href={person.facebook}>
                  <CiFacebook size={16} className="sm:size-6 md:size-8" />
                </Link>
                <Link href={person.linkedin}>
                  <CiLinkedin size={16} className="sm:size-6 md:size-8" />
                </Link>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="bg-primary border border-black" />
      <CarouselNext className="bg-primary border border-black" />
    </Carousel>
  );
};

export default TeamCarousel;
