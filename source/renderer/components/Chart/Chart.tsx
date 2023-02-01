import { FunctionComponent } from "react";
import {
  Chart as ChartComponent,
  ChartProps as ChartComponentProperties,
} from "react-chartjs-2";
import { ChartWrapper } from "./Chart.styles";

const Chart: FunctionComponent<ChartComponentProperties> = (
  props: ChartComponentProperties,
) => {
  return (
    <ChartWrapper>
      <ChartComponent {...props} />
    </ChartWrapper>
  );
};

export default Chart;
