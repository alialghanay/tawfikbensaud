"user client";

import { useState } from "react";
import InteractiveBars from "./InteractiveBars";

const HVideo = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(2022);

  const handleBarClick = (year: number) => {
    setSelectedYear(year);
  };

  const data = [
    { des: "Your Support is Reality PowerFull", year: 2020 },
    { des: "Your Support is Reality PowerFull", year: 2021 },
    { des: "Your Support is Reality PowerFull", year: 2022 },
    { des: "Your Support is Reality PowerFull", year: 2023 },
    { des: "Your Support is Reality PowerFull", year: 2024 },
  ];

  return (
    <div className="z-30 w-full mt-2 flex flex-col items-center">
      <h1 className="text-white text-4xl text-center font-bold my-4">
        Watch Our Videos
      </h1>

      <div className="w-5/6 shadow-cos rounded-sm relative">
        <div className="absolute bottom-0 left-0 w-full">
          <p className="flex justify-between items-end text-white text-left text-6xl bg-gradient-to-t from-teal-700 to-transparent pt-56">
            <span className="w-1/2">
              {data.find((year) => year.year === selectedYear)?.des}
            </span>
            <span>{data.find((year) => year.year === selectedYear)?.year}</span>
          </p>
        </div>
        <video
          src={`${selectedYear}.mp4`}
          autoPlay
          loop
          muted
          className="rounded-sm w-full"
        />
      </div>

      <InteractiveBars
        data={data}
        onBarClick={handleBarClick}
        InitialYear={2022}
      />
    </div>
  );
};

export default HVideo;
