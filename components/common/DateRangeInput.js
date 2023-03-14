import React, { useState } from 'react';
import { DateRangePicker } from 'react-next-dates';
import 'react-next-dates/dist/style.css';
import { enUS } from 'date-fns/locale';

const DateRangeInput = () => {
  const [selectedDates, setSelectedDates] = useState({
    startDate: null,
    endDate: null,
  });
  const { startDate, endDate } = selectedDates;

  return (
    <div className="searchInputContainer">
      <div className="searchInputIcon"></div>
      <div className="searchInputField">
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={(date) =>
            setSelectedDates((prevState) => ({
              ...prevState,
              startDate: date,
            }))
          }
          onEndDateChange={(date) =>
            setSelectedDates((prevState) => ({
              ...prevState,
              endDate: date,
            }))
          }
          minimumDate={new Date()}
          locale={enUS}
          format="yyyy-MM-dd" // use a format string here
        >
          {({ startDateInputProps, endDateInputProps, focus }) => (
            <div className="date-range">
              <div className="date-input-wrapper">
                <label htmlFor="arriving">Arriving</label>
                <input
                  id="arriving"
                  className={`input${focus === 'startDate' ? ' -focused' : ''}`}
                  {...startDateInputProps}
                  placeholder="Arriving"
                />
              </div>
              <span className="date-separator">to</span>
              <div className="date-input-wrapper">
                <label htmlFor="departing">Departing</label>
                <input
                  id="departing"
                  className={`input${focus === 'endDate' ? ' -focused' : ''}`}
                  {...endDateInputProps}
                  placeholder="Departing"
                />
              </div>
            </div>
          )}
        </DateRangePicker>
      </div>
    </div>
  );
};

export default DateRangeInput;
