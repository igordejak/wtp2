import Link from "./Link";

const Navigation = () => (
  <nav className="menu-wrapper">
    <button id="menu-icon">
    </button>
    <ul className="ul">
      <li className="li">
        <Link href="/">Home</Link>
      </li>
      <li>Solutions</li>
      <li>About</li>
    </ul>
  </nav>
);

export default Navigation;
