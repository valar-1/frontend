import React, { useState } from 'react';
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
          inputId="people-input-select"
          value={null}
          placeholder="People"
          onFocus={handleSelectFocus}
          className="peopleSelectInput"
          styles={{
            control: (provided, state) => ({
              ...provided,
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: '14px',
              width: '100%',
              height: '42px',
              marginLeft: '10px'
            }),
            indicatorSeparator: (provided, state) => ({
              ...provided,
              display: 'none'
            }),
            dropdownIndicator: (provided, state) => ({
              ...provided,
              color: '#787878',
              fontSize: '16px'
            }),
            menu: (provided, state) => ({
              ...provided,
              marginTop: '0px'
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
      <div className="searchInputField">
        {renderInput()}
      </div>
    </div>
  );
};

export default PeopleInput;
