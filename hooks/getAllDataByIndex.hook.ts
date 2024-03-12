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

    const filmsAndStarships = await Promise.all([fetchFilms, fetchStarships])
      .then(r => {
        return { films: sortByField(r[0].data.results, 'episode_id'), starships: r[1].data.results }
      })
      .catch(() => ({ films: [], starships: [] }));

    return filmsAndStarships
  }
  const nodesAndEdges = await getPeopleByIndex(index)
    .then(async ({ data: people }) => {
      const { films, starships } = await getFilmsAndStarship(people);

      const nodesAndEdges = nodeEdgeBuilder(people, films, starships);
      return nodesAndEdges
    })
    .catch(() => {
      redirect('/');
    })

  return nodesAndEdges
}