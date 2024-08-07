// Types
import { Co2, Methane, NewArctic, No2, Temp } from "./DataTypes";

type ChartLayoutProps = {
  data: Temp[] | Methane[] | NewArctic[] | Co2[] | No2[];
  dataKeyChart: string;
  XDataKey: string;
  strokeAreaClr: string;
  fillAreaClr: string;
  XLabelValue: string;
  YLabelValue: string;
  YDataMin: number;
  YDataMax: number;
};

export type { ChartLayoutProps };
