"use client";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useClerk } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

interface Link {
  link: string;
  titulo: string;
}

export default function ClientArea() {
  const { signOut } = useClerk();
  const { user } = useUser();
  if (!user) return null;

  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.href = "/";
    } catch (error) {
      console.error("erro ao sair");
    }
  };

  const metaData = user.publicMetadata as Record<string, Link>;
  const metaDataTreated = Object.values(metaData);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-pageColor-50 flex-1">
        <h1 className="text-darkBlue-50 font-medium text-2xl mb-6 text-center pt-12">
          Área do cliente
        </h1>
        <section className="flex md:flex-row flex-col justify-center items-center">
          {metaDataTreated.map((doc, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center md:mx-8 mb-4 last:mb-0 md:mb-0"
              >
                <h1 className="text-darkBlue-50 font-medium text-lg mb-2">
                  {doc.titulo}
                </h1>
                <button className="bg-darkBlue-50 text-white h-14 w-20 rounded-3xl">
                  <a href={doc.link} target="_blank">
                    Acessar
                  </a>
                </button>
              </div>
            );
          })}
        </section>
        <div className="flex justify-center md:pt-16 py-8">
          <button
            onClick={handleSignOut}
            className="h-8 w-12 rounded-xl bg-red-700 text-white"
          >
            SAIR
          </button>
        </div>
      </main>
      <div className="md:absolute md:bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
