import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';
import sectiondata from '../../data/store';

export default function Navbar() {
  return (
    <div className="main-menu-content">
      <nav>
        <ul>
          {sectiondata.headermenu.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>
                {item.title} {item.dropdown ? <FiChevronDown /> : ''}
              </Link>
              {item.dropdown && (
                <ul className="dropdown-menu-item">
                  {item.dropdown.map((ditem, index2) => (
                    <li key={index2}>
                      <Link href={ditem.path}>{ditem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
