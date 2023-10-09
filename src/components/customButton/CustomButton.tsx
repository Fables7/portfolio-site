interface CustomButtonProps {
  label?: string;
  onClick?: () => void;
}

const CustomButton = ({ label, onClick }: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="underline underline-offset-[10px] decoration-[var(--accent)] hover:text-[var(--accent)] h-12"
    >
      {label || "CONTACT ME"}
    </button>
  );
};

export default CustomButton;
