import { nodeEdgeBuilder } from "@/components/FlowArea/nodeEdgeBuilder/nodeEdgeBuilder";
import { getFilmsByEpisodeId } from "@/fetch/GET/getFilmsByEpisodeId";
import { getPeopleByIndex } from "@/fetch/GET/getPeopleByIndex";
import { getStarShipsByFilmsAndId } from "@/fetch/GET/getStarShipsByFilmsAndId";
import { IPeople } from "@/types/person.type";
import { sortByField } from "@/utils/sortByField.util";
import { redirect } from "next/navigation";

export const getAllDataByIndex = async (index: number) => {
  const getFilmsAndStarship = async (people: IPeople) => {
    const fetchFilms = getFilmsByEpisodeId(people.films);
    const fetchStarships = getStarShipsByFilmsAndId(people.films, index);

    const filmsAndStarships = await Promise.all([fetchFilms, fetchStarships])
      .then(r => {
        const films = sortByField(r[0].data.results, 'episode_id');
        const starships = r[1].data.results;

        return { films, starships }
      })
      .catch(() => ({ films: [], starships: [] }));

    return filmsAndStarships
  }

  const data = await getPeopleByIndex(index)
    .then(async ({ data: people }) => {
      const filmsAndStarships = await getFilmsAndStarship(people);
      return { ...filmsAndStarships, people }
    })
    .catch(() => {
      redirect('/');
    });

  return data
}