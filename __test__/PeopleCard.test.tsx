import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PeopleCard } from '@/components/people/PeopleCard/PeopleCard';
import { getIndexFromUrl } from '@/utils/getIndexFromUrl.util';
import { mockPerson } from './data.mock';


describe('PeopleCard', () => {

  test('renders correctly with person data', () => {
    const { getByText } = render(<PeopleCard person={mockPerson} />);

    expect(getByText(mockPerson.name)).toBeInTheDocument();

    //check additional info
    expect(getByText('Gender:', { trim: true }).nextSibling?.textContent).toBe(mockPerson.gender);
    expect(getByText('Birth Year:', { trim: true }).nextSibling?.textContent).toBe(mockPerson.birth_year);
    expect(getByText('Height:', { trim: true }).nextSibling?.textContent).toBe(mockPerson.height);
    expect(getByText('Mass:', { trim: true }).nextSibling?.textContent).toBe(mockPerson.mass);
    expect(getByText('Quantity Films:', { trim: true }).nextSibling?.textContent).toBe(mockPerson.films.length.toString());
    expect(getByText('Quantity Starships:', { trim: true }).nextSibling?.textContent).toBe(mockPerson.starships.length.toString());
  });

  test('applies hover effect on mouse over', () => {
    const { getByRole } = render(<PeopleCard person={mockPerson} />);

    const card = getByRole('link').children[0];
    fireEvent.mouseOver(card);
    expect(card).toHaveStyle('transform: scale(1.02)');
  });

  test('navigates to correct link on click', () => {
    const { getByText } = render(<PeopleCard person={mockPerson} />);
    const index = getIndexFromUrl(mockPerson.url);

    const card = getByText(mockPerson.name).closest('a');

    expect(card).toHaveAttribute('href', `/${index}`);
  });
});
