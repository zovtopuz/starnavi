'use client'
import { LoadMoreWrapper } from "../wrapper/loading/loading.wrapper";
import { Box, Grid, Input } from "@chakra-ui/react"
import { PeopleCard } from "./people-card/people-card";
import { getAllPeople } from "@/hooks/getAllPersons.hook";
import { PeopleGridWrapper } from "./grid-wrapper/grid-wrapper";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce.hook";

export const People = () => {
  const [search, setSearch] = useState<string>('');
  const debounceSearch = useDebounce(search, 500);
  const { people, lastRef, loading } = getAllPeople(debounceSearch);

  return (
    <PeopleGridWrapper>
      <Input
        placeholder='Basic usage'
        gridColumn={'1/-1'}
        variant='outline'
        color={'whitesmoke'}
        onInput={(e) => {
          setSearch(e.currentTarget.value)
        }}
      />
      <LoadMoreWrapper loading={loading}>
        {people.map((person, index) => {
          // addRef assign ref for last user of list
          const addRef = index === people.length - 1 && { lastRef: lastRef };
          return (
            <PeopleCard person={person} {...addRef} key={person.name} />
          )
        })}
      </LoadMoreWrapper>
    </PeopleGridWrapper>
  )
}