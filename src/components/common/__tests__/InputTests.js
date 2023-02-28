import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PeopleInput from '../PeopleInput';

describe('PeopleInput', () => {
  it('should update the value when valid input is entered', () => {
    const { getByPlaceholderText } = render(<PeopleInput />);
    const inputField = getByPlaceholderText('People');

    fireEvent.change(inputField, { target: { value: '10' } });
    expect(inputField.value).toBe('10');
  });

  it('should not update the value when invalid input is entered', () => {
    const { getByPlaceholderText } = render(<PeopleInput />);
    const inputField = getByPlaceholderText('People');

    fireEvent.change(inputField, { target: { value: 'abc' } });
    expect(inputField.value).toBe('');
  });
});
