import Link from "next/link";
import backArrow from "../assets/back.png";
import { ReactNode } from "react";

interface ProjectLayoutProps {
  img: string;
  title: string;
  description: string;
  description2: string;
}

export function ProjectLayout({ img, title, description, description2 }: ProjectLayoutProps) {
  return (
    <>
      <Link href={"/projects"} className="flex items-center pt-4 pl-4">
        <img src={backArrow.src} alt="back" className="h-8 w-8" />
        <p className="text-darkBlue-50 ml-1">Voltar</p>
      </Link>
      <main className="mt-8 flex flex-col items-center">
        <section className="flex flex-col justify-center items-center w-4/5">
          <img
            src={img}
            alt="project-image"
            className="rounded-full w-36 h-36"
          />
          <h1 className="font-medium mt-4 text-lg">{title}</h1>
          <div className="bg-black h-[2px] w-1/2 my-2"></div>
          <p className="w-1/2 mb-1">{description}</p>
          <p className="w-1/2">{description2}</p>
        </section>
      </main>
    </>
  );
}
