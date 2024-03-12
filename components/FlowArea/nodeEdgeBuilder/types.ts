import { IPeople } from "@/types/person.type";
import { Node } from "reactflow";

export interface IEdge { id: string; source: string; target: string; }
export interface ICustomData {
  label: StarWarTypeOfData;
  name: string;
  description?: string;
}

export type INode = Node<ICustomData | IPeople, string>
export type IAddNodeEdge = Pick<INode, 'data' | 'type' | 'position'> & { source_id?: number; id: number | string; }

export const WIDTH = 400;
export const HEIGHT = 250;

export enum StarWarTypeOfData {
  PEOPLE = 'people',
  FILM = 'film',
  STARSHIP = 'starship',
}

export enum NodeType {
  AHEAD = 'AHEAD',
  BELOW = 'BELOW',
  BOTH = 'AHEAD_BELOW',
  PERSONA_DETAILS = 'PERSONA_DETAILS',
  TESTS = 'TESTS',
}