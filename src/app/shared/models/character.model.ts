import { EventList } from './event-list.model';
import { SeriesList } from './series-list.model';
import { Image } from './image.model';

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Image;
  events: EventList;
  series: SeriesList;
}
