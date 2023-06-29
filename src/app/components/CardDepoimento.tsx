interface DepoimentoProps {
  title: string;
  text: string;
  author: string;
}

export function CardDepoimento({ title, text, author }: DepoimentoProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h1 className="text-xl">{title}</h1>
      <p className="italic font-light md:w-96 w-40 my-6">{text}</p>
      <p className="font-light">{author}</p>
    </div>
  );
}
