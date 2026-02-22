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
  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= Math.min(totalPages, 5); i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div
      data-testid="report-list-panel"
      className="bg-[#2e2e4a]/60 rounded-[10px] overflow-hidden flex flex-col h-full"
    >
      {/* Header */}
      <div className="p-5 border-b border-[#3e3e6a]/50">
        <h2 className="text-base font-semibold text-white mb-4">
          Select Report Dashboard
        </h2>

        {/* Search and Add button row */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a0a0c0]" />
            <Input
              data-testid="report-search-input"
              type="text"
              placeholder="Search reports..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="pl-10 bg-[#1f1f33] border-[#3e3e6a]/50 focus:border-[#4a4aff] focus:ring-0 text-white placeholder:text-[#6e6e8a] rounded-lg h-10"
            />
          </div>
          <Button
            data-testid="add-report-button"
            onClick={onAddClick}
            className="bg-[#4a4aff] text-white hover:bg-[#5a5aff] font-medium transition-all rounded-lg px-4 py-2 h-10"
          >
            <Plus className="h-4 w-4 mr-1" />
            ADD
          </Button>
        </div>
      </div>

      {/* Report list with scroll */}
      <div
        data-testid="report-list-container"
        className="flex-1 overflow-y-auto p-3 space-y-1 min-h-0"
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
          <div className="flex flex-col items-center justify-center py-12 text-[#6e6e8a]">
            <Search className="h-8 w-8 mb-3" />
            <p className="text-sm">No reports found</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div
          data-testid="pagination-controls"
          className="p-4 border-t border-[#3e3e6a]/50 flex items-center justify-center gap-2"
        >
          <Button
            data-testid="pagination-prev"
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-transparent text-[#a0a0c0] hover:bg-[#3e3e6a]/50 border-[#4e4e6a] disabled:opacity-30 disabled:cursor-not-allowed h-8 w-8 p-0 rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          {getPageNumbers().map((page) => (
            <Button
              key={page}
              data-testid={`pagination-page-${page}`}
              variant="outline"
              size="sm"
              onClick={() => onPageChange(page)}
              className={`h-8 w-8 p-0 rounded-full text-sm font-medium ${
                currentPage === page
                  ? 'bg-[#4a4aff] text-white border-[#4a4aff]'
                  : 'bg-transparent text-[#a0a0c0] border-[#4e4e6a] hover:bg-[#3e3e6a]/50'
              }`}
            >
              {page}
            </Button>
          ))}
          
          <Button
            data-testid="pagination-next"
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-transparent text-[#a0a0c0] hover:bg-[#3e3e6a]/50 border-[#4e4e6a] disabled:opacity-30 disabled:cursor-not-allowed h-8 w-8 p-0 rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ReportList;
