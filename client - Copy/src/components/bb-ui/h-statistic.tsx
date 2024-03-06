"use client";
import { useState } from "react";
import Spotlight from "../ui/spotilght";
import axois from "../../lib/axios";

const HStatistic = () => {
  // const [d, setD] = useState([]);
  // const data = axois.get("/api/statistics").then((res) => setD(res.data.data));
  // console.log(d);
  return (
    <div className="w-3/5 m-0 p-0">
      <Spotlight className="relative top-32 left-24 -z-10 opacity-50 drop-shadow-xl" />
      <div className="container rounded-xl bg-background flex flex-row justify-around items-center m-1 shadow-cos shadow-black z-10">
        <div className="flex flex-col justify-center items-center p-1 m-1 gap-2">
          <h4 className="text-primary text-xl font-[800]">20M</h4>
          <p className="text-center text-sm">Number of Supporters</p>
        </div>
        <div className="flex flex-col justify-center items-center p-1 m-1 gap-2">
          <h4 className="text-primary text-xl font-[800]">63K+</h4>
          <p className="text-center text-sm">Weve Helped Raise</p>
        </div>
        <div className="flex flex-col justify-center items-center p-1 m-1 gap-2">
          <h4 className="text-primary text-xl font-[800]">20M</h4>
          <p className="text-center text-sm">Number of Supporters</p>
        </div>
      </div>
    </div>
  );
};

export default HStatistic;
