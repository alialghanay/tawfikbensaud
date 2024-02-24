"user client";

import { useState } from "react";
import InteractiveBars from "./InteractiveBars";

const HVideo = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleBarClick = (year: number) => {
    // Update the photo based on the clicked year
    console.log(`Year clicked: ${year}`);
    // You can implement logic here to change the photo based on the selected year
  };

  const data = [
    { year: 2020, height: 150 },
    { year: 2021, height: 150 },
    { year: 2022, height: 150 },
    { year: 2023, height: 150 },
    { year: 2024, height: 150 },
  ];

  return (
    <div className="z-40 w-full">
      <InteractiveBars data={data} onBarClick={handleBarClick} />
    </div>
  );
};

export default HVideo;
