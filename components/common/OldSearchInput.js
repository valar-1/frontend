// SearchInput.js

import React, { useState } from 'react';
import Select from 'react-select';
/* We need this forked version of the react-dates library as react-dates hasn't been updated since 2020 and is incompatible with React 17 */
/* import { DateRangePicker } from 'react-dates'; 
import 'react-dates/lib/css/_datepicker.css'; */
import { DateRangePicker} from 'react-dates-gte-react-17-21.8.0-version-fixed';
import 'react-dates-gte-react-17-21.8.0-version-fixed/lib/css/_datepicker.css';
import { FaSearch } from 'react-icons/fa';
import NumberFormat from 'react-number-format';

const locations = [
  { label: 'New York', value: 'ny' },
  { label: 'San Francisco', value: 'sf' },
  { label: 'Los Angeles', value: 'la' },
];

const selectStyles = {
  control: (provided) => ({
    ...provided,
    height: 38,
    border: 'none',
    boxShadow: 'none',
    fontSize: 15,
    color: '#1E2329',
    fontFamily: 'Inter, Arial, Helvetica, sans-serif',
  }),
  input: (provided) => ({
    ...provided,
    margin: 0,
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: 38,
    padding: '0 6px',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: 38,
  }),
};

const classNamePrefix = 'react_select_searchInput__';

const LocationSelect = ({ selectedLocation, handleLocationChange }) => (
  <Select
    className={`${classNamePrefix}searchLocationField`}
    value={selectedLocation}
    onChange={handleLocationChange}
    options={locations}
    placeholder="Location"
    styles={selectStyles}
  />
);

const DateRangeInput = ({ startDate, endDate, onDatesChange, focusedInput, onFocusChange }) => {
  const startDateId = "start_date_input";
  const endDateId = "end_date_input";
  
  return (
    <DateRangePicker
      startDate={startDate}
      startDateId={startDateId}
      endDate={endDate}
      endDateId={endDateId}
      onDatesChange={onDatesChange}
      focusedInput={focusedInput}
      onFocusChange={onFocusChange}
      numberOfMonths={2}
      isOutsideRange={(day) => day.isBefore(new Date())}
    />
  );
};


const SearchInput = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleLocationChange = (selectedOption) => {
    setSelectedLocation(selectedOption);
  };

  const handleDateChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const handleFocusChange = (focusedInput) => {
    setFocusedInput(focusedInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <form id="searchForm" onSubmit={handleSubmit}>
      <div className="searchContainer">
        <div className="searchInputContainer">
          <div className="searchInputIcon">
            <i className="fas fa-users" />
          </div>
          <div className="searchInputField">
            <input type="text" placeholder="People" className="form-control" />
          </div>
        </div>
        <div className="searchInputContainer">
          <div className="searchInputIcon">
            <i className="far fa-calendar-alt" />
          </div>
          <div className="searchInputField">
            <DateRangeInput
              startDate={startDate}
              endDate={endDate}
              onDatesChange={handleDateChange}
              focusedInput={focusedInput}
              onFocusChange={handleFocusChange}
            />
          </div>
        </div>
        <div className="searchInputContainer">
          <LocationSelect selectedLocation={selectedLocation} handleLocationChange={handleLocationChange} />
        </div>
        <button type="submit" className="searchInputBtn">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};


export default SearchInput;
