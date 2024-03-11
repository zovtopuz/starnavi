import { IFilm } from "@/types/film.type";
import { IPeople } from "@/types/person.type";
import { IStarShip } from "@/types/starship.type";
import { INode, NodeType, IEdge, StarWarTypeOfData, IAddNodeEdge } from "./types";
import { buildPeopleDetails, calcPosition, edge, node } from "./helpers";

export const nodeEdgeBuilder = (people: IPeople, films: IFilm[], starships: IStarShip[]) => {
  const nodes: INode[] = [];
  const edges: IEdge[] = [];
  const FIRST_ELEMENT_INDEX = 0;

  const addNodeEdge = ({ id, data, type, position, source_id }: IAddNodeEdge) => {
    nodes.push(node({ id, data, position, type }));
    if (typeof source_id !== 'undefined') {
      edges.push(edge(source_id, id));
    }
  }

  const people_details = buildPeopleDetails(people);
  nodes.push(people_details);

  const data = { label: StarWarTypeOfData.PEOPLE, name: people.name }
  const position = calcPosition(0, 0, 0);

  addNodeEdge({ id: FIRST_ELEMENT_INDEX, data, position, type: NodeType.BELOW });

  films.forEach((film, i) => {
    let deep = 1;
    const position = calcPosition(i, deep, films.length)

    const film_id = nodes.length;
    const data = { label: StarWarTypeOfData.FILM, name: film.title, description: film.opening_crawl }

    const type = starships.some(starship => starship.films.includes(film.episode_id)) ? NodeType.BOTH : NodeType.AHEAD;

    addNodeEdge({ id: film_id, data, position, type, source_id: FIRST_ELEMENT_INDEX });

    starships.forEach(({ name, films: starship_films }, i) => {
      let deep = 2;
      const position = calcPosition(i, deep, starship_films.length)
      const id = nodes.length;
      const data = { label: StarWarTypeOfData.STARSHIP, name }

      if (starship_films.includes(film.episode_id)) {
        const findIfNodeNameExist = nodes.find(node => node.data.name === name);

        if (findIfNodeNameExist) {
          edges.push(edge(film_id, +findIfNodeNameExist.id));
        } else {
          addNodeEdge({ id, data, position, type: NodeType.AHEAD, source_id: film_id });
        }
      }
    })

  })

  return { nodes, edges }
}

