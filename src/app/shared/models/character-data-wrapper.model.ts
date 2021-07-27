import { CharacterDataContainer } from './character-data-container.model';

export interface CharacterDataWrapper {
  code: number;
  status: string;
  data: CharacterDataContainer;
}
