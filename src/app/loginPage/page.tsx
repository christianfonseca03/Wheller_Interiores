import { SignIn } from "@clerk/nextjs";

export default function loginPage() {
  return (
    <main className="bg-darkBlue-50 h-screen w-screen flex justify-center items-center">
      <SignIn
        afterSignInUrl="/clientArea"
        appearance={{
          elements: {
            footer: "hidden",
          },
        }}
      />
    </main>
  );
}
