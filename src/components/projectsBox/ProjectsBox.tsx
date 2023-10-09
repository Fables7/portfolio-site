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
  {
    title: "MEMORY GAME",
    tools: ["React", "TypeScript", "Tailwind"],
    image: "",
    link: "",
    code: "",
  },
  {
    title: "FRIDGE APP",
    tools: ["React-Native", "TypeScript", "CSS", "Node.js", "MongoDB"],
    image: "",
    link: "",
    code: "",
  },
];

const ProjectsBox = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-10">
        <h1>Projects</h1>
        <CustomButton />
      </div>
      <ul>
        {projects.map((project, index) => {
          return (
            <li className="mb-10" key={index}>
              <div>
                {/* <Image src="" alt={project.title} /> */}
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
                <CustomButton
                  href="hello"
                  className="mr-8"
                  label="VIEW PROJECT"
                />
                <CustomButton href="hello" label="VIEW CODE" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectsBox;
