import { Header } from "@/app/components/Header";
import Teste from "../../assets/interiores1.jpg";
import { ProjectLayout } from "@/app/components/ProjectLayout";

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
    </>
  );
}
