import React from 'react';
import Select from 'react-select';
import { MdLocationOn } from 'react-icons/md';

const LocationSelect = ({ selectedLocation, handleLocationChange, icon }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      height: 42,
      width: '100%',
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: 14,
      marginLeft: 10,
      color: state.isSelected ? '#000' : '#666',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#fff' : '#f8f8f8',
      color: state.isSelected ? '#000' : '#666',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: () => ({
      color: '#666',
    }),
  };

  return (
    <div className="searchInputContainer">
      <div className="searchInputIcon">
        {icon}
      </div>
      <div className="searchInputField">
        <Select
          value={selectedLocation}
          onChange={handleLocationChange}
          options={[
            { value: 'new-york', label: 'New York' },
            { value: 'los-angeles', label: 'Los Angeles' },
            { value: 'chicago', label: 'Chicago' },
            { value: 'houston', label: 'Houston' },
            { value: 'miami', label: 'Miami' },
          ]}
          placeholder="Location"
          styles={customStyles}
          aria-label="Location"
          aria-labelledby="location-input-select-label"
          isSearchable
        />
      </div>
    </div>
  );
};

export default LocationSelect;
