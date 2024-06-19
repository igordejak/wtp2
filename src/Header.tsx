import Link from './Link';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link href="/">
          <img src="./img/outtrack.svg" alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            Home
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;
