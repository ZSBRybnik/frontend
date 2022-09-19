import { FC } from "react";
import {
  ChartProps as ChartComponentProperties,
  Chart as ChartComponent,
} from "react-chartjs-2";
import { ChartWrapper } from "./Chart.styles";

const Chart: FC<ChartComponentProperties> = (
  props: ChartComponentProperties,
) => {
  return (
    <ChartWrapper>
      <ChartComponent {...props} />
    </ChartWrapper>
  );
};

export default Chart;
