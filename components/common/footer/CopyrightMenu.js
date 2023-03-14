import React from 'react';
import FooterLeftWidget from './FooterLeftWidget';
import sectiondata from '../../../data/store';
import Link from 'next/link';

function CopyrightMenu({ copyrightright }) {
  return (
    <>
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
        <div>
          <FooterLeftWidget Footerleftcnts={sectiondata.Footerdata} />
        </div>
      </div>
    </>
  );
}

export default CopyrightMenu;
