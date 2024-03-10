"use client";
import { useEffect, useRef, useState } from "react";

type YearData = {
  year: string;
  des: string;
};
interface BarData {
  data: YearData[];
  onBarClick: (year: string) => void;
  InitialYear?: string;
}
const InteractiveBars = ({ data, onBarClick, InitialYear }: BarData) => {
  const [selectedYear, setSelectedYear] = useState<string | undefined>(
    InitialYear
  );

  const [barHeights, setBarHeights] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const updateBarHeights = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const updatedHeights = Array.from({
        length: containerRef.current
          ? Math.floor(containerRef.current.offsetWidth / 100)
          : 10,
      }).map(() => Math.floor(containerWidth * 0.2 * Math.random() * 0.9));
      setBarHeights(updatedHeights);
    }
  };

  useEffect(() => {
    updateBarHeights();
    window.addEventListener("resize", updateBarHeights);
    return () => {
      window.removeEventListener("resize", updateBarHeights);
    };
  }, []);

  const handleBarClick = (year: string) => {
    setSelectedYear(year);
    onBarClick(year);
    updateBarHeights();
  };

  return (
    <div
      className="flex justify-between mt-2 w-full xs:mt-4"
      ref={containerRef}
    >
      {data.map((yearData) => (
        <div
          className="w-full flex justify-center items-end"
          key={yearData.year}
        >
          <div className="flex flex-col items-center">
            <p
              className={`${
                selectedYear === yearData.year
                  ? "text-teal-500 text-lg lg:text-3xl xl:text-4xl 2xl:text-5xl  font-bold"
                  : "text-teal-200 lg:text-2xl xl:text-3x xl:text-4xl"
              }`}
            >
              {yearData.year}
            </p>
            <div
              className={`cursor-pointer rounded-t-md transition-height duration-300 ease-in-out ${
                selectedYear === yearData.year
                  ? "bg-teal-500 w-1 md:w-2 border-teal-200 border border-opacity-12 shadow shadow-teal-200"
                  : "w-1 md:w-2 bg-teal-200"
              }`}
              style={{
                height: `${
                  containerRef.current
                    ? containerRef.current.offsetWidth * 0.2
                    : 150
                }px`,
              }}
              onClick={() => handleBarClick(yearData.year)}
            ></div>
          </div>
          <div className="w-full flex justify-between items-end">
            {Array.from({
              length: containerRef.current
                ? Math.floor(containerRef.current.offsetWidth / 100)
                : 10,
            }).map((_, index) => (
              <div className="flex flex-col items-center" key={index}>
                <div
                  className={`rounded-t-md transition-height duration-300 ease-in-out w-1 bg-teal-200 opacity-25`}
                  style={{
                    height: `${barHeights[index]}px`,
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
