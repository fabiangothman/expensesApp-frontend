import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ISiteHeader } from '../../../../interfaces/SiteHeader';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/20/solid';
// Styles
import './SiteHeader.css';

const SiteHeader: FC<ISiteHeader> = ({ primaryMenu }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="relative bg-white-50 p-4">
      <div className="max-w-screen-xl flex items-center mx-auto">
        <div className="flex-1">
          <Link to="/">
            <span><strong>Expenses</strong>App</span>
          </Link>
        </div>
        {/** Desktop */}
        <nav className="hidden md:block">
          <ul className="flex">
            {primaryMenu.map(({ link, label }, index) => (
              <li key={index} className="p-3">
                <Link to={link}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex flex-1 justify-end flex items-center gap-2.5">
          <div className="">
            <Link to="/login">Log in</Link>
          </div>
          <div className="">
            <Link to="/register">
              <div className="bg-black text-white p-2.5 rounded">
                <span>Sign in</span>
              </div>
            </Link>
          </div>
        </div>
        {/** Mobile */}
        <div className="block md:hidden w-6 pointer" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? (
            <XMarkIcon className="h-5 w-5 mx-auto" />
          ) : (
            <Bars3Icon className="h-6 w-6 mx-auto" />
          )}
        </div>
      </div>
      {/** Mobile */}
      <div className="block md:hidden">
        { showMobileMenu ? (
          <nav className="">
            <ul className="">
              {primaryMenu.map(({ link, label }, index) => (
                <li key={index} className="">
                  <Link to={link}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null }
      </div>
    </header>
  )
}

export default SiteHeader;
