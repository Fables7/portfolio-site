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
    <div className="w-full mb-10 lg:mt-28">
      <div className="flex justify-between mb-14">
        <h2 className="lg:hidden">Projects</h2>
        <h1 className="hidden lg:inline">Projects</h1>
        <CustomButton />
      </div>
      <ul className="grid grid-flow-row grid-cols-1 md:grid-cols-2 md:gap-8">
        {projects.map((project, index) => {
          return (
            <li className="mb-10" key={index}>
              <div>
                <div className="relative flex group  mb-4  ">
                  {project.image && (
                    <>
                      <div className="h-[253px] lg:h-[400px]  ">
                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          // className="w-full "
                          unoptimized
                        />
                      </div>

                      <div className="absolute hidden lg:flex  flex-col items-center justify-center bg-black bg-opacity-70  w-full h-full transition ease-in-out duration-300 opacity-0 group-hover:opacity-100">
                        {project.link && (
                          <CustomButton
                            href={project.link}
                            className="mb-10 "
                            label="VIEW PROJECT"
                          />
                        )}
                        {project.code && (
                          <CustomButton href={project.code} label="VIEW CODE" />
                        )}
                      </div>
                    </>
                  )}
                </div>
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
              <div className="flex mt-6 lg:hidden">
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
