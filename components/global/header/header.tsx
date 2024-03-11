'use client'
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from 'next/link'; // Import Link component from Next.js
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const location = usePathname();

  return (
    <header style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(3px)', position: 'sticky', top: '0px', zIndex: 2 }}>
      <Flex justifyContent="space-between" alignItems="center" padding="10px">
        {(location !== '/' && location !== '/server-load') && <Button onClick={() => {
          if (history.length > 2) router.back();
          else router.push('/')
        }}>
          <Text variant="link" color="blue.500" fontSize="lg">{'< '}Back</Text>
        </Button>}
        <Link href={'/'}>
          <Text textAlign='center' fontSize="40px" lineHeight={'100%'} fontWeight="bold" color="#FFD700">SWAPI</Text>
        </Link>
        <Link href={'/server-load'}>
          <Text backgroundColor={'whitesmoke'} padding={'10px'} borderRadius={'4px'} color="blue.500" fontSize="lg">Server Load</Text>
        </Link>
      </Flex>
    </header>

  );
}
