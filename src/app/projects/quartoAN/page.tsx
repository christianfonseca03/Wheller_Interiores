import { Header } from "@/app/components/Header";
import Teste from "../../assets/interiores1.jpg";
import { ProjectLayout } from "@/app/components/ProjectLayout";

export default function QuartoAN() {
  const desc = [
    "- A interação entre o tom claros de madeira e paredes brancas cria uma tela de serenidade, convidando a tranquilidade para cômodo.",
    "- O clássico encontra o moderno à medida que a madeira se harmoniza com a simplicidade das linhas, evocando uma sensação de equilíbrio e harmonia.",
  ];
  return (
    <>
      <Header />
      <ProjectLayout img={Teste.src} title="Quarto AN" description={desc} />
    </>
  );
}
