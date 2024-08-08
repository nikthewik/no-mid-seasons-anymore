// Libraries
import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// Types
import { ChartLayoutProps } from "../../types/ChartLayoutProps";
// Style
import style from "./ChartLayout.module.css";

function ChartLayout({
  data,
  dataKeyChart,
  XDataKey,
  strokeAreaClr,
  fillAreaClr,
  XLabelValue,
  YLabelValue,
  YDataMin,
  YDataMax,
}: ChartLayoutProps): React.ReactElement {
  return (
    <div className={style.chartContainer}>
      <div className={style.chart}>
        <ResponsiveContainer>
          <AreaChart data={data} width={100} height={100}>
            <Area
              type="monotone"
              dataKey={dataKeyChart}
              stroke={strokeAreaClr}
              fill={fillAreaClr}
              connectNulls={true}
            />
            <CartesianGrid stroke="var(--clr-bk-t1)" strokeDasharray={"5 5"} />
            <XAxis
              height={50}
              label={{
                value: XLabelValue,
                position: "insideBottom",
                offset: 0,
              }}
              dataKey={XDataKey}
              minTickGap={47}
              tickMargin={8}
              tickFormatter={(value: number | string) =>
                Number(value).toFixed()
              }
              interval={"preserveStartEnd"}
            />
            <YAxis
              width={70}
              label={{
                value: YLabelValue,
                position: "top",
                angle: 0,
                offset: 20,
              }}
              domain={[
                YDataMin,
                YDataMax
              ]}
              tickMargin={8}
              tickFormatter={(value: number | string) =>
                Number(value).toFixed()
              }
              interval={"preserveStartEnd"}
            />
            <Tooltip wrapperClassName={style.tooltip} />
            <Legend verticalAlign="top" align="right" height={36} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartLayout;
