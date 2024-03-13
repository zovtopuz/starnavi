import '@testing-library/jest-dom';
import { nodeEdgeBuilder } from "@/components/FlowArea/nodeEdgeBuilder/nodeEdgeBuilder";
import { NodeType } from "@/components/FlowArea/nodeEdgeBuilder/types";
import { mockFilms, mockPerson, mockStarships } from "./data.mock";
import { IFilm } from '@/types/film.type';
import { IStarShip } from '@/types/starship.type';


describe('nodeEdgeBuilder', () => {
  it('correctly builds nodes and edges', () => {
    const { nodes, edges } = nodeEdgeBuilder(mockPerson, mockFilms, mockStarships);
    const QUANTITY_PEOPLE = 1;
    const ADDITIONAL_INFO_PEOPLE = 1;
    const data_length = QUANTITY_PEOPLE + mockFilms.length + mockStarships.length + ADDITIONAL_INFO_PEOPLE // 1 person + 2 films + 2 starships + 1 additional info about user

    expect(nodes.length).toBe(data_length);
    expect(nodes[1].data.name).toBe(mockPerson.name);
    expect(nodes[1].type).toBe(NodeType.BELOW);

    expect(edges.length).toBe(data_length - 1);
  });

  it('set undefined for film and starships', () => {
    const films = undefined as unknown as IFilm[];
    const starships = undefined as unknown as IStarShip[];
    const { nodes, edges } = nodeEdgeBuilder(mockPerson, films, starships);

    expect(nodes.length).toBe(0);

    expect(edges.length).toBe(0);
  });
});
