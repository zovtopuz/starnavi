import { IPeople } from "@/types/person.type";
import { INode, WIDTH, HEIGHT, NodeType } from "./types";

export const node = ({ id, ...node }: Omit<INode, 'id'> & { id: number | string }): INode => ({ id: `${id}`, ...node });

export const edge = (source: number | string, target: number | string) => ({
  id: `e${source}-${target}`, source: `${source}`, target: `${target}`
})

export const buildPeopleDetails = (person: IPeople) => ({
  id: person.name,
  data: person,
  position: { x: WIDTH, y: -HEIGHT * 2 },
  type: NodeType.PERSONA_DETAILS,
});

export const calcPosition = (index: number, deep: number, data_length: number) => ({
  x: (index - data_length / 2) * WIDTH,
  y: deep * HEIGHT
})