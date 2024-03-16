import React from "react";
import { userDataType } from "../types";

const ServerSideFetch = async () => {
  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    return await res.json();
  };

  const data: userDataType[] = await fetchData();

  return (
    <>
      <h2>Server side fetched</h2>
      {data.map((d) => (
        <li key={d.id}>{d.title}</li>
      ))}
    </>
  );
};

export default ServerSideFetch;
