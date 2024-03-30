import Image from "next/image";
import dynamic from "next/dynamic";

const HMain = dynamic(() => import("./ui/hero/main"), { ssr: false });
const HStatistic = dynamic(() => import("./ui/hero/statistic"), { ssr: false });
const HVideo = dynamic(() => import("./ui/hero/videos"), { ssr: false });
const HeroSection = () => {
  return (
    <section
      className="w-full relative bg-primary p-0 mt-8 mx-0 overflow-hidden"
      id="home"
    >
      <div className="relative flex flex-col items-center">
        <HMain />
        <HStatistic />
        <HVideo />
      </div>

      <div className="z-0 w-full absolute inset-0 h-3/4 bg-primary">
        <Image
          src="/bg.svg"
          alt="iam tawfik website background"
          fill
          priority
          className="object-cover opacity-15"
        />
        <div className="z-0 absolute inset-0 bg-gradient-to-t from-teal-700 to-transparent"></div>
      </div>

      <div className="relative m-1">
        <div className="absolute inset-0 bg-gradient-to-t from-[#03847B] via-transparent border-2 border-border rounded-2xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
