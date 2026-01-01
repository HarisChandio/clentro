"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number; // in ms
  suffix?: string;
}

export function CountUp({ end, duration = 2000, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;

      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(percentage * end));

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}
