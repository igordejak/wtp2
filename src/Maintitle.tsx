import { ReactNode } from "react";

interface IProps {
  icon: string;
  children: ReactNode;
}

const Maintitle = ({ icon, children }: IProps) => (
  <div className="type-title">
      <img src={icon}></img>{children}
    </div>
);

export default Maintitle;
