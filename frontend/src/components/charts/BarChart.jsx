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

// Bar chart component for unit operations alerts - matching reference design
export const BarChart = ({ data }) => {
  // Chart.js configuration matching reference colors
  const chartData = useMemo(() => ({
    labels: data?.labels || ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6'],
    datasets: [
      {
        label: 'In Process',
        data: data?.inProcess || [28, 22, 15, 18, 25, 12],
        backgroundColor: '#8a8aff',
        borderRadius: 3,
        barThickness: 14,
      },
      {
        label: 'Unacknowledged',
        data: data?.unacknowledged || [18, 15, 20, 12, 10, 16],
        backgroundColor: '#e06a8a',
        borderRadius: 3,
        barThickness: 14,
      },
      {
        label: 'On Watch',
        data: data?.onWatch || [10, 12, 8, 14, 6, 11],
        backgroundColor: '#4a4aff',
        borderRadius: 3,
        barThickness: 14,
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
          color: '#a0a0c0',
          font: {
            family: 'Inter',
            size: 11,
          },
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 16,
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#2e2e4a',
        titleColor: '#ffffff',
        bodyColor: '#c0c0e0',
        borderColor: '#4e4e6a',
        borderWidth: 1,
        cornerRadius: 6,
        padding: 10,
      },
    },
    scales: {
      x: {
        grid: {
          color: '#2e2e4a',
          drawBorder: false,
        },
        ticks: {
          color: '#a0a0c0',
          font: {
            family: 'Inter',
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: '#2e2e4a',
          drawBorder: false,
        },
        ticks: {
          color: '#a0a0c0',
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
      className="bg-[#2e2e4a]/60 rounded-[10px] p-5 flex flex-col"
    >
      {/* Header */}
      <h3 className="text-sm font-medium text-white mb-4">
        Best Unit Operations with Latest Number of Alerts
      </h3>

      {/* Chart */}
      <div className="flex-1 min-h-[280px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
