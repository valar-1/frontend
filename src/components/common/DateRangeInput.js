import React from 'react';
import { DateRangePicker } from 'react-dates-gte-react-17-21.8.0-version-fixed';
import 'react-dates-gte-react-17-21.8.0-version-fixed/lib/css/_datepicker.css';

const DateRangeInput = ({ startDate, endDate, onDatesChange, focusedInput, onFocusChange, icon }) => {
  const startDateId = "start_date_input";
  const endDateId = "end_date_input";
  
  return (
    <div className="searchInputContainer">
      <div className="searchInputIcon">
        {icon}
      </div>
      <div className="searchInputField">
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
      </div>
    </div>
  );
};

export default DateRangeInput;
