import React from 'react';
import sectiondata from '../../../data/store';
import Link from 'next/link';

function Footer() {
  const copyrightright = sectiondata.Footerdata.copyright;

  return (
    <>
      <section className="Footer-area">
        <div className="container">
          {/* Copyright */}
          <div className="row">
            <div className="col-lg-12">
              <div className="copy-right margin-top-50px padding-top-60px">
                <p className="copy__desc">
                  &copy; Copyright Hyboria Inc. 2023
                </p>

                <div className="copyright-right-side justify-content-end d-flex align-items-center">
                  <ul className="list-items">
                    {copyrightright.menus.map((link, index) => (
                      <li key={index}>
                        <Link href={link.path}>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="select-field">
                    <select name="language" id="language-switch">
                      {copyrightright.languages.map((item, i) => (
                        <option value={i} key={i}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="select-field">
                    <select name="currency" id="currency-switch">
                      {copyrightright.currency.map((item, i) => (
                        <option value={i} key={i}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
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
