import { Form } from "..";

const Footer = () => {
  return (
    <footer>
      <h2 className="mb-2">Contact</h2>
      <p className="text-center">
        I would love to hear about your project and how I could help. Please
        fill in the form, and {"I'll"} get back to you as soon as possible
      </p>
      <Form />
    </footer>
  );
};

export default Footer;
