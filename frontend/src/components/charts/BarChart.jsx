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
  // Chart.js configuration with purple theme
  const chartData = useMemo(() => ({
    labels: data?.labels || ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6'],
    datasets: [
      {
        label: 'In Process',
        data: data?.inProcess || [28, 22, 15, 18, 25, 12],
        backgroundColor: '#a855f7',
        borderRadius: 4,
        barThickness: 16,
      },
      {
        label: 'Unacknowledged',
        data: data?.unacknowledged || [18, 15, 20, 12, 10, 16],
        backgroundColor: '#ec4899',
        borderRadius: 4,
        barThickness: 16,
      },
      {
        label: 'On Watch',
        data: data?.onWatch || [10, 12, 8, 14, 6, 11],
        backgroundColor: '#6366f1',
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
          color: '#c4b5fd',
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
        backgroundColor: '#1e1432',
        titleColor: '#f5f3ff',
        bodyColor: '#c4b5fd',
        borderColor: '#581c87',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
      },
    },
    scales: {
      x: {
        grid: {
          color: '#3b1d59',
          drawBorder: false,
        },
        ticks: {
          color: '#a78bfa',
          font: {
            family: 'Inter',
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: '#3b1d59',
          drawBorder: false,
        },
        ticks: {
          color: '#a78bfa',
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
      className="bg-[#1e1432]/80 border border-purple-800/30 rounded-2xl p-6 flex flex-col hover:border-purple-600/50 transition-all"
    >
      {/* Header */}
      <h3 className="text-lg font-medium tracking-tight text-white mb-6">
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
