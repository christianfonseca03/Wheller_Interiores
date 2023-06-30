import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";

import Interiores1 from "../assets/interiores1.jpg";

export default function Projects() {
  return (
    <>
      <Header />
      <main>
        <h1 className="text-center mt-12 text-darkBlue-50 font-medium text-2xl mb-12">
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
        <section className="mt-10 flex flex-col justify-center items-center md:grid md:grid-cols-2">
          <h2 className="font-bold text-2xl w-1/2">
            Entre em contato para darmos início ao seu projeto dos sonhos!
          </h2>
          <div className="flex flex-col justify-center mt-8">
            <h3 className="text-xl font-semibold">
              Contato
            </h3>
            <div>
              <p>
              contato.whellerinteriores@gmail.com
              </p>
            </div>
            <button className="bg-buttonColor-50 text-white rounded-lg w-32 h-32">Entre em contato por WhatsApp</button>
          </div>
        </section>
      </main>
    </>
  );
}
