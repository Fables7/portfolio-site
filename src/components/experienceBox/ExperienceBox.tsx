// const experienceItems = ["HTML", "CSS", "JavaScript", "Accessibility", "React"];
const experienceItems = [
  { skill: "HTML", years: 3 },
  { skill: "CSS", years: 3 },
  { skill: "HTML", years: 3 },
  { skill: "JavaScript", years: 3 },
  { skill: "TypeScript", years: 3 },
  { skill: "React", years: 3 },
  { skill: "React-Native", years: 3 },
  { skill: "Node.js", years: 2 },
  { skill: "MongoDB", years: 2 },
  { skill: "Solidity", years: 1 },
  { skill: "SQL", years: 1 },
];

const ExperienceBox = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:mb-12">
      {experienceItems.map((item, index) => {
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
