import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const icons = [
  { link: "https://github.com/Fables7", icon: faGithub },
  {
    link: "https://www.linkedin.com/in/fabien-lestrat-1ab41b1b1/",
    icon: faLinkedin,
  },
];

const SocialsBox = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="">Fabien Lestrat</h3>
      <div className="flex justify-between w-[100px] mt-4">
        {icons.map((icon, index) => {
          return (
            <a target="_blank" key={index} href={icon.link}>
              <FontAwesomeIcon
                className=" w-7 hover:text-[var(--accent)]"
                icon={icon.icon}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialsBox;
