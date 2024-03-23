import { SignOutButton, SignedIn, SignedOut, currentUser } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const data = await currentUser();

  return (
    <>
      <SignedIn>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h1>Hello, {data?.firstName}</h1>
          <SignOutButton />
        </div>
      </SignedIn>
      <SignedOut>
        <Link href={"/signin"}>Login here</Link>
      </SignedOut>
    </>
  );
}
