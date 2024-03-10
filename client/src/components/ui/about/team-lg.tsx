import Image from "next/image";
import person from "@/lib/json/persons.json";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
const TeamLargeSecreens = () => {
  return (
    <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-x-36 gap-y-16">
      {person.map((person, index) => {
        {
          if ((index + 1) % 3 == 0)
            return (
              <div
                key={index}
                className="col-span-2 row-span-2 flex justify-center items-center"
              >
                <div className="w-fit">
                  <div className="bg-primary rounded-t-full pt-2 px-4 shadow-cos shadow-black m-4 w-auto h-auto">
                    <Image
                      src={"/" + person.image}
                      alt={person.name}
                      width={200}
                      height={200}
                    />
                  </div>
                  <p className="text-center text-2xl font-bold">
                    {person.name}
                  </p>
                  <p className="text-center font-bold text-zinc-500">
                    {person.bio}
                  </p>
                  <p className="text-center font-bold text-zinc-500">
                    {person.postion}
                  </p>
                  <div className="flex justify-center">
                    <Link href={person.facebook}>
                      <CiFacebook size={32} />
                    </Link>
                    <Link href={person.linkedin}>
                      <CiLinkedin size={32} />
                    </Link>
                  </div>
                </div>
              </div>
            );
        }
        return (
          <div key={index}>
            <div className="bg-primary rounded-t-full pt-2 px-4 shadow-cos shadow-black m-4 w-auto h-auto">
              <Image
                src={"/" + person.image}
                alt={person.name}
                width={200}
                height={200}
              />
            </div>
            <p className="text-center text-2xl font-bold">{person.name}</p>
            <p className="text-center font-bold text-zinc-500">{person.bio}</p>
            <p className="text-center font-bold text-zinc-500">
              {person.postion}
            </p>
            <div className="flex justify-center">
              <Link href={person.facebook}>
                <CiFacebook size={32} />
              </Link>
              <Link href={person.linkedin}>
                <CiLinkedin size={32} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamLargeSecreens;
