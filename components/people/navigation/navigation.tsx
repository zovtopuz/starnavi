'use client'
import { Button, Grid } from "@chakra-ui/react"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  page: number;
  MAX_QUANTITY_OF_PAGE?: number;
  START_QUANTITY_OF_PAGE?: number;
}
enum Direction {
  PREV = -1,
  NEXT = 1,
}

export const PeopleNavigation = ({ page, MAX_QUANTITY_OF_PAGE = 9, START_QUANTITY_OF_PAGE = 1 }: Props) => {
  const router = usePathname();

  const handlePage = (direction: Direction) => {
    const url = new URLSearchParams();
    const calcIndex = page + direction;
    const handleIndex = Math.max(Math.min(calcIndex, MAX_QUANTITY_OF_PAGE), START_QUANTITY_OF_PAGE);

    url.append('page', `${handleIndex}`);
    return router + '?' + url.toString();
  }

  return (
    <Grid
      templateColumns="repeat(2, auto)"
      justifyContent={'space-between'}
      gridColumn='1/-1'
      backgroundColor={'rgb(255, 255, 255, 0.2)'}
      backdropFilter={'blur(3px)'}
      padding={2}
      borderRadius={8}
    >
      <Link href={handlePage(Direction.PREV)}>
        <Button colorScheme='yellow' variant='outline'>prev</Button>
      </Link>

      <Link href={handlePage(Direction.NEXT)}>
        <Button colorScheme='yellow'>next</Button>
      </Link>
    </Grid>
  )
}