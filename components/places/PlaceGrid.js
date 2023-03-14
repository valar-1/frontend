import React from 'react';
import PlaceCard from './PlaceCard';
import converter from '/lib/cryptoConverter';

function PlaceGrid({ griditems }) {
  return (
    <div className="placegrid">
      {griditems.map((item, index) => (
        <div className="place-col" key={index}>
          <PlaceCard {...item} converter={converter} />
        </div>
      ))}
    </div>
  );
}

export default PlaceGrid;
