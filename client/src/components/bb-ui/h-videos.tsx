"user client";

import { useState } from "react";
import InteractiveBars from "./InteractiveBars";

const HVideo = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(data[0].year);

  const handleBarClick = (year: number) => {
    setSelectedYear(year);
  };

  const data = [
    { year: 2020, height: 150 },
    { year: 2021, height: 150 },
    { year: 2022, height: 150 },
    { year: 2023, height: 150 },
    { year: 2024, height: 150 },
  ];

  return (
    <div className="z-40 w-full mt-2 flex flex-col items-center">
      <h1 className="text-white text-4xl text-center font-bold my-4">
        Watch Our Videos
      </h1>
      <div className="w-1/2 shadow-cos rounded-sm">
        <video
          src={`${selectedYear}.mp4`}
          controls
          autoPlay
          muted
          className="rounded-sm"
        />
      </div>
      <InteractiveBars data={data} onBarClick={(year) => selectedYear(year)} />
    </div>
  );
};

export default HVideo;
