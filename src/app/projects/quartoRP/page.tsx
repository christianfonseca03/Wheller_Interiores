import { Header } from "@/app/components/Header";
import { ProjectLayout } from "@/app/components/ProjectLayout";
import Vertical1 from "./images/00000.png";
import Foto1 from "./images/01_Photo - 32.jpg";
import Foto3 from "./images/01_Photo - 33.jpg";
import Foto4 from "./images/01_Photo - 34.jpg";
import Foto6 from "./images/01_Photo - 35.jpg";
import Foto7 from "./images/01_Photo - 38.jpg";
import { Footer } from "@/app/components/Footer";

export default function QuartoRP() {
  const desc = [
    "- A paleta do quarto com tons naturais de madeira, cores claras e frias e texturas naturais se juntam criando a atmosfera refrescante e aconchegante.",
    "- O tom de madeira enche o quarto enquanto as cores frias provocam a sensação de calma e clareza.",
  ];
  return (
    <>
      <Header />
      <ProjectLayout img={Foto4.src} title="Quarto RP" description={desc} />
      <section className="grid grid-cols-4 gap-2 md:gap-4 md:w-3/5 w-4/5 mx-auto justify-center mt-8 md:mb-28 mb-20">
        <img
          src={Vertical1.src}
          className="row-span-2 row-start-1 col-start-1 col-span-2 md:h-full md:max-h-[744.688px] h-[272px] w-full"
          alt=""
        />
        <img
          src={Foto1.src}
          className="col-span-2 md:h-full md:max-h-[364.34px] h-[132px]"
          alt=""
        />
        <img
          src={Foto4.src}
          className="col-span-2 md:h-full h-[132px] md:max-h-[364.34px]"
          alt=""
        />
        <img
          src={Foto3.src}
          className="col-span-4 md:h-80 h-40 w-full"
          alt=""
        />

        <img src={Foto6.src} className="col-span-2 md:h-96 h-[132px]" alt="" />
        <img src={Foto7.src} className="col-span-2 md:h-96 h-[132px]" alt="" />
      </section>
      <Footer />
    </>
  );
}
