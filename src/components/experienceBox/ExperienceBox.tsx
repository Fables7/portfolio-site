interface ExperienceBoxProps {
  items: string[];
}

const ExperienceBox = ({ items }: ExperienceBoxProps) => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div className="text-center mb-8" key={index}>
            <h2>{item}</h2>
            <p>2 Years Experience</p>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceBox;
