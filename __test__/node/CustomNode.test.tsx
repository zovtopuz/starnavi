import '@testing-library/jest-dom'; // For additional matchers
import React from 'react';
import { render } from '@testing-library/react';
import { NodeType, StarWarTypeOfData } from '@/components/FlowArea/nodeEdgeBuilder/types';
import { mockFilms, mockPerson } from '../data.mock';
import CustomNode, { emoji } from '@/components/FlowArea/node/CustomNode/CustomNode';

const data = {
  type: NodeType.TESTS,
  id: 'id-2',
  selected: false,
  zIndex: 0,
  isConnectable: false,
  xPos: 0,
  yPos: 0,
  dragging: false,
}

describe('Custom node', () => {
  it('people: renders custom node correctly', () => {
    const mockData = {
      ...data, data: {
        label: StarWarTypeOfData.PEOPLE,
        name: mockPerson.name,
      },
    }

    const { getByText, container } = render(<CustomNode  {...mockData} />);

    expect(container).toBeVisible();
    const dataEmoji = emoji[mockData.data.label];

    //check info
    expect(getByText(dataEmoji)).toBeInTheDocument();
    expect(getByText(mockData.data.name)).toBeInTheDocument();
  });
  it('film: renders custom node correctly', () => {
    const mockData = {
      ...data, data: {
        label: StarWarTypeOfData.FILM,
        name: mockFilms[0].title,
      },
    }

    const { getByText, container } = render(<CustomNode  {...mockData} />);

    expect(container).toBeVisible();
    const dataEmoji = emoji[mockData.data.label];

    //check info
    expect(getByText(dataEmoji)).toBeInTheDocument();
    expect(getByText(mockData.data.name)).toBeInTheDocument();
  });

  it('starship: renders custom node correctly', () => {
    const mockData = {
      ...data, data: {
        label: StarWarTypeOfData.FILM,
        name: mockFilms[0].title,
      },
    }

    const { getByText, container } = render(<CustomNode  {...mockData} />);

    expect(container).toBeVisible();
    const dataEmoji = emoji[mockData.data.label];

    //check info
    expect(getByText(dataEmoji)).toBeInTheDocument();
    expect(getByText(mockData.data.name)).toBeInTheDocument();
  });
});
