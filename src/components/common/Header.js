import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import SearchInput from './SearchInput';
import HeaderAuthorAccess from '../other/account/HeaderAuthorAccess';
import Logo from './Logo';
import logosrc from '../../assets/images/logo.png';

export default function Header() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  ;

  return (
    <header className="header-area">
        <div className="fluid-80pxPadding-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row align-items-center">
                <div className="col-lg-2">
                  {/* Logo */}
                  <div className="logo">
                    <Logo url={logosrc} />
                  </div>
                </div>
                <div className="col-lg-6">
                  {/* Search Bar */}
                  <div className="search-bar-wrapper">
                    <SearchInput startDate={startDate} endDate={endDate} />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="navlinks-login-container">
                    {/* Navbar */}
                    <Navbar />
                    <div className="login-dropdown-container">
                      {/* Author Access */}
                      <HeaderAuthorAccess />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
}
