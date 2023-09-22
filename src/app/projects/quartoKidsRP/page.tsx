import { Header } from "@/app/components/Header";
import Teste from "../../assets/interiores1.jpg";
import { ProjectLayout } from "@/app/components/ProjectLayout";

import Vert1 from "./images/vert1_rotated.jpg";
import Vert2 from "./images/vert2_rotated.jpg";
import Foto1 from "./images/12_31 - Foto.jpg";
import Foto2 from "./images/12_32 - Foto.jpg";
import Foto3 from "./images/12_33 - Foto.jpg";
import Foto4 from "./images/12_33 - Foto.jpg";
import Foto5 from "./images/12_34 - Foto.jpg";
import Foto6 from "./images/12_36 - Foto.jpg";
import Foto7 from "./images/12_37 - Foto.jpg";
import Foto8 from "./images/12_38 - Foto.jpg";
import Foto9 from "./images/12_39 - Foto.jpg";
import Foto10 from "./images/12_41 - Foto.jpg";
import Foto11 from "./images/12_42 - Foto.jpg";
import Foto12 from "./images/12_43 - Foto.jpg";
import Foto13 from "./images/12_44 - Foto.jpg";
import Foto14 from "./images/12_45 - Foto.jpg";
import Foto15 from "./images/12_45 - Foto.jpg";
import { Footer } from "@/app/components/Footer";

export default function QuartoKidsRP() {
  const desc = [
    "- Um ambiente vivo e atemporal que evolui junto com a criança.",
    "- Projetado para se desenvolver junto com o seu usuário, este dormitório possui um design inspirado em Montessori, onde a essência do layout é se adaptar à sua necessidade e permitir uma infância cheia de exploração e independência.",
    "- Uma cama que pode ser utilizada dos primeiros anos até a sua adolescência, a escrivaninha com regulagem de altura, e assim também cada móvel do quarto, meticulosamente pensado para manter sua sustentabilidade e atemporalidade.",
  ];
  return (
    <>
      <Header />
      <ProjectLayout
        title="Quarto Kids RP"
        img={Teste.src}
        description={desc}
      />
      <section className="grid grid-cols-4 gap-2 md:gap-4 md:w-1/2 w-4/5 mx-auto justify-center mt-8 md:mb-28 mb-20">
        <img src={Foto1.src} alt=""  className="col-span-4 md:h-64 h-40 w-full"/>
        <img src={Foto2.src} alt="" className="col-span-2 md:h-auto h-[132px]" />
        <img src={Foto3.src} alt="" className="col-span-2 md:h-auto h-[132px]" />
        <img src={Foto8.src} alt="" className="col-span-2 md:h-auto h-[132px]" />
        <img src={Foto6.src} alt="" className="col-span-2 md:h-auto h-[132px]" />
        <img src={Vert1.src} alt="" className="row-span-2 row-start-4 col-start-1 col-span-2 md:h-full h-[272px]" />
        <img src={Foto5.src} alt="" className="col-span-2 md:h-full h-[132px]" />
        <img src={Foto7.src} alt="" className="col-span-2 md:h-full h-[132px]" />
        <img src={Foto9.src} alt="" className="col-span-4 md:h-64 h-40 w-full" />
        <img src={Foto4.src} alt="" className="col-span-2 md:h-auto h-[132px]" />
        <img src={Foto10.src} alt="" className="col-span-2 md:h-auto h-[132px]" />
        <img src={Foto11.src} alt="" className="col-span-2 md:h-auto h-[132px]" />
        <img src={Foto15.src} alt="" className="col-span-2 md:h-auto h-[132px]" />
        <img src={Foto13.src} alt="" className="col-span-2 md:h-full h-[132px]" />
        <img src={Foto14.src} alt="" className="col-span-2 md:h-full h-[132px]"  />
        <img src={Vert2.src} alt="" className="row-span-2 row-start-9 col-start-3 col-span-2 md:h-full h-[272px]" />
        <img src={Foto12.src} alt="" className="col-span-4 md:h-64 h-40 w-full" />
      </section>
      <Footer/>
    </>
  );
}
