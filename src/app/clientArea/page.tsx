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
        <h1 className="text-darkBlue-50 font-medium text-2xl mb-6 md:mb-14 text-center pt-12">
          Área do cliente
        </h1>
        <section className="flex flex-col justify-center items-center">
          {metaDataTreated.map((doc, index) => {
            return (
              <ul
                className="text-darkBlue-50 font-medium text-lg mb-2 list-disc w-36"
                key={index}
              >
                <li className="text-left">
                  <a href={doc.link} target="_blank">
                    {doc.titulo}
                  </a>
                </li>
              </ul>
            );
          })}
        </section>
        <div className="flex justify-center md:pt-16 py-8">
          <button
            onClick={handleSignOut}
            className="h-8 w-12 rounded-xl bg-buttonColor-50 hover:bg-darkBlue-50/90 transition-colors text-white"
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
