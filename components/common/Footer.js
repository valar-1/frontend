import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <section className="Footer-area">
        <div className="container-fluid">
          <div className="row">
                          <div className="footer-content d-flex align-items-center justify-content-between flex-wrap">
                <p className="footer-text">
                  &copy; Copyright Hyboria Inc. 2023
                </p>

                <ul className="footer-links">
                  <li>
                    <Link href="#">
                      <p>Privacy</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p>Terms</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p>Site Map</p>
                    </Link>
                  </li>
                </ul>

                <div className="select-fields">
                  <div className="select-field">
                    <select name="language" id="language-switch">
                      <option value="en">English</option>
                      <option value="es">Español</option>
                    </select>
                  </div>
                  <div className="select-field">
                    <select name="currency" id="currency-switch">
                      <option value="usd">USD</option>
                      <option value="eur">EUR</option>
                    </select>
                  </div>
                </div>
              </div>
                      </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
