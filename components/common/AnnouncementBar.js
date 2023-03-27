import React from 'react';
import styles from './announcementbar.module.css';

function AnnouncementBar() {
  return (
    <div className={`${styles['announcement-bar']} ${styles['announcement-bar-bg']}`}>
      <p>Travel Using Crypto, Earn ETH By Listing Your Space, And Connect With Your Network Like Never Before. See How</p>
    </div>
  );
}

export default AnnouncementBar;
