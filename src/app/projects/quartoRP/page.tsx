import { Header } from "@/app/components/Header";
import { ProjectLayout } from "@/app/components/ProjectLayout";
import Vertical1 from "./images/00000.png";
import Foto1 from "./images/01_Photo - 32.jpg";
import Foto3 from "./images/01_Photo - 33.jpg";
import Foto4 from "./images/01_Photo - 34.jpg";
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
          className="row-span-3 row-start-1 col-start-1 col-span-2 max-h-full max-w-full"
          alt=""
        />
        <img
          src={Foto1.src}
          className="col-span-2 max-h-full max-w-full"
          alt=""
        />
        <img
          src={Foto4.src}
          className="col-span-2 max-h-full max-w-full"
          alt=""
        />
        <img
          src={Foto7.src}
          className="col-span-2 max-h-full max-w-full"
          alt=""
        />
        <img
          src={Foto3.src}
          className="col-span-4 max-h-full max-w-full"
          alt=""
        />
      </section>
      <Footer />
    </>
  );
}
