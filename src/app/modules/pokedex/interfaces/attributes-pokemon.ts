import { GenderPokemon } from "./gender-pokemon";
import { TypePokemon } from "./types-pokemon";

export interface AttriubutesPokemon{
  name: string;
  gender: GenderPokemon;
  type: Array<TypePokemon>;
  height: number;
  weight: number;
}
