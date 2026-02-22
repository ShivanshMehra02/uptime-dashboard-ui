import { FileText } from 'lucide-react';

// Individual report item in the list
export const ReportItem = ({ report, isSelected, onSelect }) => {
  return (
    <button
      data-testid={`report-item-${report.id}`}
      onClick={() => onSelect(report.id)}
      className={`w-full text-left p-4 rounded-lg transition-all border ${
        isSelected
          ? 'bg-zinc-800 border-zinc-700 shadow-[0_0_15px_rgba(255,255,255,0.05)]'
          : 'bg-zinc-900/50 border-zinc-800/50 hover:bg-zinc-800/50 hover:border-zinc-700'
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div
          className={`mt-0.5 h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
            isSelected ? 'bg-white' : 'bg-zinc-800'
          }`}
        >
          <FileText
            className={`h-4 w-4 ${isSelected ? 'text-zinc-950' : 'text-zinc-400'}`}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3
            className={`text-sm font-medium truncate ${
              isSelected ? 'text-white' : 'text-zinc-300'
            }`}
          >
            {report.title}
          </h3>
          <p className="text-xs text-zinc-500 truncate mt-0.5">
            {report.subtitle}
          </p>
        </div>

        {/* Selection indicator */}
        {isSelected && (
          <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
        )}
      </div>
    </button>
  );
};

export default ReportItem;
