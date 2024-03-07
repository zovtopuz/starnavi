import { Flex, Text } from "@chakra-ui/react";

export const Detail: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <Flex alignItems="center" justifyContent="space-between" width="100%" marginBottom="2">
      <Text fontSize="sm" fontWeight="bold" color="#FFD700">{label}:</Text>
      <Text fontSize="sm">{value}</Text>
    </Flex>
  );
};