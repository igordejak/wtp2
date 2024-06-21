import Link from "./Link";
import Navigation from "./Navigation";

const Header = () => (
  <header>
    <div className="header-wrapper">
      <div className="logo-nav">
        <div className="logo">
          <Link href="/">
            <img src="./img/outtrack.svg" alt="Logo" />
          </Link>
        </div>
        <Navigation />
      </div>
    </div>
  </header>
);

export default Header;
