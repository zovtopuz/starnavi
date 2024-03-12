'use client'
import ReactFlow, { Background, Controls, Edge, MiniMap, Node, useEdgesState, useNodesState } from "reactflow";
import { Grid } from "@chakra-ui/react";
import 'reactflow/dist/style.css';
import CustomNode from "./node/CustomNode/CustomNode";
import PersonDetail from "./node/PersonDetailNode/PersonDetailNode";
import { INode, NodeType } from "./nodeEdgeBuilder/types";
import { useEffect } from "react";
import { IPeople } from "@/types/person.type";
import { IFilm } from "@/types/film.type";
import { IStarShip } from "@/types/starship.type";
import { nodeEdgeBuilder } from "./nodeEdgeBuilder/nodeEdgeBuilder";

interface Props {
  // initialNodes: INode[];
  // initialEdges: Edge[];
  people: IPeople;
  films: IFilm[];
  starships: IStarShip[];
}
const nodeTypes = {
  [NodeType.AHEAD]: CustomNode,
  [NodeType.BELOW]: CustomNode,
  [NodeType.BOTH]: CustomNode,
  [NodeType.PERSONA_DETAILS]: PersonDetail,
};

export const FlowArea = ({ people, films, starships }: Props) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    console.log(people, films, starships);
    const { nodes, edges } = nodeEdgeBuilder(people, films, starships);
    setNodes(nodes)
    setEdges(edges)
  }, [])

  return (
    <Grid backgroundColor='#FFFFFF' height='calc(100dvh - 67px)' >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="top-left"
      >
        <Background color="#aaa" gap={16} />
        <MiniMap zoomable pannable />
        <Controls />

      </ReactFlow>
    </Grid>
  )
}