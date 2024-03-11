import { Box, Heading, Text } from "@chakra-ui/react";
import { Detail } from "./details/details";
import { INode } from "../../node-edge-builder/types";
import { IPeople } from "@/types/person.type";
import { memo } from "react";
import { NodeProps } from "reactflow";

const PersonDetail = ({ data: person }: NodeProps<IPeople>) => {
  return (
    <Box
      maxW="3xl"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="blackAlpha.800"
      color="white"
      border="1px solid #ccc"
      p="10"
    >
      <Heading
        as="h2"
        size="2xl"
        color="yellow.400"
        mb="4"
      >
        {person.name}
      </Heading>
      <Detail label="Gender" value={person.gender} />
      <Detail label="Height" value={person.height} unit="cm" />
      <Detail label="Mass" value={person.mass} unit="kg" />
      <Detail label="Hair Color" value={person.hair_color} />
      <Detail label="Skin Color" value={person.skin_color} />
      <Detail label="Eye Color" value={person.eye_color} />
      <Detail label="Birth Year" value={person.birth_year} />
      <Detail label="Films" value={person.films.length} />
      <Detail label="Starships" value={person.starships.length} />
    </Box>
  );
};

export default memo(PersonDetail);
