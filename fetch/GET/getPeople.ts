import { axios } from "@/lib/axios.lib";
import { IPeople } from "@/types/person.type";

export const getPeople = (page: number = 1, search: string = '') => {
  const response = axios.get<IGetAllPeopleResponse>(`/people/?page=${page}&search=${search}`);

  return response
}

export interface IGetAllPeopleResponse {
  count: number;
  next: string;
  previous: string;
  results: IPeople[];
}