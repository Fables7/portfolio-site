"use client";
import { useState, useRef } from "react";
import { CustomButton } from "..";
import clsx from "clsx";
import emailjs from "emailjs-com";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY || ""
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    console.log("form submitted");
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && e.target instanceof HTMLInputElement) {
      e.preventDefault();
    }
  };

  const rootClassName =
    "w-full bg-transparent focus:outline-none px-8 border-b-2 border-white mb-4 text-white placeholder-opacity-50 placeholder-[white] pb-3 box-border focus-within:border-[var(--accent)]";

  const messageClassName = clsx(rootClassName, "resize-y h-[100px]");
  return (
    <form
      onSubmit={onSubmitHandler}
      className="mt-8 flex flex-col w-full items-end"
      ref={form}
    >
      <input
        type="text"
        name="name"
        placeholder="NAME"
        value={formState.name}
        onChange={handleInputChange}
        className={rootClassName}
        onKeyDown={handleKeyPress}
      />
      <input
        type="email"
        name="email"
        placeholder="EMAIL"
        value={formState.email}
        onChange={handleInputChange}
        className={rootClassName}
        onKeyDown={handleKeyPress}
      />
      <textarea
        name="message"
        placeholder="MESSAGE"
        value={formState.message}
        onChange={handleInputChange}
        className={messageClassName}
        onKeyDown={handleKeyPress}
      />
      <CustomButton label="SEND MESSAGE" type="submit" />
    </form>
  );
};

export default Form;
