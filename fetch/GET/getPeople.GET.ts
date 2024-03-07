import { IPeople } from "@/types/person.type";
import axios from "axios"

export const getPeople = (page: number = 1, search: string = '') => {
  const response = axios.get<IGetAllPeopleResponse>(process.env.NEXT_PUBLIC_HTTP_BACKEND_URL + `/people/?page=${page}&search=${search}`, {
    headers: { 'Content-Type': "application/json" },
  })

  return response
}

export interface IGetAllPeopleResponse {
  count: number;
  next: string;
  previous: IPeople[] | null;
  results: IPeople[];
}