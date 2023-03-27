import React from 'react';
import SearchInput from './SearchInput';

const SearchHero = ({ startDate, endDate }) => {
  return (
    <div className="container-fluid">
      <div className="search-bar-wrapper">
        <div className="searchBannerHeroText">
          <h2
            style={{
              color: '#fff',
              padding: '30px',
              maxWidth: '400px',
              fontWeight: '300',
              alignItems: 'left',
              lineHeight: '34px',
            }}
          >
            Travel using crypto, earn BTC and ETH by listing your space, and
            connect with your network like never before.
          </h2>
        </div>
        <SearchInput startDate={startDate} endDate={endDate} />
      </div>
    </div>
  );
};

export default SearchHero;
