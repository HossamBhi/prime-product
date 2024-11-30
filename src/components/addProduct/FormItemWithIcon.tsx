import { ReactNode } from "react";

const FormItemWithIcon = ({
  children,
  icon,
  className,
}: {
  children: ReactNode;
  icon: string;
  className?: HTMLDivElement["className"];
}) => {
  return (
    <div className={"flex flex-row gap-3 items-center " + className}>
      {icon && <img src={icon} className="size-[25px]" />}
      {children}
    </div>
  );
};

export default FormItemWithIcon;
