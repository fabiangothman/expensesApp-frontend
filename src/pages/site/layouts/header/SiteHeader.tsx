import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ISiteHeader } from '../../../../interfaces/SiteHeader';
// Styles
import './SiteHeader.css';

const SiteHeader: FC<ISiteHeader> = ({ primaryMenu }) => {

  return (
    <header className="relative p-4 bg-white-50">
      <nav>
        <ul>
          {primaryMenu.map(({ link, label }, index) => (
            <li key={index}>
              <Link to={link}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default SiteHeader;
