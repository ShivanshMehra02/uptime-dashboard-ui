// Mock data for the dashboard application
// Each report contains metrics, bar chart data, and donut chart data

const generateBarChartData = () => {
  const units = ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6'];
  return {
    labels: units,
    inProcess: units.map(() => Math.floor(Math.random() * 30) + 5),
    unacknowledged: units.map(() => Math.floor(Math.random() * 25) + 3),
    onWatch: units.map(() => Math.floor(Math.random() * 20) + 2),
  };
};

const generateDonutChartData = () => {
  const open = Math.floor(Math.random() * 30) + 10;
  const inProcess = Math.floor(Math.random() * 25) + 15;
  const acknowledged = Math.floor(Math.random() * 20) + 20;
  const onWatch = Math.floor(Math.random() * 15) + 5;
  return { open, inProcess, acknowledged, onWatch };
};

export const initialReports = [
  {
    id: 1,
    title: 'Number of Open Alerts',
    subtitle: 'Real-time alert monitoring dashboard',
    metrics: { openAlerts: 84, closingRate: 44.5, oldestAlert: 128 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 2,
    title: 'Closing Rate %',
    subtitle: 'Alert resolution efficiency metrics',
    metrics: { openAlerts: 56, closingRate: 67.2, oldestAlert: 45 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 3,
    title: 'Oldest Unacknowledged Alert',
    subtitle: 'Critical alerts requiring attention',
    metrics: { openAlerts: 23, closingRate: 78.9, oldestAlert: 256 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 4,
    title: 'Oldest Alert - Unit 1',
    subtitle: 'Unit 1 specific alert analysis',
    metrics: { openAlerts: 12, closingRate: 82.3, oldestAlert: 34 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 5,
    title: 'Oldest Alert - Unit 2',
    subtitle: 'Unit 2 specific alert analysis',
    metrics: { openAlerts: 18, closingRate: 71.5, oldestAlert: 67 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 6,
    title: 'Oldest Alert - Unit 3',
    subtitle: 'Unit 3 specific alert analysis',
    metrics: { openAlerts: 9, closingRate: 89.1, oldestAlert: 12 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 7,
    title: 'Critical System Alerts',
    subtitle: 'High priority system-wide alerts',
    metrics: { openAlerts: 45, closingRate: 52.8, oldestAlert: 189 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 8,
    title: 'Performance Degradation',
    subtitle: 'System performance monitoring',
    metrics: { openAlerts: 31, closingRate: 63.4, oldestAlert: 78 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 9,
    title: 'Security Breach Attempts',
    subtitle: 'Security incident tracking',
    metrics: { openAlerts: 7, closingRate: 94.2, oldestAlert: 5 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 10,
    title: 'User Login Failures',
    subtitle: 'Authentication failure analysis',
    metrics: { openAlerts: 29, closingRate: 58.7, oldestAlert: 92 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 11,
    title: 'API Latency Spikes',
    subtitle: 'API response time monitoring',
    metrics: { openAlerts: 15, closingRate: 76.3, oldestAlert: 23 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 12,
    title: 'Database Connection Errors',
    subtitle: 'Database health monitoring',
    metrics: { openAlerts: 8, closingRate: 91.5, oldestAlert: 14 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 13,
    title: 'Memory Usage Alerts',
    subtitle: 'Server memory utilization',
    metrics: { openAlerts: 22, closingRate: 69.8, oldestAlert: 56 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 14,
    title: 'Disk Space Warnings',
    subtitle: 'Storage capacity monitoring',
    metrics: { openAlerts: 11, closingRate: 85.2, oldestAlert: 18 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 15,
    title: 'Network Connectivity',
    subtitle: 'Network health and uptime',
    metrics: { openAlerts: 6, closingRate: 92.7, oldestAlert: 8 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 16,
    title: 'SSL Certificate Expiry',
    subtitle: 'Certificate renewal tracking',
    metrics: { openAlerts: 3, closingRate: 97.1, oldestAlert: 2 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 17,
    title: 'Backup Failure Alerts',
    subtitle: 'Backup job status monitoring',
    metrics: { openAlerts: 14, closingRate: 73.6, oldestAlert: 41 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 18,
    title: 'Queue Processing Delays',
    subtitle: 'Message queue health',
    metrics: { openAlerts: 19, closingRate: 66.9, oldestAlert: 63 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 19,
    title: 'Third-Party API Failures',
    subtitle: 'External service monitoring',
    metrics: { openAlerts: 25, closingRate: 61.4, oldestAlert: 87 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
  {
    id: 20,
    title: 'Load Balancer Issues',
    subtitle: 'Traffic distribution monitoring',
    metrics: { openAlerts: 5, closingRate: 93.8, oldestAlert: 6 },
    barChartData: generateBarChartData(),
    donutChartData: generateDonutChartData(),
  },
];

// Storage key for localStorage
export const STORAGE_KEY = 'dashboard_reports';

// Helper to get reports from localStorage or return initial data
export const getStoredReports = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error reading from localStorage:', error);
  }
  return initialReports;
};

// Helper to save reports to localStorage
export const saveReports = (reports) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};
