"useEffect";
import React, { useEffect, useState } from "react";

interface ICountUpProps {
  from: number;
  to: number;
  duration: number;
}

const CountUp: React.FC<ICountUpProps> = ({ from, to, duration }) => {
  const [val, setVal] = useState<number>(from);
  const [startTimestamp, setStartTimestamp] = useState<number | null>(null);

  const computeEasing = (
    t: number,
    d: number,
    b: number = 0,
    c: number = 1
  ) => {
    return t === d ? b + c : c * (-Math.pow(2, (-20 * t) / d) + 1) + b;
  };

  const computeValue = (progress: number) => {
    if (from < to) {
      return from + Math.round(computeEasing(progress, duration, 0, to - from));
    } else {
      return from - Math.round(computeEasing(progress, duration, 0, from - to));
    }
  };

  const performAnimation = (timestamp: number) => {
    if (!startTimestamp) {
      setStartTimestamp(timestamp);
    }

    const progress = Math.ceil(timestamp - startTimestamp!);

    if (progress < duration) {
      setVal(computeValue(progress));
      requestAnimationFrame(performAnimation);
    } else {
      setVal(computeValue(duration));
      setStartTimestamp(null);
    }
  };

  useEffect(() => {
    requestAnimationFrame(performAnimation);

    return () => {
      // Cleanup when component unmounts
      setStartTimestamp(null);
    };
  }, []);

  return <>{val}</>;
};

export default CountUp;
