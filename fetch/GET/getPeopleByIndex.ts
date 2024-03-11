import { axios } from "@/lib/axios.lib";
import { IPeople } from "@/types/person.type";

export const getPeopleByIndex = (index: number = 1) => {
  const response = axios.get<IPeople>(`/people/${index}`)
  return response
}
