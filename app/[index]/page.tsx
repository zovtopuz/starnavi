import { FlowArea } from "@/components/FlowArea/FlowArea";
import { getPeopleByIndex } from "@/fetch/GET/getPeopleByIndex"
import { getFilmsByEpisodeId } from "@/fetch/GET/getFilmsByEpisodeId";
import { toNumber } from "@/utils/toNumber.util";
import { redirect } from "next/navigation";
import { getStarShipsByFilms } from "@/fetch/GET/getStarShipsByFilms";
import { nodeEdgeBuilder } from "@/components/FlowArea/nodeEdgeBuilder/nodeEdgeBuilder";
import { sortByField } from "@/utils/sortByField.util";
import { getAllDataByIndex } from "@/hooks/getAllDataByIndex.hook";

interface Props {
  params: Record<string, string>;
}
export default async function PeoplePage({ params }: Props) {
  const PARAMS_NOT_A_NUMBER = -1;
  const index = toNumber(params.index, PARAMS_NOT_A_NUMBER);
  // check if index equal -1 and redirect to main page
  if (index === PARAMS_NOT_A_NUMBER) redirect('/');

  const { nodes, edges } = await getAllDataByIndex(index);

  return <>
    <FlowArea
      initialNodes={nodes}
      initialEdges={edges}
    />
  </>
}
