import { useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Donut chart component for alert rates distribution - matching reference design
export const DonutChart = ({ data }) => {
  // Calculate total and percentages
  const total = useMemo(() => {
    if (!data) return 100;
    return data.open + data.inProcess + data.acknowledged + data.onWatch;
  }, [data]);

  // Chart.js configuration matching reference colors
  const chartData = useMemo(() => ({
    labels: ['Open', 'In Process', 'Acknowledged', 'On Watch'],
    datasets: [
      {
        data: data
          ? [data.open, data.inProcess, data.acknowledged, data.onWatch]
          : [25, 30, 25, 20],
        backgroundColor: ['#80e0ff', '#a070ff', '#c0a0ff', '#e070a0'],
        borderColor: '#1f1f33',
        borderWidth: 3,
        hoverOffset: 6,
      },
    ],
  }), [data]);

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
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
        backgroundColor: '#2e2e4a',
        titleColor: '#ffffff',
        bodyColor: '#c0c0e0',
        borderColor: '#4e4e6a',
        borderWidth: 1,
        cornerRadius: 6,
        padding: 10,
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
      className="bg-[#2e2e4a]/60 rounded-[10px] p-5 flex flex-col"
    >
      {/* Header */}
      <h3 className="text-sm font-medium text-white mb-4">
        Alert Rates Distribution
      </h3>

      {/* Chart */}
      <div className="flex-1 min-h-[280px] flex items-center justify-center">
        <div className="w-full max-w-[280px] h-[280px]">
          <Doughnut data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
