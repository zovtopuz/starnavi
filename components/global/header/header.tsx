'use client'
import { Heading } from "@chakra-ui/react";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Header() {

  return <header style={{ backgroundColor: 'rgb(255, 255, 255, 0.3)', backdropFilter: 'blur(3px)', position: 'sticky', top: '0px', zIndex: 2 }}>
    <Heading textAlign='center' size="2xl" fontWeight="bold" color="#FFD700">SWAPI</Heading>
  </header>
}