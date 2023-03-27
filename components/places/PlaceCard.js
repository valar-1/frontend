import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ready } from '../../lib/cryptoConverter';

function PlaceCard({ title, stitle, usdPrice, image, titleUrl }) {
  // ... (rest of the code)

  return (
    <div className="place-card">
      <Link href={titleUrl} passHref>
        <div className="card-image-wrap">
          <div className="card-place-image">
            <img src={image} className="card-img-top" alt="Place" />
          </div>
        </div>
      </Link>
      <div className="card-content">
        <Link href={titleUrl} passHref>
          <div>
            <h4 className="card-title">{title}</h4>
            <p className="card-sub">{stitle}</p>
          </div>
        </Link>
        {/* ... (rest of the code) */}
      </div>
    </div>
  );
}

export default PlaceCard;
