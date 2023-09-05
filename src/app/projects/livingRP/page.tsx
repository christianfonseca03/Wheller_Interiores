import { Header } from "@/app/components/Header";
import Teste from "../../assets/interiores1.jpg";
import { ProjectLayout } from "@/app/components/ProjectLayout";

export default function LivingRP() {
  return (
    <>
      <Header />
      <ProjectLayout
        title="Living RP"
        img={Teste.src}
        description="- Com um grande aproveitamento da luz natural, o living da casa RP da
        o tom de toda a casa, um local aconchegante e contemporâneo onde os
        tons claros e alguns toques de dourado se misturam com o natural da
        madeira e pedras utilizadas no projeto."
        description2="- O layout amplo e aberto encoraja o fluxo livre e permite o
        fluir da conversas em qualquer parte do cômodo.
        Cada detalhe pensado para nutrir os laços que mais importam.Um
        espaço criado para proporcionar momentos de qualidade com família e
        amigos."
      />
    </>
  );
}
