"use client";
import { useState, useRef, useEffect } from "react";
import { CustomButton } from "..";
import clsx from "clsx";
import emailjs from "emailjs-com";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Form = () => {
  const [isMounted, setIsMounted] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

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

    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    if (!formState.name) {
      setNameError(true);
    }
    if (!formState.email || !/\S+@\S+\.\S+/.test(formState.email)) {
      setEmailError(true);
    }
    if (!formState.message) {
      setMessageError(true);
    }

    if (
      !formState.name ||
      !formState.email ||
      !formState.message ||
      !/\S+@\S+\.\S+/.test(formState.email)
    ) {
      return;
    }

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
            setFormState({
              name: "",
              email: "",
              message: "",
            });
            setEmailSent(true);
            setTimeout(() => {
              setEmailSent(false);
            }, 2499);
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
    "w-full bg-transparent  focus:outline-none px-8 border-b-2 border-[var(--gray)]   text-white placeholder-opacity-50 placeholder-[white] pb-3 box-border focus-within:border-[var(--accent)]";

  const messageClassName = clsx(rootClassName, "resize-y h-[100px]");
  return (
    <form
      onSubmit={onSubmitHandler}
      className="mt-8 flex flex-col w-full items-end  lg:mt-0 lg:w-[445px]"
      ref={form}
    >
      <div className="w-full flex flex-col items-end mb-6">
        <input
          type="text"
          name="name"
          placeholder="NAME"
          value={formState.name}
          onChange={handleInputChange}
          className={rootClassName}
          style={{ borderColor: nameError ? "var(--red)" : undefined }}
          onKeyDown={handleKeyPress}
        />
        {nameError && (
          <p className="text-[0.75rem] text-[var(--red)] mt-1">
            Please enter your name
          </p>
        )}
      </div>

      <div className="w-full flex flex-col items-end mb-6">
        <input
          type="email"
          name="email"
          placeholder="EMAIL"
          value={formState.email}
          onChange={handleInputChange}
          className={rootClassName}
          style={{ borderColor: emailError ? "var(--red)" : undefined }}
          onKeyDown={handleKeyPress}
        />
        {emailError && (
          <p className="text-[0.75rem] text-[var(--red)] mt-1">
            Sorry, invalid format here
          </p>
        )}
      </div>

      <div className="w-full flex flex-col items-end mb-6">
        <textarea
          name="message"
          placeholder="MESSAGE"
          value={formState.message}
          onChange={handleInputChange}
          className={messageClassName}
          style={{ borderColor: messageError ? "var(--red)" : undefined }}
          onKeyDown={handleKeyPress}
        />
        {messageError && (
          <p className="text-[0.75rem] text-[var(--red)] mt-1">
            Please provide a message
          </p>
        )}
      </div>

      <div className="flex">
        {emailSent && (
          <p className="mr-4 text-[var(--accent)] animate-fade-in-out">sent</p>
        )}
        <CustomButton label="SEND MESSAGE" type="submit" />
      </div>
    </form>
  );
};

export default Form;
