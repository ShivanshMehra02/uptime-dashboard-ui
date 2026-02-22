import { Search, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ReportItem } from './ReportItem';

// Report list panel component with search, list, and pagination
export const ReportList = ({
  reports,
  selectedReportId,
  searchQuery,
  currentPage,
  totalPages,
  onSearch,
  onSelect,
  onPageChange,
  onAddClick,
}) => {
  return (
    <div
      data-testid="report-list-panel"
      className="bg-[#1e1432]/80 border border-purple-800/30 rounded-2xl overflow-hidden flex flex-col h-full"
    >
      {/* Header */}
      <div className="p-5 border-b border-purple-800/30">
        <h2 className="text-lg font-semibold tracking-tight text-white mb-4">
          Select Report Dashboard
        </h2>

        {/* Search and Add button row */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-400/50" />
            <Input
              data-testid="report-search-input"
              type="text"
              placeholder="Search reports..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="pl-10 bg-purple-950/30 border-purple-800/30 focus:border-purple-500 focus:ring-0 text-white placeholder:text-purple-400/50 rounded-xl h-10"
            />
          </div>
          <Button
            data-testid="add-report-button"
            onClick={onAddClick}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/20 font-medium transition-all rounded-xl px-4 py-2 h-10"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>

      {/* Report list with scroll */}
      <div
        data-testid="report-list-container"
        className="flex-1 overflow-y-auto p-3 space-y-2 min-h-0"
      >
        {reports.length > 0 ? (
          reports.map((report) => (
            <ReportItem
              key={report.id}
              report={report}
              isSelected={report.id === selectedReportId}
              onSelect={onSelect}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-purple-400/50">
            <Search className="h-8 w-8 mb-3" />
            <p className="text-sm">No reports found</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div
          data-testid="pagination-controls"
          className="p-4 border-t border-purple-800/30 flex items-center justify-between"
        >
          <span className="text-xs text-purple-400/70">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex gap-2">
            <Button
              data-testid="pagination-prev"
              variant="outline"
              size="sm"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-purple-900/30 text-purple-200 hover:bg-purple-800/40 border-purple-700/30 disabled:opacity-50 disabled:cursor-not-allowed h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              data-testid="pagination-next"
              variant="outline"
              size="sm"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-purple-900/30 text-purple-200 hover:bg-purple-800/40 border-purple-700/30 disabled:opacity-50 disabled:cursor-not-allowed h-8 w-8 p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportList;
