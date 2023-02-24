import Select from "react-select";
import { BsPeople, BsSearch } from 'react-icons/bs';
import { MdPeopleOutline } from 'react-icons/md';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';

import React, { useState, useEffect, useRef } from 'react';
import { DayPickerRangeController } from 'react-dates-gte-react-17-21.8.0-version-fixed';
import 'react-dates-gte-react-17-21.8.0-version-fixed/lib/css/_datepicker.css';

const locations = [
  { label: 'New York', value: 'ny' },
  { label: 'San Francisco', value: 'sf' },
  { label: 'Los Angeles', value: 'la' },
];

const categories = [
  { label: 'Stays', value: 'stays' },
  { label: 'Co-Work', value: 'cowork' },
  { label: 'Retreats', value: 'retreats' },
];

export default function SearchInput() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [datePickerRef]);

  const handleLocationChange = (selectedOption) => {
    setSelectedLocation(selectedOption);
  };

  const handleCategoryChange = (selectedOptions) => {
    setSelectedCategories(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="searchContainer">

      <div className="main-search-input-item">
          <div className="contact-form-action">
            <div className="form-group mb-0">
              <span className="form-icon">
                <MdPeopleOutline />
              </span>
              <input
                className="form-control"
                type="text"
                placeholder="People"
              />
            </div>
          </div>
        </div>

        <div className="searchDateField" ref={datePickerRef}>
            <div className="dateRangeContainer">
                <div className="dateRangeInput">
                <div
                    className={`dateRangePicker ${isOpen ? 'open' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="dateRangePickerInput">
                    <div className="dateRangeInputField">
                        {startDate && endDate
                        ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
                        : 'Pick dates'}
                    </div>
                    </div>
                </div>
                </div>
                {isOpen && (
                <div className="dateRangePickerContainer">
                    <DayPickerRangeController
                    startDate={startDate}
                    endDate={endDate}
                    onDatesChange={({ startDate, endDate }) => {
                        setStartDate(startDate);
                        setEndDate(endDate);
                    }}
                    focusedInput={focusedInput}
                    onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
                    numberOfMonths={2}
                    isOutsideRange={(day) => day.isBefore(new Date())}
                    />
                </div>
                )}
            </div>
        </div>


        <div className="searchLocationField">
          <Select
            value={selectedLocation}
            onChange={handleLocationChange}
            options={locations}
            placeholder="Select location"
          />
        </div>

       {/*  <div className="searchCategoryField">
          <Select
            isMulti
            value={selectedCategories}
            onChange={handleCategoryChange}
            options={categories}
            placeholder="Select categories"
          />
        </div> */}

        <div>
          <button className="searchInputBtn" type="submit">
            <BsSearch />
          </button>
        </div>
      </div>
    </form>
  );
}



