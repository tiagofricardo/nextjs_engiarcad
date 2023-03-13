import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ project, mapindex, categoryId }) => {
  return (
    <Link
      className={`projectcard mb-8 ${
        mapindex % 2 > 0
          ? "grid-cols-[1fr_4fr] before:bg-gradient-to-l"
          : "grid-cols-[4fr_1fr] before:bg-gradient-to-r"
      }`}
      href={`/portfolio/${categoryId}/${project.id}`}
    >
      <div
        className={`w-[96%] p-6 ${
          mapindex % 2 > 0 ? "order-2 ml-5" : "order-1 mr-5"
        }`}
      >
        <h5>{project.title}</h5>
        <h6 className="mt-1">{project.subtitle}</h6>
        <div className={"projectcard-bar"} />
        <p className="hidden text-justify md:block">{project.content}</p>
      </div>
      <div
        className={`projectcard-img ${
          mapindex % 2 > 0
            ? "order-1 before:left-[90%]"
            : "order-2 before:right-[95%]"
        }`}
      >
        <Image
          className={"max-w-fit"}
          key={project.id}
          alt={project.id}
          src={project.image}
          height={275}
          width={275}
        />
      </div>
    </Link>
  );
};

export default ProjectCard;
