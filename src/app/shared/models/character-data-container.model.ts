import { Character } from './character.model';

export interface CharacterDataContainer {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<Character>;
}
