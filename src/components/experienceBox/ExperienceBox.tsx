import { experiences } from "@/constants";

const ExperienceBox = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:mb-12">
      {experiences.map((item, index) => {
        return (
          <div className="text-center mb-8 md:text-left" key={index}>
            <h2>{item.skill}</h2>
            <p>{item.years} Years Experience</p>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceBox;
