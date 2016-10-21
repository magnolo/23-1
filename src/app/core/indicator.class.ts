import { DataSource } from './dataSource.class';
import { ColorStop} from './colorStop.class';
import { IndicatorData } from './indicatorData.class';

export class Indicator{
  id: number;
  title: string;
  source: DataSource;
  colors: ColorStop[];
  data: IndicatorData[];
}
