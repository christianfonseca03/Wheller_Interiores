import { CardProcedimento } from "./CardProcedimento";
import Projeto from "../assets/plano.png";
import Briefing from "../assets/briefingg.png"
import Detalhamento from "../assets/detail.png";
import Obra from "../assets/ferramentas.png";

export function Procedimento() {
  return (
    <>
      <h1 className="text-center mt-12 text-darkBlue-50 font-medium text-2xl">
        Nosso Procedimento
      </h1>
      <section className="mt-12 flex flex-col justify-center items-center md:flex-row md:justify-evenly">
        <CardProcedimento
          img={Briefing.src}
          title="BRIEFING"
          text="Antes de começarmos o projeto você preencherá um questionário para entendermos por completo as necessidades, gostos e desejos para o seu ambiente dos sonhos."
        />
        <CardProcedimento
          img={Projeto.src}
          title="PROJETO E APRESENTAÇÃO"
          text="Colocamos a mão na massa para transformar em realidade tudo o que antes estava no mundo das ideias! Projetamos e apresentamos para você seu ambiente com imagens realistas para a melhor compreensão do que foi projetado."
        />
        <CardProcedimento
          img={Detalhamento.src}
          title="DETALHAMENTO"
          text="Depois do projeto aprovado, seguimos para a etapa de detalhamento. Onde todo o projeto de marcenaria, iluminação, revestimentos, entre outros, são detalhados e especificados para que a execução ocorra conforme o projeto apresentado."
        />
        <CardProcedimento
          img={Obra.src}
          title="ACOMPANHAMENTO"
          text="Possuímos também o serviço de acompanhamento da execução do nosso projeto, para uma obra com menos incômodos e imprevistos."
        />
      </section>
    </>
  );
}
