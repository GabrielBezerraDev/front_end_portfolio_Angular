import { IMastery } from "./Imastery";

export interface ICompetencias{
  titulo: string;
  estilo?:string;
  id: string;
  maestrias: Array<IMastery>;
}
