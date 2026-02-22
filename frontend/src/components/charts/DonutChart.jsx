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

  // Chart.js configuration
  const chartData = useMemo(() => ({
    labels: ['Open', 'In Process', 'Acknowledged', 'On Watch'],
    datasets: [
      {
        data: data
          ? [data.open, data.inProcess, data.acknowledged, data.onWatch]
          : [25, 30, 25, 20],
        backgroundColor: ['#3b82f6', '#06b6d4', '#10b981', '#475569'],
        borderColor: '#1e293b',
        borderWidth: 3,
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
          color: '#94a3b8',
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
        backgroundColor: '#1e293b',
        titleColor: '#f8fafc',
        bodyColor: '#94a3b8',
        borderColor: '#334155',
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
      className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 flex flex-col hover:border-blue-500/30 transition-all"
    >
      {/* Header */}
      <h3 className="text-lg font-medium tracking-tight text-slate-100 mb-6">
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
