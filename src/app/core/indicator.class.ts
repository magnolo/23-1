import { DataSource } from './dataSource.class';
import { IndicatorColorStop} from './indicatorColorStop.class';
import { IndicatorData } from './indicatorData.class';

export class Indicator{
  id: number;
  title: string;
  source: DataSource;
  colors: IndicatorColorStop[];
  data: IndicatorData[];
}
