import { SignIn } from "@clerk/nextjs";

export default async function Page() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <SignIn />
      </div>
    </>
  );
}
