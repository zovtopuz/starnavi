import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { NodeType } from '@/components/FlowArea/nodeEdgeBuilder/types';
import PersonDetailNode from '@/components/FlowArea/node/PersonDetailNode/PersonDetailNode';
import { mockPerson } from '../data.mock';

const data = {
  data: mockPerson,
  type: NodeType.PERSONA_DETAILS,
  id: 'id',
  selected: false,
  zIndex: 0,
  isConnectable: false,
  xPos: 0,
  yPos: 0,
  dragging: false,
}

describe('PersonDetail', () => {
  it('renders person details correctly', () => {

    const { getByText, container } = render(<PersonDetailNode  {...data} />);

    expect(container).toBeVisible();

    expect(getByText(mockPerson.name)).toBeInTheDocument();

    //check additional info
    expect(getByText('Gender:').nextSibling?.textContent?.trim()).toBe(mockPerson.gender);
    expect(getByText('Birth Year:').nextSibling?.textContent?.trim()).toBe(mockPerson.birth_year);
    expect(getByText('Height:').nextSibling?.textContent?.trim()).toBe(mockPerson.height + ' cm');
    expect(getByText('Mass:').nextSibling?.textContent?.trim()).toBe(mockPerson.mass + ' kg');
    expect(getByText('Films:').nextSibling?.textContent?.trim()).toBe(mockPerson.films.length.toString());
    expect(getByText('Starships:').nextSibling?.textContent?.trim()).toBe(mockPerson.starships.length.toString());
  });
});
