import React, { useEffect, useState } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Navigation from './common/Navigation';

const Layout = ({ children }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const res = await fetch('/api/pages');
        const data = await res.json();
        setPages(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPages();
  }, []);

  return (
    <>
      <Navigation />
      <Header pages={pages} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
