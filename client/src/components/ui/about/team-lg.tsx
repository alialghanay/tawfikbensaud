"use client";
import Image from "next/image";
import Link from "next/link";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { useEffect, useState } from "react";
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
const TeamLargeSecreens = () => {
  const [teamData, setTeamData] = useState<Person[]>([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.API_URL}/teams?locale=${
            i18n.language.startsWith("en") ? "en" : "ar"
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
          url: item.attributes.pofilepic.data.attributes.url,
        }));

        setTeamData(teamData);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchData();
  }, [i18n.language]);
  return (
    <div className="font-cairo hidden lg:grid grid-cols-2 grid-rows-2 gap-x-72 gap-y-16">
      {teamData.map((person, index) => {
        {
          if ((index + 1) % 3 == 0) {
            return (
              <div
                key={index}
                className="relative col-span-2 row-span-2 flex justify-center items-center"
              >
                <div className="absolute w-[480px] h-[480px] bottom-6 -right-[480px] -rotate-45 -z-10 opacity-50">
                  <Image
                    src="/fingerprint.svg"
                    alt="iam tawfik website background"
                    fill
                  />
                </div>
                <div className="w-fit">
                  <div className="bg-primary rounded-t-full pt-2 px-4 shadow-cos shadow-black m-4 w-auto h-auto">
                    <Image
                      src={person.url}
                      alt={person.name}
                      width={200}
                      height={200}
                    />
                  </div>
                  <p className="text-center text-2xl font-bold">
                    {person.name}
                  </p>
                  <p className="text-center font-bold text-zinc-500">
                    {person.specialty}
                  </p>
                  <p className="text-center font-bold text-zinc-500">
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
                        <CiInstagram
                          size={16}
                          className="sm:size-6 md:size-8"
                        />
                      </Link>
                    ) : null}
                  </div>
                  <div className="flex justify-center">
                    {person.customPage ? (
                      <Button
                        label={
                          i18n.language.startsWith("en") ? "Explore" : "تصفح"
                        }
                        onClick={() => window.open(person.cPUrl)}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            );
          }
        }

        return (
          <div key={index} className="relative text-center">
            <div
              className={
                index % 2 == 0
                  ? "absolute w-96 h-96 bottom-0 left-0 rotate-45 -z-10 opacity-50"
                  : "absolute w-96 h-96 top-0 left-0 -rotate-45 -z-10 opacity-50"
              }
            >
              <Image
                src="/fingerprint.svg"
                alt="iam tawfik website background"
                fill
              />
            </div>
            <div className="bg-primary rounded-t-full pt-2 px-4 shadow-cos shadow-black m-4 w-auto h-auto">
              <Image
                src={person.url}
                alt={person.name}
                width={200}
                height={200}
              />
            </div>
            <p className="text-center text-2xl font-bold">{person.name}</p>
            <p className="text-center font-bold text-zinc-500">
              {person.specialty}
            </p>
            <p className="text-center font-bold text-zinc-500">
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
            <div className="flex justify-center">
              {person.customPage ? (
                <Button
                  label={i18n.language.startsWith("en") ? "Explore" : "تصفح"}
                  onClick={() => window.open(person.cPUrl)}
                />
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamLargeSecreens;
