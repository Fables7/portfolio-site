"use client";
import clsx from "clsx";

interface CustomButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
}

const scrollToFooter = () => {
  const footer = document.getElementById("footer");
  if (footer) {
    window.scrollTo({
      top: footer.offsetTop,
      behavior: "smooth",
    });
  }
};

const CustomButton = ({
  label,
  onClick = scrollToFooter,
  className,
  href,
  type,
}: CustomButtonProps) => {
  const rootClassName = clsx(
    "underline underline-offset-[10px] decoration-[var(--accent)] hover:text-[var(--accent)] w-fit",
    className
  );

  return (
    <>
      {href ? (
        <a target="_blank" className={rootClassName} href={href}>
          {label}
        </a>
      ) : (
        <button type={type} onClick={onClick} className={rootClassName}>
          {label || "CONTACT ME"}
        </button>
      )}
    </>
  );
};

export default CustomButton;
