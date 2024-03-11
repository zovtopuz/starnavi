import { Box, Text } from "@chakra-ui/react";

export const Detail: React.FC<{ label: string; value: string | number; unit?: string }> = ({ label, value, unit = '' }) => {
  return (
    <Box mb="2">
      <Text
        fontSize="lg"
        color="gray.500" // Колір лейбла
        fontWeight="bold" // Жирний шрифт для лейбла
        mr="2" // Відступ між лейблом і значенням
        display="inline-block" // Встановлення властивості display, щоб встановити ширину елемента
      >
        {label}:
      </Text>
      <Text
        fontSize="xl"
        color="gray.400" // Колір значення
        display="inline-block" // Встановлення властивості display, щоб встановити ширину елемента
      >
        {value} {unit}
      </Text>
    </Box>

  );
};