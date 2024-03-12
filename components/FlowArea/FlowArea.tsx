'use client'
import ReactFlow, { Background, Controls, Edge, MiniMap, Node, useEdgesState, useNodesState } from "reactflow";
import { Grid } from "@chakra-ui/react";
import 'reactflow/dist/style.css';
import CustomNode from "./node/CustomNode/CustomNode";
import PersonDetail from "./node/PersonDetailNode/PersonDetailNode";
import { INode, NodeType } from "./nodeEdgeBuilder/types";
import { useEffect } from "react";

interface Props {
  initialNodes: INode[];
  initialEdges: Edge[];
}
const nodeTypes = {
  [NodeType.AHEAD]: CustomNode,
  [NodeType.BELOW]: CustomNode,
  [NodeType.BOTH]: CustomNode,
  [NodeType.PERSONA_DETAILS]: PersonDetail,
};

export const FlowArea = ({ initialNodes, initialEdges }: Props) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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