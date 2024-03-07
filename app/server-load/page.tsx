import { PeopleGridWrapper } from "@/components/people/grid-wrapper/grid-wrapper";
import { PeopleNavigation } from "@/components/people/navigation/navigation";
import { PeopleCard } from "@/components/people/people-card/people-card";
import { getPeople } from "@/fetch/GET/getPeople.GET"

interface Props {
  searchParams: Record<string, string | undefined>;
}
const MAX_QUANTITY_PER_PAGE = 10;
export default async function ServerLoad({ searchParams }: Props) {
  const page = Number(searchParams.page);
  const handleIndexPage = page && !isNaN(page) && typeof page === 'number' ? page : 1;

  const { data: people } = await getPeople(handleIndexPage);

  const MAX_QUANTITY_OF_PAGE = Math.ceil(people.count / MAX_QUANTITY_PER_PAGE);

  return <>
    <PeopleGridWrapper>
      <PeopleNavigation page={handleIndexPage} MAX_QUANTITY_OF_PAGE={MAX_QUANTITY_OF_PAGE} />
      {people.results.map((person) => (
        <PeopleCard person={person} key={person.name} />
      ))}
      <PeopleNavigation page={handleIndexPage} MAX_QUANTITY_OF_PAGE={MAX_QUANTITY_OF_PAGE} />
    </PeopleGridWrapper>
  </>
}