import { getFilmsByEpisodeId } from "@/fetch/GET/getFilmsByEpisodeId";
import { getPeopleByIndex } from "@/fetch/GET/getPeopleByIndex";
import { getStarShipsByFilmsAndId } from "@/fetch/GET/getStarShipsByFilmsAndId";
import { IPeople } from "@/types/person.type";
import { sortByField } from "@/utils/sortByField.util";
import { redirect } from "next/navigation";

export const getAllDataByIndex = async (index: number) => {
  try {
    // Get current user
    const peopleResponse = await getPeopleByIndex(index);
    const people = peopleResponse.data;

    // Get all additional information in parallel
    const [filmsResponse, starshipsResponse] = await Promise.all([
      getFilmsByEpisodeId(people.films),
      getStarShipsByFilmsAndId(people.films, index)
    ]);

    const films = sortByField(filmsResponse.data.results, 'episode_id');
    const starships = starshipsResponse.data.results;

    return { films, starships, people };
  } catch (error) {
    console.error("Error fetching data:", error);
    redirect('/');
  }
};
