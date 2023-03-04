import React, { useState } from 'react';
import Link from 'next/link';


export default function Logo({ className }) {
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  const handleImageError = () => {
    setIsImageLoaded(false);
  };

  return (
    <Link href="/" className={className}>
      {isImageLoaded ? (
        <img src={'/images/ValleyLogoSVG.svg'} class="home-logo" alt="logo" onError={handleImageError} />
      ) : (
        <h2 style={{ fontSize: '3em' }}>Valley</h2>
      )}
    </Link>
  );
}
