import { Header } from "@/app/components/Header";
import { ProjectLayout } from "@/app/components/ProjectLayout";

import Teste from "../../assets/interiores1.jpg";

export default function QuartoRP() {
  return (
    <>
      <Header />
      <ProjectLayout
        img={Teste.src}
        title="Quarto RP"
        description="- A paleta do quarto com tons naturais de madeira, cores claras e frias e texturas naturais se juntam criando a atmosfera refrescante e aconchegante. "
        description2="- O tom de madeira enche o quarto enquanto as cores frias provocam a sensação de calma e clareza. Um quarto que nos convida a desacelerar, meditar e descansar."
      />
    </>
  );
}
