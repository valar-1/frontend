import React, { useState, useId } from 'react';
import Select from 'react-select';
import { MdLocationOn } from 'react-icons/md';


// Need to define options as a separate array and import it 
// to LocationSelect so we can reuse options in 
// multiple places 

const LocationSelect = ({ selectedLocation, handleLocationChange, icon }) => {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      alignContent: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: 30,
      color: state.isSelected ? '#fff' : '#666',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#fff' : '#f8f8f8',
      color: state.isSelected ? '#fff' : '#666',
    }),
    container: () => ({
      display: 'flex',
    }),
    valuesContainer: () => ({
      color: '#fff',
      padding: '0',
    }),
    singleValue: () => ({
    color: '#fff',
    marginLeft: '0',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: () => ({
      color: '#fff',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }),
    placeholder: () => ({
      color: '#fff',
    }),
    input: () => ({
      display: 'none',
    }),
    
  };

  return (
    <div className="searchInputControl">
     <div className="searchHeader">
      <div className="searchInputIcon">{icon} </div>
      <label htmlFor="location-select" className="searchInputLabel">
             Location
        </label>
      </div>
      <div className="searchInputField">
        <Select
          instanceId="locationSelect"
          key={process.browser ? "client-select" : "server-select"}
          value={selectedLocation}
          onChange={handleLocationChange}
          options={[
            { value: 'new-york', label: 'New York' },
            { value: 'los-angeles', label: 'Los Angeles' },
            { value: 'chicago', label: 'Chicago' },
            { value: 'houston', label: 'Houston' },
            { value: 'miami', label: 'Miami' },
          ]}
          placeholder="Where to?"
          styles={customStyles}
          aria-label="Location"
          aria-labelledby="location-input-select-label"
          isSearchable
          id="location-select"
        />
      </div>
    </div>
  );
};

export default LocationSelect;
