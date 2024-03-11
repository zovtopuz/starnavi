import { Box, Grid, Text } from '@chakra-ui/react';
import React, { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { ICustomData, INode, NodeType, StarWarTypeOfData, WIDTH } from '../../node-edge-builder/types';


function CustomNode({ data, type }: NodeProps<ICustomData>) {

  const emoji = {
    [StarWarTypeOfData.PEOPLE]: '🧑‍🚀',
    [StarWarTypeOfData.FILM]: '🎬',
    [StarWarTypeOfData.STARSHIP]: '🚀',
  }

  return (
    <Box
      bg="gray.100"
      borderWidth="1px"
      borderRadius="md"
      p={4}
      textAlign="center"
      boxShadow="md"
      maxWidth={`${WIDTH}px`}
    >
      <Grid gridTemplateColumns="auto 1fr" alignItems="center" gap={4}>
        <Box
          borderRadius="50%"
          bg="gray.200"
          width={12}
          height={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="2xl"
        >
          {emoji[data.label]}
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="lg">{data.name}</Text>
        </Box>
      </Grid>
      {(type === NodeType.BOTH || type === NodeType.AHEAD) && <Handle type="target" position={Position.Top} className="react-flow-handle" />}
      {(type === NodeType.BOTH || type === NodeType.BELOW) && <Handle type="source" position={Position.Bottom} className="react-flow-handle" />}
    </Box>
  );
}

export default memo(CustomNode);
