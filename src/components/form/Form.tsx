import { CustomButton } from "..";

const Form = () => {
  return (
    <form>
      <input type="text" placeholder="NAME" />
      <input type="email" placeholder="EMAIL" />
      <input type="text" placeholder="Name" />
      <CustomButton label="SEND" />
    </form>
  );
};

export default Form;
