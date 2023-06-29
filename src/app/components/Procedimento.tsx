import { CardProcedimento } from "./CardProcedimento";
import Projeto from "../assets/plano.png";
import Dialogo from "../assets/balao-de-fala.png";
import Planejamento from "../assets/data-limite.png";
import Obra from "../assets/ferramentas.png";

export function Procedimento() {
  return (
    <>
      <h1 className="text-center mt-12 text-darkBlue-50 font-medium text-2xl">
        Nosso Procedimento
      </h1>
      <section className="mt-12 flex flex-col justify-center items-center md:flex-row md:justify-evenly">
        <CardProcedimento
          img={Projeto.src}
          title="PROJETO"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie gravida pharetra. Etiam pellentesque sem non consequat porta. Quisque consequat nunc ut neque ornare pulvinar."
        />
        <CardProcedimento
          img={Dialogo.src}
          title="DIÁLOGO"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie gravida pharetra. Etiam pellentesque sem non consequat porta. Quisque consequat nunc ut neque ornare pulvinar."
        />
        <CardProcedimento
          img={Planejamento.src}
          title="PLANEJAMENTO"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie gravida pharetra. Etiam pellentesque sem non consequat porta. Quisque consequat nunc ut neque ornare pulvinar."
        />
        <CardProcedimento
          img={Obra.src}
          title="OBRA"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie gravida pharetra. Etiam pellentesque sem non consequat porta. Quisque consequat nunc ut neque ornare pulvinar."
        />
      </section>
    </>
  );
}
