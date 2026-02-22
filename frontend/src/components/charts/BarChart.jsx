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
        backgroundColor: '#3b82f6',
        borderRadius: 4,
        barThickness: 16,
      },
      {
        label: 'Unacknowledged',
        data: data?.unacknowledged || [18, 15, 20, 12, 10, 16],
        backgroundColor: '#06b6d4',
        borderRadius: 4,
        barThickness: 16,
      },
      {
        label: 'On Watch',
        data: data?.onWatch || [10, 12, 8, 14, 6, 11],
        backgroundColor: '#475569',
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
          color: '#94a3b8',
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
        backgroundColor: '#1e293b',
        titleColor: '#f8fafc',
        bodyColor: '#94a3b8',
        borderColor: '#334155',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
      },
    },
    scales: {
      x: {
        grid: {
          color: '#334155',
          drawBorder: false,
        },
        ticks: {
          color: '#64748b',
          font: {
            family: 'Inter',
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: '#334155',
          drawBorder: false,
        },
        ticks: {
          color: '#64748b',
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
      className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 flex flex-col hover:border-blue-500/30 transition-all"
    >
      {/* Header */}
      <h3 className="text-lg font-medium tracking-tight text-slate-100 mb-6">
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
