import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import sectiondata from '../../store/store';

export default function Navbar() {
  return (
    <div className="main-menu-content">
      <nav>
        <ul>
          {sectiondata.headermenu.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>
                {item.title} {item.dropdown ? <FiChevronDown /> : ''}
              </Link>
              {item.dropdown && (
                <ul className="dropdown-menu-item">
                  {item.dropdown.map((ditem, index2) => (
                    <li key={index2}>
                      <Link to={ditem.path}>{ditem.title}</Link>
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
