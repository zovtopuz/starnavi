import { axios } from "@/lib/axios.lib";
import { IFilm } from "@/types/film.type";

export const getFilmsByEpisodeId = (films: number[]) => {
  const episode_id__in = films.join(',');
  const url = `/films/?episode_id__in=${episode_id__in}`;
  const response = axios.get<IGetFilmsByEpisodeIdResponse>(url);
  return response
}

export interface IGetFilmsByEpisodeIdResponse {
  count: number;
  next: string;
  previous: string;
  results: IFilm[];
}