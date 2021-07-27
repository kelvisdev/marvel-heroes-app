import { EventSummary } from './event-summary.model';

export interface EventList {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<EventSummary>;
}
