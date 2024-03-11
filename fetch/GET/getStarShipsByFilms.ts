import { axios } from "@/lib/axios.lib";
import { IStarShip } from "@/types/starship.type";

export const getStarShipsByFilms = async (films: number[] = [], pilot_index: number) => {
  const films__in = films.join();

  const url = `/starships/?films__in=${films__in}&pilots__in=${pilot_index}`;
  const response = await axios.get<IGetStarShipsByFilmsResponse>(url)

  return response;
}

export interface IGetStarShipsByFilmsResponse {
  count: number;
  next: string;
  previous: string;
  results: IStarShip[];
}