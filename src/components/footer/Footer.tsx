import { Form, Divider, SocialsBox } from "..";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="w-full flex flex-col items-center lg:max-w-[1110px] xl:px-0 px-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="lg:hidden">Contact</h2>
          <h1 className="hidden lg:inline">Contact</h1>
          <p className="text-center lg:text-left mt-2 lg:mt-8 lg:w-[450px] ">
            I would love to hear about your project and how I could help. Please
            fill in the form, and {"I'll"} get back to you as soon as possible
          </p>
        </div>
        <Form />
      </div>

      <div className="w-full mt-24 lg:max-w-[1110px] xl:px-0 px-10">
        <Divider className="mb-10 " />
        <SocialsBox />
      </div>
    </footer>
  );
};

export default Footer;
