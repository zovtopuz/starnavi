import { Box, Text } from "@chakra-ui/react";

export const Detail: React.FC<{ label: string; value: string | number; unit?: string }> = ({ label, value, unit = '' }) => {
  return (
    <Box mb="2">
      <Text
        fontSize="lg"
        color="gray.500"
        fontWeight="bold"
        mr="2"
        display="inline-block"
      >
        {label}:
      </Text>
      <Text
        fontSize="xl"
        color="gray.400"
        display="inline-block"
      >
        {value} {unit}
      </Text>
    </Box>

  );
};