"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const HMain = () => {
  const [currentImage, setCurrentImage] = useState("/tawfikbensaud-white.svg");
  return (
    <div className="z-10 w-full flex items-center justify-between overflow-hidden">
      <p className="ml-5 xl:p-5 xl:m-5">
        <span className="text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl xl:text-6xl m-0">
          2014 - 2024
        </span>
        <br />
        <span className="drop-shadow-cos text-white text-2xl xs:text-4xl sm:text-6xl lg:text-8xl font-bold font-rowdies m-0">
          I AM
        </span>
        <br />
        <span className="drop-shadow-cos text-teal-400 text-2xl xs:text-4xl sm:text-6xl lg:text-8xl font-bold font-rowdies m-0">
          TAWFIK
        </span>
      </p>
      <motion.div
        className="relative w-[100px] h-[150px] xs:w-[125px] xs:h-[200px] sm:w-[150px] sm:h-[250px] md:w-[250px] md:h-[350px] lg:w-[350px] lg:h-[450px] 2xl:w-[502px] 2xl:h-[611px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileHover={{
          scale: 1.1,
          opacity: 1, // Change from 0 to 1 on hover
          rotate: 30,
          transition: { duration: 1 },
        }}
        onHoverStart={() => setCurrentImage("/tawfikbensaud.svg")}
        onHoverEnd={() => setCurrentImage("/tawfikbensaud-white.svg")}
        whileTap={{
          scale: 1.1,
          opacity: 1,
          rotate: 30,
          transition: { duration: 0.5 },
        }}
        onTap={() => setCurrentImage("/tawfikbensaud.svg")}
        onPanEnd={() => setCurrentImage("/tawfikbensaud-white.svg")}
      >
        <Image src={currentImage} alt="iam tawfik logo" fill />
      </motion.div>
      <div className="-z-10 absolute -top-8 -right-10 w-[200px] h-[200px] xs:w-[225px] xs:h-[225px] sm:w-[300px] sm:h-[300px] sm:-top-12 sm:-right-16 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] lg:-top-16 lg:-right-28 2xl:w-[800px] 2xl:h-[800px] 2xl:-top-20 2xl:-right-32">
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
