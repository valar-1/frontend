import React from 'react';
import Link from 'next/link';
import styles from './navigation.module.css';

function Navigation() {
  return (
    <nav className={styles['navigation-bar']}>
      <ul className={styles['nav-list']}>
        <li>
          <Link href="/">
            <p className={styles['nav-link']}>Stays</p>
          </Link>
        </li>
        <li>
          <Link href="/category1">
            <p className={styles['nav-link']}>Co-Work</p>
          </Link>
        </li>
        <li>
          <Link href="/category2">
            <p className={styles['nav-link']}>Retreats</p>
          </Link>
        </li>
        <li>
          <Link href="/category2">
            <p className={styles['nav-link']}>Networks</p>
          </Link>
        </li>
        <li>
          <Link href="/category2">
            <p className={styles['nav-link']}>Events</p>
          </Link>
        </li>
        {/* Add more categories as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;
