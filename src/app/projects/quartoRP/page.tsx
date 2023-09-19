import { Header } from "@/app/components/Header";
import { ProjectLayout } from "@/app/components/ProjectLayout";

import Teste from "../../assets/interiores1.jpg";

import Vertical1 from "./images/003_59 - Foto.jpg";
import Vertical2 from "./images/003_60 - Foto.jpg";
import Foto1 from "./images/0001.jpg";
import Foto2 from "./images/01_Photo - 37.jpg";
import Foto3 from "./images/01_Photo - 31.jpg";
import Foto4 from "./images/01_Photo - 32.jpg";
import Foto5 from "./images/01_Photo - 33.jpg";
import Foto6 from "./images/01_Photo - 34.jpg";
import Foto7 from "./images/01_Photo - 35.jpg";
import { Footer } from "@/app/components/Footer";

export default function QuartoRP() {
  const desc = [
    "- A paleta do quarto com tons naturais de madeira, cores claras e frias e texturas naturais se juntam criando a atmosfera refrescante e aconchegante.",
    "- O tom de madeira enche o quarto enquanto as cores frias provocam a sensação de calma e clareza. Um quarto que nos convida a desacelerar, meditar e descansar.",
  ];
  return (
    <>
      <Header />
      <ProjectLayout img={Teste.src} title="Quarto RP" description={desc} />
      <section className="grid grid-cols-4 gap-4 md:w-1/2 w-4/5 mx-auto justify-center mt-8 mb-28">
        <img
          src={Vertical1.src}
          className="row-span-2 row-start-1 col-start-1 col-span-2 md:h-full h-[272px]"
          alt=""
        />
        <img src={Foto1.src} className="col-span-2 md:h-full h-32" alt="" />
        <img src={Foto4.src} className="col-span-2 md:h-full h-32" alt="" />
        <img
          src={Foto3.src}
          className="col-span-4 md:h-64 h-40 w-full"
          alt=""
        />
        <img src={Foto2.src} className="col-span-2 md:h-full h-32" alt="" />
        <img src={Foto5.src} className="col-span-2 md:h-full h-32" alt="" />
        <img
          src={Vertical2.src}
          className="row-span-2 row-start-4 col-start-3 col-span-2 md:h-full h-[272px]"
          alt=""
        />
        <img src={Foto6.src} className="col-span-2 md:h-auto h-32" alt="" />
        <img src={Foto7.src} className="col-span-2 md:h-auto h-32" alt="" />
      </section>
      <Footer />
    </>
  );
}
