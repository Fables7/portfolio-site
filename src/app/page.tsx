import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const icons = [
  { link: "", icon: faGithub },
  {
    link: "https://www.linkedin.com/in/fabien-lestrat-1ab41b1b1/",
    icon: faLinkedin,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center border-2 border-red-500  p-4 box-border">
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
          className=""
          src="/profile.jpeg"
          alt="profile"
          width={100}
          height={100}
          style={{ width: "auto" }}
        />
        <div>
          <h1 className=" text-center">Nice to meet you!</h1>
          <h1 className=" text-center ">
            {"I'm "}
            <span className="underline underline-offset-8 decoration-[var(--accent)]">
              Fabien Lestrat
            </span>
          </h1>
          <p className=" text-center mt-8">
            Based in the UK, I'm a web developer passionate about building
            accessible web apps that users love.
          </p>
        </div>
      </div>
    </main>
  );
}
