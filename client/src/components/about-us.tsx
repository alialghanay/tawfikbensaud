"use client";
import Image from "next/image";
import Button from "./bb-ui/button";
import person from "@/lib/json/persons.json";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const AboutUs = () => {
  return (
    <section className="flex flex-col justify-start items-center" id="about-us">
      <h1 className="text-primary text-4xl font-bold m-2 p-1">About Us</h1>
      <p className="text-zinc-500 text-2xl text-center font-extralight m-2 p-1 w-8/12">
        The secret to happiness lies in helping others. Never underestimate the
        difference YOU can make in the lives of the poor, the abused and the
        helpless. The secret to happiness lies in helping others. Never
        underestimate the difference YOU can make in the lives of the poor, the
        abused and the helpless.
      </p>
      <Button label="Expoler" onClick={() => console.log("clicked")} />

      <div className="grid grid-flow-row gap-4">
        {person.map((person, index) => {
          return (
            <div key={index}>
              <div className="bg-primary rounded-t-full pt-2 px-4 shadow-cos shadow-black m-4">
                <Image
                  src={"/" + person.image}
                  alt={person.name}
                  width={200}
                  height={200}
                />
              </div>
              <p className="text-center text-2xl font-bold">{person.name}</p>
              <p className="text-center font-bold text-zinc-500">
                {person.bio}
              </p>
              <p className="text-center font-bold text-zinc-500">
                {person.postion}
              </p>
              <div className="flex justify-center">
                <Link href={person.facebook}>
                  <CiFacebook size={48} />
                </Link>
                <Link href={person.linkedin}>
                  <CiLinkedin size={48} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutUs;
