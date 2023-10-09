"use client";
import { useState } from "react";
import { CustomButton } from "..";
import clsx from "clsx";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Form = () => {
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
    console.log("form submitted");
  };
  const rootClassName =
    "w-full bg-transparent focus:outline-none px-8 border-b-2 border-white mb-4 text-white placeholder-opacity-50 placeholder-[white] pb-3 box-border focus-within:border-[var(--accent)]";

  const messageClassName = clsx(rootClassName, "resize-y h-[100px]");
  return (
    <form onSubmit={onSubmitHandler} className="mt-8">
      <input
        type="text"
        name="name"
        placeholder="NAME"
        value={formState.name}
        onChange={handleInputChange}
        className={rootClassName}
      />
      <input
        type="email"
        name="email"
        placeholder="EMAIL"
        value={formState.email}
        onChange={handleInputChange}
        className={rootClassName}
      />
      <textarea
        name="message"
        placeholder="MESSAGE"
        value={formState.message}
        onChange={handleInputChange}
        className={messageClassName}
      />
      <CustomButton label="SEND MESSAGE" type="submit" />
    </form>
  );
};

export default Form;
