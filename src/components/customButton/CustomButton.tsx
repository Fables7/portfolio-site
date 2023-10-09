import clsx from "clsx";

interface CustomButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const CustomButton = ({
  label,
  onClick,
  className,
  href,
}: CustomButtonProps) => {
  const rootClassName = clsx(
    "underline underline-offset-[10px] decoration-[var(--accent)] hover:text-[var(--accent)] w-fit",
    className
  );
  return (
    <>
      {href ? (
        <a className={rootClassName} href={href}>
          {label}
        </a>
      ) : (
        <button onClick={onClick} className={rootClassName}>
          {label || "CONTACT ME"}
        </button>
      )}
    </>
  );
};

export default CustomButton;
