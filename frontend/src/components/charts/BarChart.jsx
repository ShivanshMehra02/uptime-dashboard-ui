import { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Bar chart component for unit operations alerts
export const BarChart = ({ data }) => {
  // Chart.js configuration
  const chartData = useMemo(() => ({
    labels: data?.labels || ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6'],
    datasets: [
      {
        label: 'In Process',
        data: data?.inProcess || [28, 22, 15, 18, 25, 12],
        backgroundColor: '#fafafa',
        borderRadius: 4,
        barThickness: 16,
      },
      {
        label: 'Unacknowledged',
        data: data?.unacknowledged || [18, 15, 20, 12, 10, 16],
        backgroundColor: '#71717a',
        borderRadius: 4,
        barThickness: 16,
      },
      {
        label: 'On Watch',
        data: data?.onWatch || [10, 12, 8, 14, 6, 11],
        backgroundColor: '#3f3f46',
        borderRadius: 4,
        barThickness: 16,
      },
    ],
  }), [data]);

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#a1a1aa',
          font: {
            family: 'Inter',
            size: 12,
          },
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#18181b',
        titleColor: '#fafafa',
        bodyColor: '#a1a1aa',
        borderColor: '#27272a',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
      },
    },
    scales: {
      x: {
        grid: {
          color: '#27272a',
          drawBorder: false,
        },
        ticks: {
          color: '#71717a',
          font: {
            family: 'Inter',
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: '#27272a',
          drawBorder: false,
        },
        ticks: {
          color: '#71717a',
          font: {
            family: 'Inter',
            size: 11,
          },
        },
        beginAtZero: true,
      },
    },
  }), []);

  return (
    <div
      data-testid="bar-chart-container"
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col hover:border-zinc-700 transition-all"
    >
      {/* Header */}
      <h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-6">
        Best Unit Operations with Latest Number of Alerts
      </h3>

      {/* Chart */}
      <div className="flex-1 min-h-[300px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
