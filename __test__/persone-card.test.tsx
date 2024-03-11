/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For additional matchers
import { PeopleCard } from '@/components/people/people-card/people-card';

describe('PeopleCard', () => {
  test('renders correctly with person data', () => {
    const person = {
      name: 'Test Person',
      gender: 'male',
      birth_year: '1980',
      height: '180',
      mass: '70',
      films: [],
      hair_color: "",
      skin_color: "",
      eye_color: "",
      homeworld: "",
      starships: []
    };

    const { getByText, getByAltText } = render(<PeopleCard person={person} />);

    expect(getByText('Test Person')).toBeInTheDocument();
    // expect(getByText('Gender: male')).toBeInTheDocument();
    // expect(getByText('Birth Year: 1980')).toBeInTheDocument();
    // expect(getByText('Height: 180')).toBeInTheDocument();
    // expect(getByText('Mass: 70')).toBeInTheDocument();
    // expect(getByText('Quantity Films: 0')).toBeInTheDocument(); // Assuming films array is empty
    // expect(getByText('Quantity Starships: 0')).toBeInTheDocument(); // Assuming starships array is empty
    // expect(getByAltText('Test Person')).toBeInTheDocument(); // Avatar should have alt text with person's name
  });

  // test('applies hover effect on mouse over', () => {
  //   const person = {
  //     name: 'Test Person',
  //     gender: 'male',
  //     birth_year: '1980',
  //     height: '180',
  //     mass: '70',
  //     films: [],
  //     starships: []
  //   };

  //   const { getByTestId } = render(<PeopleCard person={person} />);
  //   const card = getByTestId('people-card');

  //   fireEvent.mouseOver(card);

  //   expect(card).toHaveStyle('transform: scale(1.02)');
  // });

  // test('navigates to correct link on click', () => {
  //   const person = {
  //     name: 'Test Person',
  //     gender: 'male',
  //     birth_year: '1980',
  //     height: '180',
  //     mass: '70',
  //     films: [],
  //     starships: [],
  //     url: '/people/1' // Assuming this is the URL generated for this person
  //   };

  //   const { getByText } = render(<PeopleCard person={person} />);
  //   const card = getByText('Test Person').closest('a');

  //   expect(card).toHaveAttribute('href', '/people/1');
  // });
});
