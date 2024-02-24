"use client";
import { useState } from "react";

type YearData = {
  year: number;
  height: number;
};
interface BarData {
  data: YearData[];
  onBarClick: (year: number) => void;
}
const InteractiveBars = ({ data, onBarClick }: BarData) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleBarClick = (year: number) => {
    setSelectedYear(year);
    onBarClick(year);
  };

  return (
    <div className="flex justify-between mt-5 w-full">
      {data.map((yearData) => (
        <div
          className="w-full flex justify-between items-end"
          key={yearData.year}
        >
          <div className="flex flex-col items-center">
            <p
              className={`${
                selectedYear === yearData.year
                  ? "text-teal-500 text-lg font-bold"
                  : "text-teal-200"
              }`}
            >
              {yearData.year}
            </p>
            <div
              className={`cursor-pointer rounded-t-md transition-height duration-300 ease-in-out ${
                selectedYear === yearData.year
                  ? "bg-teal-500 w-2 shadow-border border-teal-100 border border-opacity-25"
                  : "w-1 bg-teal-200"
              }`}
              style={{ height: `${yearData.height}px` }}
              onClick={() => handleBarClick(yearData.year)}
            ></div>
          </div>
          <div className="w-full flex justify-between items-end">
            {Array.from({ length: 5 }).map((_, index) => (
              <div className="flex flex-col items-center" key={index}>
                <div
                  className={`cursor-pointer rounded-t-md transition-height duration-300 ease-in-out w-1 bg-teal-200 opacity-70`}
                  style={{
                    height: `${yearData.height * Math.random() * 0.9}px`,
                  }}
                  onClick={() => handleBarClick(yearData.year)}
                  key={index}
                ></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InteractiveBars;
