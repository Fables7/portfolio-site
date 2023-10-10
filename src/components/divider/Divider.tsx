import clsx from "clsx";

const Divider = ({ className }: { className?: string }) => {
  const rootClassName = clsx("w-full h-[1px] bg-white", className);
  return <div className={rootClassName} />;
};

export default Divider;
