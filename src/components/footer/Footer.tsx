import { Form, Divider, SocialsBox } from "..";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="md:w-[445px] flex flex-col items-center">
        <h2 className="mb-2">Contact</h2>
        <p className="text-center">
          I would love to hear about your project and how I could help. Please
          fill in the form, and {"I'll"} get back to you as soon as possible
        </p>
        <Form />
      </div>
      <Divider className="mt-24 mb-10" />
      <SocialsBox />
    </footer>
  );
};

export default Footer;
