interface CardProps {
  img: string;
  title: string;
  text: string;
}

export function CardProcedimento({ img, title, text }: CardProps) {
  return (
    <div className="flex flex-col justify-start items-center w-56 mb-12 md:h-80 h-fit relative">
      <div className="flex flex-col justify-start items-center  pt-1">
        <img src={img} alt="Etapa" className="w-14 h-14 mb-3" />
        <h1 className="mb-1 text-darkBlue-50">{title}</h1>
      </div>
      <p className="font-light text-center">{text}</p>
    </div>
  );
}
