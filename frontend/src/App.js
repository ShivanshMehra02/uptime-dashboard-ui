import { useState } from 'react';
import "@/App.css";

// Layout components
import { Navbar } from './components/layout/Navbar';
import { MetricCard } from './components/layout/MetricCard';
import { ProgressCard } from './components/layout/ProgressCard';

// Report components
import { ReportList } from './components/reports/ReportList';

// Chart components
import { BarChart } from './components/charts/BarChart';
import { DonutChart } from './components/charts/DonutChart';

// Modal components
import { AddReportModal } from './components/modal/AddReportModal';

// Custom hooks
import { useReports } from './hooks/useReports';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use custom hook for report management
  const {
    reports,
    selectedReport,
    selectedReportId,
    searchQuery,
    currentPage,
    totalPages,
    addReport,
    selectReport,
    handleSearch,
    goToPage,
  } = useReports();

  // Handle adding a new report
  const handleAddReport = (title, subtitle) => {
    addReport(title, subtitle);
  };

  // Get metrics from selected report or use defaults
  const metrics = selectedReport?.metrics || {
    openAlerts: 0,
    closingRate: 0,
    oldestAlert: 0,
  };

  // Calculate progress based on closing rate
  const progress = Math.min(Math.round(metrics.closingRate), 100);

  return (
    <div data-testid="dashboard-app" className="min-h-screen bg-zinc-950">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="p-6 md:p-8">
        {/* Header Metrics Section */}
        <section
          data-testid="metrics-section"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          <ProgressCard progress={progress} />
          <MetricCard
            title="Open Alerts"
            value={metrics.openAlerts}
            type="default"
          />
          <MetricCard
            title="Closing Rate"
            value={metrics.closingRate}
            suffix="%"
            type="success"
          />
          <MetricCard
            title="Oldest Unacknowledged Alert"
            value={metrics.oldestAlert}
            suffix=" Days"
            type="danger"
          />
        </section>

        {/* Main Two-Column Layout */}
        <section
          data-testid="main-content-section"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
        >
          {/* Left Panel - Report List */}
          <div className="lg:col-span-4 xl:col-span-3">
            <ReportList
              reports={reports}
              selectedReportId={selectedReportId}
              searchQuery={searchQuery}
              currentPage={currentPage}
              totalPages={totalPages}
              onSearch={handleSearch}
              onSelect={selectReport}
              onPageChange={goToPage}
              onAddClick={() => setIsModalOpen(true)}
            />
          </div>

          {/* Right Panel - Charts */}
          <div className="lg:col-span-8 xl:col-span-9">
            {selectedReport ? (
              <div
                data-testid="charts-section"
                className="grid grid-cols-1 xl:grid-cols-2 gap-6"
              >
                <BarChart data={selectedReport.barChartData} />
                <DonutChart data={selectedReport.donutChartData} />
              </div>
            ) : (
              <div
                data-testid="no-report-selected"
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-12 flex flex-col items-center justify-center min-h-[400px]"
              >
                <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                  <span className="text-2xl text-zinc-500">📊</span>
                </div>
                <h3 className="text-lg font-medium text-zinc-300 mb-2">
                  No Report Selected
                </h3>
                <p className="text-sm text-zinc-500 text-center max-w-sm">
                  Select a report from the list to view detailed metrics and charts.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Add Report Modal */}
      <AddReportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddReport}
      />
    </div>
  );
}

export default App;
