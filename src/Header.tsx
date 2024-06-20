import Link from "./Link";
import Navigation from "./Navigation";

const Header = () => (
  <header>
    <div className="logo">
      <Link href="/">
        <img src="./img/outtrack.svg" alt="Logo" />
      </Link>
    </div>
    <Navigation />
  </header>
);

export default Header;
