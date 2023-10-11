interface ExperienceBoxProps {
  items: string[];
}

const ExperienceBox = ({ items }: ExperienceBoxProps) => {
  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:mb-12">
      {items.map((item, index) => {
        return (
          <div className="text-center mb-8 md:text-left" key={index}>
            <h2>{item}</h2>
            <p>2 Years Experience</p>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceBox;
