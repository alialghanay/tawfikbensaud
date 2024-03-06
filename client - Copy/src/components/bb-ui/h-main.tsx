import Image from "next/image";

const HMain = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <p className="ml-5 md:p-5 md:m-5 z-10">
        <span className="text-white text-xl md:text-4xl m-0">2014 - 2024</span>
        <br />
        <span className="drop-shadow-cos text-white text-4xl md:text-9xl font-bold font-rowdies m-0">
          I AM
        </span>
        <br />
        <span className="drop-shadow-cos text-teal-400 text-4xl md:text-9xl font-bold font-rowdies m-0">
          TAWFIK
        </span>
      </p>
      <div className="relative w-[125px] h-[153px] md:w-[502px] md:h-[611px]">
        <Image src="/tawfikbensaud-white.svg" alt="iam tawfik logo" fill />
      </div>
      <div className="absolute -top-12 -right-6 w-[200px] h-[200px] md:-top-20 md:-right-32 md:w-[800px] md:h-[800px]">
        <Image
          src="/Rectangle.svg"
          alt="iam tawfik logo background"
          fill
          className="m-5"
        />
      </div>
    </div>
  );
};

export default HMain;
