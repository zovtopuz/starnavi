import { PeopleGridWrapper } from "@/components/people/GridWrapper/GridWrapper";
import { PeopleNavigation } from "@/components/people/navigation/navigation";
import { PeopleCard } from "@/components/people/PeopleCard/PeopleCard";
import { getPeople } from "@/fetch/GET/getPeople"
import { toNumber } from "@/utils/toNumber.util";

interface Props {
  searchParams: Record<string, string | undefined>;
}
const MAX_QUANTITY_PER_PAGE = 10;
export default async function ServerLoad({ searchParams }: Props) {
  const page = toNumber(searchParams.page);

  const { data: people } = await getPeople(page);

  const MAX_QUANTITY_OF_PAGE = Math.ceil(people.count / MAX_QUANTITY_PER_PAGE);

  return <>
    <PeopleGridWrapper>
      <PeopleNavigation page={page} MAX_QUANTITY_OF_PAGE={MAX_QUANTITY_OF_PAGE} />
      {people.results.map((person) => (
        <PeopleCard person={person} key={person.name} />
      ))}
      <PeopleNavigation page={page} MAX_QUANTITY_OF_PAGE={MAX_QUANTITY_OF_PAGE} />
    </PeopleGridWrapper>
  </>
}