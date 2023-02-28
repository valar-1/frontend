import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './announcementbar.css';

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <p>Travel Using Crypto, Earn ETH By Listing Your Space, And Connect With Your Network Like Never Before. See How</p>
      <button className="announcement-bar-button"><FiArrowRight /></button>
    </div>
  );
}

export default AnnouncementBar;
