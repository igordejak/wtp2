import { ReactNode } from "react";

interface IProps {
  icon: string;
  title: ReactNode;
}

const Maintitle = ({ icon, title }: IProps) => (
  <div className="type-title">
      <img src={icon}></img>{title}
    </div>
);

export default Maintitle;
