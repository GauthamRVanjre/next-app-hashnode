"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <>
      <h1>Profile</h1>
      <button onClick={() => router.push("/")}>Go to Home</button>
    </>
  );
};

export default page;
