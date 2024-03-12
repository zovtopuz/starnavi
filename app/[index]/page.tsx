import { FlowArea } from "@/components/FlowArea/FlowArea";
import { getPeopleByIndex } from "@/fetch/GET/getPeopleByIndex"
import { getFilmsByEpisodeId } from "@/fetch/GET/getFilmsByEpisodeId";
import { toNumber } from "@/utils/toNumber.util";
import { redirect } from "next/navigation";
import { getStarShipsByFilms } from "@/fetch/GET/getStarShipsByFilms";
import { nodeEdgeBuilder } from "@/components/FlowArea/nodeEdgeBuilder/nodeEdgeBuilder";
import { sortByField } from "@/utils/sortByField.util";

interface Props {
  params: Record<string, string>;
}
export default async function PeoplePage({ params }: Props) {
  const PARAMS_NOT_A_NUMBER = -1;
  const index = toNumber(params.index, PARAMS_NOT_A_NUMBER);
  // check if index equal -1 and redirect to main page
  if (index === PARAMS_NOT_A_NUMBER) redirect('/');

  const people = await getPeopleByIndex(index).then(r => r.data).catch(() => {
    redirect('/');
  });

  const films = await getFilmsByEpisodeId(people.films).then(({ data }) => data.results).catch(() => []);
  const starships = await getStarShipsByFilms(people.films, index).then(({ data }) => data.results).catch(() => [])

  const { nodes, edges } = nodeEdgeBuilder(people, films, starships);

  return <>
    <FlowArea
      initialNodes={nodes}
      initialEdges={edges}
      allData={{ people, films, starships, nodes, edges }}
    />
  </>
}
