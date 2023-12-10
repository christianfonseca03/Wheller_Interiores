import { Header } from "@/app/components/Header";
import { ProjectLayout } from "@/app/components/ProjectLayout";

import Vert1 from "./images/verticalKids.jpg";
import Foto1 from "./images/12_32 - Foto.jpg";
import Foto2 from "./images/12_36 - Foto.jpg";
import Foto3 from "./images/12_38 - Foto.jpg";
import Foto4 from "./images/12_43 - Foto.jpg";
import Foto5 from "./images/12_44 - Foto.jpg";
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
        img={Foto1.src}
        description={desc}
      />
      <section className="grid grid-cols-4 gap-2 md:gap-4 md:w-3/5 w-4/5 mx-auto justify-center mt-8 md:mb-28 mb-20">
        <img
          src={Vert1.src}
          className="row-span-3 row-start-1 col-start-1 col-span-2 max-h-full max-w-full"
          alt=""
        />
        <img
          src={Foto2.src}
          className="col-span-2 max-h-full max-w-full"
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
          src={Foto3.src}
          className="col-span-4 max-h-full max-w-full"
          alt=""
        />
      </section>
      <Footer />
    </>
  );
}
