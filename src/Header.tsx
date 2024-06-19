import { useState } from 'react';
import Link from './Link';
import Navigation from './Navigation';

const Header = () => {
  const [activLink, setActivLink] = useState('home');
  const func = (newActiveLink) => setActivLink(newActiveLink);
  
  return (
    <header>
{/*       <div className="logo">
        <Link href="/">
          <img src="./img/outtrack.svg" alt="Logo" />
        </Link>
      </div> */}

      <Logo />
      <Navigation place={'header'} />
      
{/*       <nav className="sdfdsf">
        <ul className="ul">
          <li onClick={func} className="li">
            Home
          </li>
         <li>
            Solutions
          </li>
          <li>
            About
          </li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
