"use client";
import { useEffect, useState } from "react";
import Spotlight from "../spotilght";
import CountUp from "../count-up";
import { useTranslation } from "react-i18next";

interface StatisticData {
  id: number;
  number: string;
  notation: string;
  description: string;
}

const Statistic: React.FC = () => {
  const [statistics, setStatistics] = useState<StatisticData[]>([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch(
          `http://localhost:1337/api/statistics?locale=${
            i18n.language == "en-US" ? "en" : "ar"
          }`
        );
        const data = await response.json();
        const transformedData: StatisticData[] = data.data.map((stat: any) => ({
          id: stat.id,
          number: stat.attributes.number,
          notation: stat.attributes.notation,
          description: stat.attributes.description,
        }));
        setStatistics(transformedData);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStatistics();
  }, [i18n.language]);

  return (
    <div className="z-10 h-fit">
      <Spotlight className="relative top-24 -left-8 opacity-50 -z-10 h-fit" />
      <div className="w-fit rounded-xl bg-background flex flex-row justify-center items-center shadow-cos shadow-black z-10">
        {statistics.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col justify-center items-center p-1 m-1 gap-2"
          >
            <h4 className="text-primary text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold p-0">
              <CountUp from={0} to={Number(stat.number)} duration={15000} />
              {stat.notation}
            </h4>
            <p className="text-center text-sm lg:text-lg xl:text-2xl 2xl:text-3xl font-cairo p-0">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistic;
