import { IPeople } from "@/types/person.type"
import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading } from "@chakra-ui/react"
import { LegacyRef } from "react";
import { Detail } from "./details/details";
import Link from "next/link";
interface Props {
  person: IPeople;
  lastRef?: LegacyRef<HTMLDivElement>;
}

export const PeopleCard: React.FC<Props> = ({ person, lastRef }) => {
  const index = person.url.split('/').at(-2);

  return (
    <Link href={`/${index}/`} key={person.name} >
      <Card
        key={person.created}
        maxWidth="320px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        transition="transform 0.2s"
        _hover={{ transform: 'scale(1.02)' }}
        backgroundColor="#1f2839"
        color="white"
        boxShadow="0px 0px 10px rgba(255, 255, 255, 0.2)"
        ref={lastRef}
      >
        <CardHeader textAlign="center" backgroundColor="#171717" borderBottomWidth="1px">
          <Flex alignItems="center" justifyContent="center">
            <Avatar size="lg" name={person.name} src={`https://api.adorable.io/avatars/100/${person.name}`} />
            <Heading size="md" marginLeft="2">{person.name}</Heading>
          </Flex>
        </CardHeader>
        <CardBody padding="4">
          <Flex flexDirection="column" alignItems="flex-start">
            <Detail label="Gender" value={person.gender} />
            <Detail label="Birth Year" value={person.birth_year} />
            <Detail label="Height" value={person.height} />
            <Detail label="Mass" value={person.mass} />
            <Detail label="Quantity Films" value={person.films.length} />
            <Detail label="Quantity Starships" value={person.starships.length} />
          </Flex>
        </CardBody>
      </Card>
    </Link>
  );
};
