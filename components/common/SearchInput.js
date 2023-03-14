import React, { useState } from 'react';
import Select from 'react-select';
import DateRangeInput from './DateRangeInput';
import LocationSelect from './LocationSelect';
import PeopleInput from './PeopleInput';
import { FaSearch, FaUsers, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const SearchInput = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedCount, setSelectedCount] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleLocationChange = (selectedOption) => {
    setSelectedLocation(selectedOption);
  };

  const handleCountChange = (value) => {
    setSelectedCount(value);
  };

  const handleStartDateChange = (value) => {
    setStartDate(value);
  };

  const handleEndDateChange = (value) => {
    setEndDate(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div className="searchBanner">
      <form id="searchForm" onSubmit={handleSubmit}>
        <div className="searchContainer">
          
          <div className="searchInputContainer">
            <LocationSelect selectedLocation={selectedLocation} handleLocationChange={handleLocationChange} icon={<FaMapMarkerAlt />} />
          </div>

          <div className="searchInputContainer">
            <DateRangeInput
              startDate={startDate}
              endDate={endDate}
              onStartDateChange={handleStartDateChange}
              onEndDateChange={handleEndDateChange}
              icon={<FaCalendarAlt />}
            />
          </div>

          <div className="searchInputContainer">
            <PeopleInput selectedCount={selectedCount} setSelectedCount={handleCountChange} icon={<FaUsers />} />
          </div>

          <button type="submit" className="searchInputBtn">
            <FaSearch /> <span className="searchInputBtnText">Search</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
