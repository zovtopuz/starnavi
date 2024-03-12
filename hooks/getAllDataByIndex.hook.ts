import { nodeEdgeBuilder } from "@/components/FlowArea/nodeEdgeBuilder/nodeEdgeBuilder";
import { getFilmsByEpisodeId } from "@/fetch/GET/getFilmsByEpisodeId";
import { getPeopleByIndex } from "@/fetch/GET/getPeopleByIndex";
import { getStarShipsByFilms } from "@/fetch/GET/getStarShipsByFilms";
import { IPeople } from "@/types/person.type";
import { sortByField } from "@/utils/sortByField.util";
import { redirect } from "next/navigation";

export const getAllDataByIndex = async (index: number) => {
  const getFilmsAndStarship = async (people: IPeople) => {
    const fetchFilms = getFilmsByEpisodeId(people.films);
    const fetchStarships = getStarShipsByFilms(people.films, index);

    const data = await Promise.all([fetchFilms, fetchStarships])
      .then(r => {
        return { films: r[0].data.results, starships: r[1].data.results }
      })
      .catch(() => ({ films: [], starships: [] }));

    return data
  }
  const { people, films, starships } = await getPeopleByIndex(index)
    .then(async ({ data: people }) => {
      const filmsAndStarship = await getFilmsAndStarship(people)
      return { ...filmsAndStarship, people }
    })
    .catch(() => {
      redirect('/');
    });

  const nodesAndEdges = nodeEdgeBuilder(people, films, starships);

  return nodesAndEdges
}