import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";
import { Footer } from "../components/Footer";

import Email from "../assets/email.png";
import QuartoRP from "../assets/capa_quartoRP.jpg";
import QuartoAN from "../assets/capa_quartoAN.jpg";
import QuartoKidsRP from "../assets/capa_RpKIDS.jpg";
import LivingRP from "../assets/capa_Living_RP.jpg";
import Link from "next/link";

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
            img={QuartoRP.src}
            title="Quarto RP"
            desc="Um quarto que nos convida a desacelerar, meditar e descansar."
            page="/projects/quartoRP"
          />
          <ProjectCard
            img={QuartoAN.src}
            title="Quarto AN"
            desc="Um design que mescla o clássico com o moderno."
            page="/projects/quartoAN"
          />
          <ProjectCard
            img={QuartoKidsRP.src}
            title="Quarto kids RP"
            desc="Um ambiente vivo e atemporal que evolui junto com a criança."
            page="/projects/quartoKidsRP"
          />
          <ProjectCard
            img={LivingRP.src}
            title="Living RP"
            desc="Para proporcionar momentos de qualidade com família e amigos"
            page="/projects/livingRP"
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
            <div className="flex items-center my-4">
              <img src={Email.src} alt="email" className="h-6 w-6 mr-2" />
              <p>contato.whellerinteriores@gmail.com</p>
            </div>
            <Link href={"https://wa.me/5551995140398?"} target="_blank">
              <button className="bg-buttonColor-50 hover:bg-darkBlue-50/90 transition-colors text-white w-48 h-12 text-sm rounded-full">
                Entre em contato por WhatsApp
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
