import { CustomButton } from "..";
import Image from "next/image";

const projects = [
  {
    title: "GITHUB SEARCH",
    tools: ["React", "TypeScript", "Tailwind"],
    image: "/github-search-thumbnail.jpeg",
    link: "https://fables7-github-search-user.netlify.app/",
    code: "https://github.com/Fables7/github-user-search-app",
  },
  {
    title: "MEMORY GAME",
    tools: ["React", "TypeScript", "Tailwind"],
    image: "/memory-game-thumbnail.webp",
    link: "https://fables7-memory-game.netlify.app/",
    code: "https://github.com/Fables7/memory-game",
  },
  {
    title: "FRIDGE APP",
    tools: ["React-Native", "TypeScript", "CSS", "Node.js", "MongoDB"],
    image: "",
    link: "",
    code: "https://github.com/Fables7/Fridge-App",
  },
];

const ProjectsBox = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-10">
        <h2>Projects</h2>
        <CustomButton />
      </div>
      <ul className="grid grid-flow-row grid-cols-1 md:grid-cols-2 md:gap-8">
        {projects.map((project, index) => {
          return (
            <li className="mb-10" key={index}>
              <div>
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={100}
                    height={100}
                    className="w-full mb-4"
                    unoptimized
                  />
                )}
                <h3 className="mb-2">{project.title}</h3>
                <ul className="grid grid-cols-3 gap-4 whitespace-nowrap  items-start ">
                  {project.tools.map((tool, index) => {
                    return (
                      <li className=" w-fit" key={index}>
                        <p>{tool}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex mt-6">
                {project.link && (
                  <CustomButton
                    href={project.link}
                    className="mr-8"
                    label="VIEW PROJECT"
                  />
                )}
                {project.code && (
                  <CustomButton href={project.code} label="VIEW CODE" />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectsBox;
