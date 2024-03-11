"use client";
import { useState, useEffect } from "react";
import InteractiveBars from "./InteractiveBars";
import { useTranslation } from "react-i18next";

interface YearData {
  year: string;
  des: string;
  url: string;
}

const HVideo: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2023");
  const [galleryData, setGalleryData] = useState<YearData[]>([]);
  const { i18n } = useTranslation();

  const handleBarClick = (year: string) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch(
          `http://localhost:1337/api/galleries?locale=${
            i18n.language == "en-US" ? "en" : "ar"
          }&populate=*`
        );
        const data = await response.json();
        const galleryData: YearData[] = data.data.map((item: any) => ({
          year: item.attributes.title,
          des: item.attributes.description,
          url:
            "http://localhost:1337" + item.attributes.media.data.attributes.url,
        }));
        setGalleryData(galleryData);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGalleryData();
  }, [i18n.language]);

  const isVideo = (url?: string): boolean => {
    if (!url) return false;
    const videoExtensions = ["mp4", "webm", "ogg"];
    const fileExtension = url.slice(((url.lastIndexOf(".") - 1) >>> 0) + 2);
    return videoExtensions.includes(fileExtension.toLowerCase());
  };

  return (
    <div className="z-10 w-full flex flex-col items-center mt-2">
      <h1 className="text-white text-2xl text-center font-bold font-cairo my-4">
        {i18n.language == "en-US" ? "Watch our gallery." : "شاهد بعض اعمالنا."}
      </h1>

      <div className="w-5/6 shadow-cos rounded-sm relative">
        <div className="absolute bottom-0 left-0 w-full">
          <p
            className="flex justify-between items-end font-cairo text-white xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-6xl  bg-gradient-to-t from-teal-700 to-transparent pt-28 md:pt-48 pb-2 px-2 lg:px-4 lg:pb-6 xl:pt-56"
            dir={i18n.language == "en-US" ? "ltr" : "rtl"}
          >
            <span className="w-1/2">
              {galleryData.find((year) => year.year === selectedYear)?.des}
            </span>
            <span>
              {galleryData.find((year) => year.year === selectedYear)?.year}
            </span>
          </p>
        </div>
        {isVideo(
          galleryData.find((year) => year.year === selectedYear)?.url
        ) ? (
          <video
            src={galleryData.find((year) => year.year === selectedYear)?.url}
            autoPlay
            loop
            muted
            className="rounded-sm w-full"
          />
        ) : (
          <img
            src={galleryData.find((year) => year.year === selectedYear)?.url}
            alt="Gallery"
            className="rounded-sm w-full"
          />
        )}
      </div>

      <InteractiveBars
        data={galleryData}
        onBarClick={handleBarClick}
        InitialYear={"2022"}
      />
    </div>
  );
};

export default HVideo;
