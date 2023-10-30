import { Header } from "@/app/components/Header";
import Teste from "../../assets/interiores1.jpg";
import { ProjectLayout } from "@/app/components/ProjectLayout";

import Vertical1 from "./images/vert.jpg";
import Foto1 from "./images/02_31 - Foto.jpg";
import Foto2 from "./images/02_36 - Foto.jpg";
import Foto3 from "./images/02_37 - Foto.jpg";
import Foto4 from "./images/02_38 - Foto.jpg";
import Foto5 from "./images/02_39 - Foto.jpg";
import { Footer } from "@/app/components/Footer";

export default function QuartoAN() {
  const desc = [
    "- A interação entre o tom claros de madeira e paredes brancas cria uma tela de serenidade, convidando a tranquilidade para cômodo.",
    "- O clássico encontra o moderno à medida que a madeira se harmoniza com a simplicidade das linhas, evocando uma sensação de equilíbrio e harmonia.",
  ];
  return (
    <>
      <Header />
      <ProjectLayout img={Teste.src} title="Quarto AN" description={desc} />
      <section className="grid grid-cols-4 gap-2 md:gap-4 md:w-3/5 w-4/5 mx-auto justify-center mt-8 md:mb-28 mb-20">
        <img src={Foto1.src} alt="" className="col-span-2 md:h-96 h-[132px]" />
        <img src={Foto3.src} alt="" className="col-span-2 md:h-96 h-[132px]" />
        <img src={Foto2.src} alt="" className="col-span-4 md:h-80 h-40 w-full" />
        <img src={Foto4.src} alt="" className="col-span-2 md:h-full h-[132px]" />
        <img src={Foto5.src} alt="" className="col-span-2 md:h-full h-[132px]" />
        <img src={Vertical1.src} alt="" className="row-span-2 row-start-3 col-start-3 col-span-2 md:h-full h-[272px] w-full" />
      </section>
      <Footer/>
    </>
  );
}
