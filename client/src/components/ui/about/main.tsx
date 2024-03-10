"use client";
import { useEffect, useState } from "react";
import Button from "../t-button";
import { useTranslation } from "next-i18next";

interface Data {
  title: string;
  content: string;
}
const Main = () => {
  const { i18n } = useTranslation();
  const [data, setData] = useState<Data[]>([{ title: "", content: "" }]);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch(
          `http://localhost:1337/api/abouts?locale=${
            i18n.language == "en-US" ? "en" : "ar"
          }&populate=*`
        );
        const res = await response.json();
        const FetcheData: Data[] = res.data.map((item: any) => ({
          title: item.attributes.title,
          content: item.attributes.content,
        }));
        setData(FetcheData);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGalleryData();
  }, [i18n.language]);

  return (
    <>
      <h1 className="font-cairo text-primary text-2xl md:text-4xl lg:text-5xl font-bold mt-2 md:mt-4">
        {data[0].title}
      </h1>
      <p
        dir={i18n.language == "en-US" ? "ltr" : "rtl"}
        className="font-cairo text-zinc-500 xs:text-lg md:text-2xl lg:text-3xl text-center font-extralight w-11/12 sm:w-10/12 lg:w-9/12 mb-2 md:mb-4"
      >
        {data[0].content}
      </p>
      <Button
        label={i18n.language == "en-US" ? "Explore" : "تصفح"}
        onClick={() => console.log("clicked")}
      />
    </>
  );
};

export default Main;
