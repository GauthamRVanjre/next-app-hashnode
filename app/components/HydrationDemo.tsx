"use client";
import React, { useEffect, useState } from "react";

const HydrationDemo = () => {
  const i = Math.random();
  return (
    <>
      <div>The random value of i is {i}</div>
    </>
  );
};

export default HydrationDemo;
