import { CustomButton } from "..";
import Image from "next/image";

const projects = [
  {
    title: "GITHUB SEARCH",
    tools: ["React", "TypeScript", "Tailwind"],
    image: "",
    link: "",
    code: "",
  },
];

const ProjectsBox = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1>Projects</h1>
        <CustomButton />
      </div>
      <ul>
        {projects.map((project, index) => {
          return (
            <li key={index}>
              <div>
                {/* <Image src="" alt={project.title} /> */}
                <h3>{project.title}</h3>
                <ul className="grid grid-flow-col items-start ">
                  {project.tools.map((tool, index) => {
                    return (
                      <li className=" w-fit" key={index}>
                        <p>{tool}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex">
                <CustomButton label="VIEW PROJECT" />
                <CustomButton label="VIEW CODE" />
                <a href={project.link}>Link</a>
                <a href={project.code}>Code</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectsBox;
