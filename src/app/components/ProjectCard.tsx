import Link from "next/link"

interface ProjectCardProps {
  img: string,
  title: string,
  desc: string,
  page: string
}

export function ProjectCard({img, title, desc, page} : ProjectCardProps) {
  return (
    <Link className="flex flex-col justify-center items-center mb-6 md:mb-0 hover:bg-darkBlue-50/5 transition-colors" href={page}>
      <img src={img} alt="Capa" className="  drop-shadow" />
      <h2 className="font-medium mt-2">{title}</h2>
      <p className="font-light pb-2">{desc}</p>
    </Link>
  )
}