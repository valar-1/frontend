import React, { useState } from 'react';
import SearchInput from './SearchInput';
import SignInButton from '../other/account/SignInButton';
import Logo from './Logo';
import logosrc from '../../public/images/logo.png';
import Link from 'next/link';


function getPages() {
  const pagesDirectory = path.join(process.cwd(), 'pages');
  const files = fs.readdirSync(pagesDirectory);
  return files.filter(file => file.endsWith('.js') && file !== 'index.js').map(file => file.replace('.js', ''));
}

function HeaderMenu({ pages }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav>
      <ul>
        <li onClick={toggleDropdownVisibility}>
          Pages
          {isDropdownVisible && (
            <div className="dropdown-menu">
              {pages.map((page) => (
                <Link key={page} href={`/${page}`}>
                  <span className="dropdown-item">{page}</span>
                </Link>
              ))}
            </div>
          )}
        </li>
      </ul>
      <style jsx>{`
        .dropdown-menu {
          display: flex;
          flex-direction: column;
          position: absolute;
          background-color: darkgrey;
          padding: 1rem;
          border-radius: 5px;
        }
        .dropdown-item {
          color: white;
          text-decoration: none;
          padding: 0.5rem 1rem;
        }
        .dropdown-item:hover {
          background-color: rgba(255, 255, 255, 0.1);
          cursor: pointer;
        }
      `}</style>
    </nav>
  );
}


export default function Header({ pages }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <header className="header-area">
      <div className="fluid-80pxPadding-container">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Logo */}
          <div className="logo">
            <Logo url={logosrc} />
          </div>
          <div>
                  {/* Menu */}
            <HeaderMenu pages={pages} />
          </div>
          {/* Connect Wallet */}
          <div style={{ marginLeft: 'auto' }}>
            <SignInButton />
          </div>
        </div>
        {/* Search Bar */}
        <div className="search-bar-wrapper">
          <div className="searchBannerHeroText">
            <h2 style={{ color: '#fff', padding: '30px', maxWidth: '400px', fontWeight: '300', alignItems: 'left', lineHeight: '34px' }}>
              Travel using crypto, earn BTC and ETH by listing your space, and connect with your network like never before.
            </h2>
          </div>
          <SearchInput startDate={startDate} endDate={endDate} />
        </div>
      </div>
    </header>
  );
}

export async function getStaticPaths() {
  const pagesDirectory = path.join(process.cwd(), 'pages');
  const filenames = fs.readdirSync(pagesDirectory);
  const pages = filenames.filter((filename) => filename.endsWith('.js') && filename !== 'index.js');
  const paths = pages.map((page) => ({
    params: {
      page: page.replace('.js', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getServerSideProps(context) {
  const pages = getPages();
  return {
    props: {
      pages,
    },
  };
}
