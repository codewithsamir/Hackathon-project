import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie({ data }: any) {
  // Format the data in the way the PieChart expects
  const chartData = data ? data.data.map((item: any, index: number) => ({
    id: index,
    value: item,
    label: data.labels[index],
  })) : [];

  return (
    <PieChart
      series={[{ data: chartData }]}
      width={600}
      height={400}
    />
  );
}
