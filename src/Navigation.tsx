import { useState } from "react";
import Link from "./Link";

const Navigation = () => {
  const [isChange, setIsChange] = useState(true);
  const handleChange = () => setIsChange(!isChange);
  return (
    <nav className="menu-wrapper">
      <button
        className={isChange ? "menu-icon" : "menu-icon-hidden"}
        onClick={handleChange}
      ></button>
      <button
        className={isChange ? "menu-icon-close-hidden" : "menu-icon-close"}
        onClick={handleChange}
      ></button>
      <ul className={isChange ? "menu-block-hidden" : "menu-block"}>
        <li className="li">
          <Link href="/">Home</Link>
        </li>
        <li>Solutions</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navigation;
