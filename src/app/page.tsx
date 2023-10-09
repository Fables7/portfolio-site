import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { CustomButton, ExperienceBox, ProjectsBox } from "@/components";
import Image from "next/image";

const icons = [
  { link: "https://github.com/Fables7", icon: faGithub },
  {
    link: "https://www.linkedin.com/in/fabien-lestrat-1ab41b1b1/",
    icon: faLinkedin,
  },
];

const experienceItems = ["HTML", "CSS", "JavaScript", "Accessibility", "React"];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-4 box-border">
      <header className="flex flex-col items-center">
        <h3 className="">Fabien Lestrat</h3>
        <div className="flex justify-between w-[100px] mt-4">
          {icons.map((icon, index) => {
            return (
              <a key={index} href={icon.link}>
                <FontAwesomeIcon className=" w-7" icon={icon.icon} />
              </a>
            );
          })}
        </div>
      </header>
      <div className="flex items-center flex-col">
        <Image
          priority
          className=" w-auto mt-4 mb-10"
          src="/profile.jpeg"
          alt="profile"
          width={100}
          height={100}
        />
        <div className="flex flex-col">
          <h1 className=" text-center">Nice to meet you!</h1>
          <h1 className=" text-center ">
            {"I'm "}
            <span className="underline underline-offset-8 decoration-[var(--accent)]">
              Fabien Lestrat
            </span>
          </h1>
          <p className=" text-center my-8 ">
            Based in the UK, {"I'm "}a web developer passionate about building
            accessible web apps that users love.
          </p>
          <CustomButton />
        </div>
        <div className="w-full h-[1px] bg-white mt-20 mb-10" />
        <ExperienceBox items={experienceItems} />
        <div className="w-full h-[1px] bg-white mt-8 mb-8" />
        <ProjectsBox />
      </div>
    </main>
  );
}
