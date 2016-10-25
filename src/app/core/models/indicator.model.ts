import { DataSource } from './data-source.model';
import { IndicatorColorStop} from './indicator-color-stop.model';
import { IndicatorData } from './indicator-data.model';

export class Indicator{
  id: number;
  title: string;
  source: DataSource;
  colors: IndicatorColorStop[];
  data: IndicatorData[];
}
