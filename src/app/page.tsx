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
    <main className="flex min-h-screen flex-col items-center  p-4 box-border  bg-[var(--primary-black)]">
      <div className="w-[345px] md:w-[708px]">
        <header>
          <SocialsBox />
        </header>

        <div className="flex flex-col items-center md:flex-row-reverse relative">
          <div className="relative md:absolute w-[175px] h-[250px] md:h-[450px]  md:w-[280px] my-10">
            <Image
              priority
              className="md:absolute  z-0 "
              src="/profile.jpeg"
              alt="profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col items-center text-center md:text-left md:items-start md:mt-20 md:z-10">
            <h1>
              Nice to <br className="hidden md:inline" /> meet you!{" "}
              <br className="md:hidden" />
              {"I'm "}
              <span className="underline underline-offset-8 decoration-[var(--accent)] whitespace-nowrap">
                Fabien Lestrat
              </span>
            </h1>
            <p className=" my-8 md:mt-16">
              Based in the UK, {"I'm "}a web developer{" "}
              <br className="hidden md:inline" /> passionate about building
              accessible web apps <br className="hidden md:inline" /> that users
              love.
            </p>
            <CustomButton />
          </div>
        </div>
        <Divider className=" mt-20 mb-10" />
        <ExperienceBox items={experienceItems} />
        <Divider className=" mt-8 mb-8" />
        <ProjectsBox />
      </div>
    </main>
  );
}
