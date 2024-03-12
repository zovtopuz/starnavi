import { Box, Grid } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
interface Props extends PropsWithChildren { }

export const PeopleGridWrapper: React.FC<Props> = ({ children }) => {

  return (
    <Box maxW={1400} m={'0px auto'} padding={5}>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={5} justifyContent="center">
        {children}
      </Grid>
    </Box>
  )
}