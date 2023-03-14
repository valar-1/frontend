import React, { useState } from 'react';
import Select from 'react-select';
import DateRangeInput from './DateRangeInput';
import LocationSelect from './LocationSelect';
import PeopleInput from './PeopleInput';
import { FaSearch, FaUsers, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const SearchInput = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedCount, setSelectedCount] = useState(1);
  const [focusedInput, setFocusedInput] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
          <PeopleInput selectedCount={selectedCount} setSelectedCount={setSelectedCount} icon={<FaUsers />} />
        </div>
        <div className="searchInputContainer">
          <DateRangeInput
            startDate={startDate}
            endDate={endDate}
            onDatesChange={handleDateChange}
            focusedInput={focusedInput}
            onFocusChange={handleFocusChange}
            icon={<FaCalendarAlt />}
          />
        </div>
        <div className="searchInputContainer">
          <LocationSelect selectedLocation={selectedLocation} handleLocationChange={handleLocationChange} icon={<FaMapMarkerAlt />} />
        </div>
        <button type="submit" className="searchInputBtn">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
