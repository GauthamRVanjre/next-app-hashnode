"use client";
import React, { useEffect, useState } from "react";

const HydrationDemo = () => {
  const [isClient, setIsClient] = useState<boolean>();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const i = Math.random();
  return <>{isClient && <div>The random value of i is {i}</div>}</>;
};

export default HydrationDemo;
