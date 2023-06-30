interface ProjectCardProps {
  img: string,
  title: string,
  desc: string
}

export function ProjectCard({img, title, desc} : ProjectCardProps) {
  return (
    <div className="flex flex-col justify-center items-center mb-6 md:mb-0">
      <img src={img} alt="Capa" className="  drop-shadow" />
      <h2 className="font-medium mt-2">{title}</h2>
      <p className="font-light">{desc}</p>
    </div>
  )
}