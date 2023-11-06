import { Header } from "@/app/components/Header";
import { ProjectLayout } from "@/app/components/ProjectLayout";

import FotoVertical from "./images/000_Photo - 37.jpg";
import Foto1 from "./images/2320320.jpg";
import Foto2 from "./images/0101.jpg";
import Foto3 from "./images/01_Photo - 22.jpg";
import Foto4 from "./images/01_Photo - 23.jpg";
import Foto5 from "./images/000000.jpg";
import { Footer } from "@/app/components/Footer";

export default function LivingRP() {
  const desc = [
    "- Com um grande aproveitamento da luz natural, o living da casa RP da o tom de toda a casa, um local aconchegante e contemporâneo onde os tons claros e alguns toques de dourado se misturam com o natural da madeira e pedras utilizadas no projeto.",
    "- O layout amplo e aberto encoraja o fluxo livre e permite ofluir da conversas em qualquer parte do cômodo.",
    "- Cada detalhe pensado para nutrir os laços que mais importam.Um espaço criado para proporcionar momentos de qualidade com família e amigos.",
  ];
  return (
    <>
      <Header />
      <ProjectLayout title="Living RP" img={Foto1.src} description={desc} />
      <section className="grid grid-cols-4 gap-2 md:gap-4 md:w-3/5 w-4/5 mx-auto justify-center mt-8 md:mb-28 mb-20">
        <img src={Foto1.src} className="col-span-2 md:h-full h-[132px]" alt="" />
        <img src={Foto2.src} className="col-span-2 md:h-full h-[132px]" alt="" />
        <img
          src={FotoVertical.src}
          className="row-span-2 row-start-1 col-start-3 col-span-2 md:h-full h-[272px] w-full"
          alt=""
        />
        <img src={Foto3.src} className="col-span-4 md:h-80 h-40 w-full" alt="" />
        <img src={Foto4.src} className="col-span-2 md:h-96 h-[132px]" alt="" />
        <img src={Foto5.src} className="col-span-2 md:h-96 h-[132px]" alt="" />
      </section>
      <Footer />
    </>
  );
}
