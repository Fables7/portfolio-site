import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  CustomButton,
  ExperienceBox,
  ProjectsBox,
  Divider,
  SocialsBox,
} from "@/components";
import Image from "next/image";

const experienceItems = ["HTML", "CSS", "JavaScript", "Accessibility", "React"];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-4 box-border">
      <header className="flex flex-col items-center">
        <SocialsBox />
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
        <div className="flex flex-col items-center">
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
        <Divider className=" mt-20 mb-10" />
        <ExperienceBox items={experienceItems} />
        <Divider className=" mt-8 mb-8" />
        <ProjectsBox />
      </div>
    </main>
  );
}
