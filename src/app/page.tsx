import {
  CustomButton,
  ExperienceBox,
  ProjectsBox,
  Divider,
  SocialsBox,
  ProfileImg,
} from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-4 box-border  bg-[var(--primary-black)]">
      <div className="w-full mx-auto lg:max-w-[1110px] xl:px-0 px-10 ">
        <header>
          <SocialsBox />
        </header>

        <div className="flex flex-col items-center md:flex-row-reverse relative">
          <ProfileImg />
          <div className="flex flex-col items-center text-center md:text-left md:items-start md:mt-20 md:z-10">
            <h1>
              Nice to <br className="hidden md:inline lg:hidden" /> meet you!{" "}
              <br className="md:hidden" />
              {"I'm "}
              <span className="underline underline-offset-8 decoration-[var(--accent)] whitespace-nowrap">
                Fabien Lestrat
              </span>
            </h1>
            <p className=" my-8 md:mt-16">
              Based in the UK, {"I'm "}a web developer{" "}
              <br className="hidden md:inline lg:hidden" /> passionate{" "}
              <br className="hidden lg:inline" /> about building accessible web
              apps <br className="hidden md:inline" /> that users love.
            </p>
            <CustomButton />
          </div>
        </div>
        <Divider className=" mt-20 mb-10" />
        <ExperienceBox />
        <Divider className=" mt-8 mb-8 lg:hidden" />
        <ProjectsBox />
      </div>
    </main>
  );
}
