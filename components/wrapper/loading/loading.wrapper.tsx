import { Center, Spinner } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface Props {
  loading: boolean;
}
export const LoadMoreWrapper: React.FC<PropsWithChildren<Props>> = ({ loading, children }) => {

  return <>
    {children}
    {loading && (
      <Center>
        <Spinner size="xl" color="yellow.400" thickness="4px" />
      </Center>
    )}
  </>
}