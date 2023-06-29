interface CardProps {
  img: string,
  title: string,
  text: string
}

export function CardProcedimento({img, title, text} : CardProps) {
  return (
    <div className="flex flex-col justify-center items-center w-56 mb-8">
      <img src={img} alt="Etapa" className="w-14 h-14 mb-4" />
      <h1 className="mb-2 text-darkBlue-50">{title}</h1>
      <p className="font-light text-center">{text}</p>
    </div>
  )
}