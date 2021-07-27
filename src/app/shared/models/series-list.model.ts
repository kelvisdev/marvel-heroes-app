import { SeriesSummary } from './series-summary.model';

export interface SeriesList {
  available: number;
  returned: number;
  collectionURI: string;
  items: Array<SeriesSummary>;
}
