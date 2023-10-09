import clsx from "clsx";

interface CustomButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

const CustomButton = ({ label, onClick, className }: CustomButtonProps) => {
  const rootClassName = clsx(
    "underline underline-offset-[10px] decoration-[var(--accent)] hover:text-[var(--accent)] h-12",
    className
  );
  return (
    <button onClick={onClick} className={rootClassName}>
      {label || "CONTACT ME"}
    </button>
  );
};

export default CustomButton;
