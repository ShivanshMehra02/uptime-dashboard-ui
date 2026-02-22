import { useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Donut chart component for alert rates distribution
export const DonutChart = ({ data }) => {
  // Calculate total and percentages
  const total = useMemo(() => {
    if (!data) return 100;
    return data.open + data.inProcess + data.acknowledged + data.onWatch;
  }, [data]);

  // Chart.js configuration with purple theme
  const chartData = useMemo(() => ({
    labels: ['Open', 'In Process', 'Acknowledged', 'On Watch'],
    datasets: [
      {
        data: data
          ? [data.open, data.inProcess, data.acknowledged, data.onWatch]
          : [25, 30, 25, 20],
        backgroundColor: ['#a855f7', '#ec4899', '#22d3ee', '#6366f1'],
        borderColor: '#1e1432',
        borderWidth: 4,
        hoverOffset: 8,
      },
    ],
  }), [data]);

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    cutout: '65%',
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
          generateLabels: (chart) => {
            const datasets = chart.data.datasets;
            return chart.data.labels.map((label, i) => {
              const value = datasets[0].data[i];
              const percentage = ((value / total) * 100).toFixed(1);
              return {
                text: `${label} (${percentage}%)`,
                fillStyle: datasets[0].backgroundColor[i],
                strokeStyle: datasets[0].borderColor,
                lineWidth: 0,
                hidden: false,
                index: i,
                pointStyle: 'circle',
              };
            });
          },
        },
      },
      tooltip: {
        backgroundColor: '#1e1432',
        titleColor: '#f5f3ff',
        bodyColor: '#c4b5fd',
        borderColor: '#581c87',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        callbacks: {
          label: (context) => {
            const value = context.parsed;
            const percentage = ((value / total) * 100).toFixed(1);
            return ` ${context.label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  }), [total]);

  return (
    <div
      data-testid="donut-chart-container"
      className="bg-[#1e1432]/80 border border-purple-800/30 rounded-2xl p-6 flex flex-col hover:border-purple-600/50 transition-all"
    >
      {/* Header */}
      <h3 className="text-lg font-medium tracking-tight text-white mb-6">
        Alert Rates Distribution
      </h3>

      {/* Chart */}
      <div className="flex-1 min-h-[300px] flex items-center justify-center">
        <div className="w-full max-w-[320px] h-[320px]">
          <Doughnut data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
