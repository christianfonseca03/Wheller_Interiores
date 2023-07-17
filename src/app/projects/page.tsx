import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";

import Interiores1 from "../assets/interiores1.jpg";
import Email from "../assets/email.png"
import { Footer } from "../components/Footer";

export default function Projects() {
  return (
    <>
      <Header />
      <main className="bg-pageColor-50">
        <h1 className="text-center text-darkBlue-50 pt-12 font-medium text-2xl mb-12">
          Projetos
        </h1>
        <section className="flex flex-col md:grid md:grid-cols-2 gap-8 px-8">
          <ProjectCard
            img={Interiores1.src}
            title="Apê Chris"
            desc="Apartamento pica viu"
          />
          <ProjectCard
            img={Interiores1.src}
            title="Apê Chris"
            desc="Apartamento pica viu"
          />
          <ProjectCard
            img={Interiores1.src}
            title="Apê Chris"
            desc="Apartamento pica viu"
          />
          <ProjectCard
            img={Interiores1.src}
            title="Apê Chris"
            desc="Apartamento pica viu"
          />
        </section>
        <section className="mt-10 flex flex-col justify-center items-center md:grid md:grid-cols-2 pb-16">
          <div className="flex justify-center items-center">
            <h2 className="font-bold text-2xl w-1/2">
              Entre em contato para darmos início ao seu projeto dos sonhos!
            </h2>
          </div>

          <div className="flex flex-col justify-center items-center mt-8">
            <h3 className="text-xl font-semibold">Contato</h3>
            <div className="flex items-center my-2">
              <img src={Email.src} alt="email" className="h-6 w-6 mr-2" />
              <p>contato.whellerinteriores@gmail.com</p>
            </div>
            <button className="bg-buttonColor-50 text-white w-48 h-12 text-sm rounded-full">
              Entre em contato por WhatsApp
            </button>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
