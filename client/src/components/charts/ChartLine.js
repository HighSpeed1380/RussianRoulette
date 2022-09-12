import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import BaseOptionChart from './BaseOptionChart';

// ----------------------------------------------------------------------

const CHART_DATA = [{ name: 'Desktops', data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 50, 100, 32, 45, 68] }];

export default function ChartLine() {
  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      categories: ['3850', '3850', '3850', '3850', '3850', '3850', '3850', '3850', '3850', '3850', '3850', '3850', '3850', '3850']
    },
    tooltip: { x: { show: false }, marker: { show: false } }
  });

  return <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={320} />;
}
