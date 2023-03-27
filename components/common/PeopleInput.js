import React from 'react';

const PeopleInput = ({ selectedCount, setSelectedCount, icon }) => {
  const handleNumberFormatChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      let enteredValue = parseInt(value, 10);
      if (enteredValue < 1) {
        enteredValue = 1;
      }
      if (enteredValue > 50) {
        enteredValue = 50;
      }
      setSelectedCount(enteredValue);
    }
  };

  const handleDecrementClick = () => {
    setSelectedCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const handleIncrementClick = () => {
    setSelectedCount((prevCount) => Math.min(prevCount + 1, 50));
  };

  return (
    <div className="searchInputControl">
      <div className="searchHeader">
      <div className="searchInputIcon">{icon}
      </div>
      <label htmlFor="guests"> Guests</label>
      </div>
      <div className="searchInputField">
        <input
          type="number"
          min="1"
          max="50"

          value={selectedCount}
          onChange={handleNumberFormatChange}
          className="peopleNumericInput"
          id="guest-count-input"
          aria-label="Guest Count"
          aria-describedby="guest-count-input-description"
        />
        <div className="increment-decrement-buttons">
          <button
            type="button"
            onClick={handleDecrementClick}
            aria-label="Decrement"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M12 7H4v2h8V7z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleIncrementClick}
            aria-label="Increment"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M8 4V0H7v4H3v1h4v4h1V5h4V4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeopleInput;












/* 


import React, { useState, useId } from 'react';
import Select from 'react-select';
import { NumericFormat } from 'react-number-format';

const PeopleInput = ({ selectedCount, setSelectedCount, icon }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSelectFocus = () => {
    setIsFocused(true);
  };

  const handleNumberFormatBlur = (values) => {
    const { value } = values;
    if (value === '1') {
      setIsFocused(false);
    }
  };

  const handleNumberFormatChange = (values) => {
    const { value } = values;
    if (!isNaN(value)) {
      let enteredValue = parseInt(value, 10);
      if (enteredValue < 1) {
        enteredValue = 1;
      }
      if (enteredValue > 50) {
        enteredValue = 50;
      }
      setSelectedCount(enteredValue);
    }
  };

  const renderInput = () => {
    if (isFocused) {
      return (
        <NumericFormat
          value="1"
          allowLeadingZeros={false}
          thousandSeparator={false}
          isnumericstring= "true"
          format="##########"
          onBlur={handleNumberFormatBlur}
          onValueChange={handleNumberFormatChange}
          className="peopleNumericInput"
          inputMode="numeric"
          pattern="[0-9]*"
          aria-controls="people-input-select"
          aria-label="People"
          aria-valuemin="1"
          aria-valuemax="50"
          aria-valuenow={selectedCount}
        />
      );
    } else {
      return (
        <Select
          instanceId="guestCount"
          key={process.browser ? "client-select" : "server-select"}
          inputId="people-input-select"
          value={null}
          placeholder="How many?"
          onFocus={handleSelectFocus}
          className="peopleSelectInput"
          styles={{
            control: (provided, state) => ({
              ...provided,
              backgroundColor: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '14px',
              width: '100%',
              height: '42px',
              marginLeft: '10px'
            }),
            form: (provided,state) =>({
              color: '#fff',
              backgroundColor: 'transparent'
            }),
            input: (provided, state) => ({
              ...provided,
              backgroundColor: 'transparent',
              border: 'none',
              color: '#fff',
            }),
            indicatorSeparator: (provided, state) => ({
              ...provided,
              display: 'none'
            }),
            placeholder: (provided, state) => ({
              ...provided,
               color: '#fff',
            }),
            dropdownIndicator: (provided, state) => ({
              ...provided,
              color: '#787878',
              fontSize: '16px',
              display: 'none'
            }),
            menu: (provided, state) => ({
              ...provided,
              marginTop: '0px',
            backgroundColor: 'transparent',
            color: '#fff'
            })
          }}
          aria-label="People"
          aria-labelledby="people-input-select-label"
          aria-controls="people-input-select"
          isSearchable={false}
        />
      );
    }
  };

  return (
    <div className="searchInputContainer">
      <div className="searchInputIcon">
        {icon}
      </div>
      <label htmlFor="guests">Guests</label>
      <div className="searchInputField">
        {renderInput()}
      </div>
    </div>
  );
};

export default PeopleInput;
 */