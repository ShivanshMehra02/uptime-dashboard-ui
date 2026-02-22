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
      className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col h-full"
    >
      {/* Header */}
      <div className="p-5 border-b border-zinc-800">
        <h2 className="text-lg font-semibold tracking-tight text-white mb-4">
          Select Report Dashboard
        </h2>

        {/* Search and Add button row */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input
              data-testid="report-search-input"
              type="text"
              placeholder="Search reports..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="pl-10 bg-zinc-950 border-zinc-800 focus:border-white focus:ring-0 text-white placeholder:text-zinc-600 rounded-lg h-10"
            />
          </div>
          <Button
            data-testid="add-report-button"
            onClick={onAddClick}
            className="bg-white text-zinc-950 hover:bg-zinc-200 shadow-sm font-medium transition-colors rounded-lg px-4 py-2 h-10"
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
          <div className="flex flex-col items-center justify-center py-12 text-zinc-500">
            <Search className="h-8 w-8 mb-3" />
            <p className="text-sm">No reports found</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div
          data-testid="pagination-controls"
          className="p-4 border-t border-zinc-800 flex items-center justify-between"
        >
          <span className="text-xs text-zinc-500">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex gap-2">
            <Button
              data-testid="pagination-prev"
              variant="outline"
              size="sm"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-zinc-800 text-zinc-50 hover:bg-zinc-700 border-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed h-8 w-8 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              data-testid="pagination-next"
              variant="outline"
              size="sm"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-zinc-800 text-zinc-50 hover:bg-zinc-700 border-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed h-8 w-8 p-0"
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
