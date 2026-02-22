import { Calendar } from 'lucide-react';
import { Progress } from '../ui/progress';

// Progress card component for "Last 7 Days" display
export const ProgressCard = ({ progress = 65 }) => {
  return (
    <div
      data-testid="progress-card"
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between h-32 relative overflow-hidden group hover:border-zinc-700 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-800/30 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-zinc-800/50 transition-all" />

      {/* Header */}
      <div className="flex items-center gap-2 relative z-10">
        <Calendar className="h-4 w-4 text-zinc-500" />
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          Last 7 Days
        </span>
      </div>

      {/* Progress section */}
      <div className="relative z-10 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-400">Progress</span>
          <span className="text-sm font-medium text-white">{progress}%</span>
        </div>
        <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div
            data-testid="progress-bar-fill"
            className="h-full bg-white rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
