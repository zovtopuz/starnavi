"use client"

import { useEffect, useState } from "react"
import { useLoadOnScroll } from "./useLoadOnScroll";
import { lazyLoadFetch } from "@/utils/lazyLoadFetch.util";
import { IGetAllPeopleResponse, getPeople } from "@/fetch/GET/getPeople.GET";

export const getAllPeople = (search: string = '') => {
  const [data, setData] = useState<IPersonData>();
  const [page, setPage] = useState<number>(1);

  const [loading, setLoading] = useState(false);

  const { lastRef } = useLoadOnScroll({ triggers: [data?.results], loadMore })

  useEffect(() => {
    handleGetPeople(page, search);
  }, []);

  useEffect(() => {
    setPage(1); // Reset page to 1 whenever the search term changes
    handleGetPeople(1, search);
  }, [search]);

  const handleGetPeople = (page: number = 1, search: string) => {
    setLoading(true);
    getPeople(page, search)
      .then(({ data: peopleData }) => {
        if (peopleData && peopleData.results) {
          const results = page === 1 ? peopleData.results : [...(data?.results || []), ...peopleData.results];
          setData({ ...peopleData, results, page });
        }
      })
      .catch(console.log)
      .finally(() => {
        setLoading(false);
      })
  }


  function loadMore() {
    if (data && data?.count !== data?.results?.length) {
      const handleNextPage = data.page + 1;
      lazyLoadFetch(() => {
        handleGetPeople(handleNextPage, search);
      }, 200);
    }
  }

  return {
    people: data?.results || [],
    loading,
    lastRef,
  }
}

interface IPersonData extends IGetAllPeopleResponse {
  page: number;
}