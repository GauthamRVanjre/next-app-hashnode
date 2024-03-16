"use client";
import React, { useEffect, useState } from "react";
import { userDataType } from "../types";

const ClientSideFetch = () => {
  const [data, setData] = useState<userDataType[]>();

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    setData(todos);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h2>Client Side Fetched</h2>
      <div>
        {data?.map((d) => (
          <li key={d.id}>{d.title}</li>
        ))}
      </div>
    </>
  );
};

export default ClientSideFetch;
