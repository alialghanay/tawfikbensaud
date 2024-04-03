"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";
import { useTranslation } from "react-i18next";
import Button from "../t-button";

interface Person {
  name: string;
  specialty: string;
  position: string;
  facebook: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  url: string;
  customPage: boolean;
  cPUrl: string;
}

const TeamCarousel = () => {
  const [teamData, setTeamData] = useState<Person[]>([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.API_URL}/teams?locale=${
            i18n.language == "en-US" ? "en" : "ar"
          }&populate=*`
        );
        const data = await response.json();
        const teamData: Person[] = data.data.map((item: any) => ({
          name: item.attributes.name,
          specialty: item.attributes.specialty,
          position: item.attributes.position,
          facebook: item.attributes.facebook,
          linkedin: item.attributes.linkedin,
          twitter: item.attributes.twitter,
          instagram: item.attributes.instagram,
          customPage: item.attributes.custom_page,
          cPUrl: item.attributes.custom_page_url,
          url: process.env.API + item.attributes.pofilepic.data.attributes.url,
        }));
        setTeamData(teamData);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchData();
  }, [i18n.language]);
  return (
    <Carousel className="w-1/2 mt-16 p-0 lg:hidden">
      <CarouselContent className="m-0 h-full font-cairo">
        {teamData.map((person, index) => {
          return (
            <CarouselItem
              key={index}
              className="flex flex-col justify-center items-center p-0 pt-1"
            >
              <div className="w-fit h-fit bg-primary rounded-t-full shadow-cos shadow-black mb-2 px-1 pt-1">
                <div className="relative w-[100px] h-[150px] xs:w-[125px] xs:h-[175px] sm:w-[150px] sm:h-[200px] md:w-[200px] md:h-[250px]">
                  <Image src={person.url} alt={person.name} fill />
                </div>
              </div>
              <p className="text-center text-base sm:text-lg md:text-xl font-bold font-cairo">
                {person.name}
              </p>
              <p className="text-center text-sm sm:text-base md:text-lg font-bold text-zinc-500 font-cairo">
                {person.specialty}
              </p>
              <p className="text-center text-sm sm:text-base md:text-lg font-bold text-zinc-500 font-cairo">
                {person.position}
              </p>
              <div className="flex justify-center">
                {person.facebook.length > 0 ? (
                  <Link href={person.facebook}>
                    <CiFacebook size={16} className="sm:size-6 md:size-8" />
                  </Link>
                ) : null}
                {person.linkedin.length > 0 ? (
                  <Link href={person.linkedin}>
                    <CiLinkedin size={16} className="sm:size-6 md:size-8" />
                  </Link>
                ) : null}
                {person.twitter.length > 0 ? (
                  <Link href={person.twitter}>
                    <CiTwitter size={16} className="sm:size-6 md:size-8" />
                  </Link>
                ) : null}
                {person.instagram.length > 0 ? (
                  <Link href={person.instagram}>
                    <CiInstagram size={16} className="sm:size-6 md:size-8" />
                  </Link>
                ) : null}
              </div>
              {person.customPage ? (
                <Button
                  label={i18n.language == "en-US" ? "Explore" : "تصفح"}
                  onClick={() => window.open(person.cPUrl)}
                />
              ) : null}
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
