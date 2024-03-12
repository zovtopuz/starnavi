import { FlowArea } from "@/components/FlowArea/FlowArea";
import { toNumber } from "@/utils/toNumber.util";
import { redirect } from "next/navigation";
import { getAllDataByIndex } from "@/hooks/getAllDataByIndex.hook";
import { nodeEdgeBuilder } from "@/components/FlowArea/nodeEdgeBuilder/nodeEdgeBuilder";

interface Props {
  params: Record<string, string>;
}
export default async function PeoplePage({ params }: Props) {
  const PARAMS_NOT_A_NUMBER = -1;
  const index = toNumber(params.index, PARAMS_NOT_A_NUMBER);
  // check if index equal -1 and redirect to main page
  if (index === PARAMS_NOT_A_NUMBER) redirect('/');

  const { nodes, edges } = await getAllDataByIndex(index)
    .then(({ people, films, starships }) => {
      const nodesAndEdges = nodeEdgeBuilder(people, films, starships);
      return nodesAndEdges;
    }).catch(() => {
      redirect('/');
    });

  return <>
    <FlowArea
      initialNodes={nodes}
      initialEdges={edges}
    />
  </>
}
