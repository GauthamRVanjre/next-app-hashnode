import ClientSideFetch from "./components/ClientSideFetch";
import ServerSideFetch from "./components/ServerSideFetch";

export default function Home() {
  return (
    <>
      <h1>Fetched Data</h1>
      {/* <ClientSideFetch /> */}
      <ServerSideFetch />
    </>
  );
}
