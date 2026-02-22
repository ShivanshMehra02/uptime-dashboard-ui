import { AlertTriangle, TrendingUp, Clock } from 'lucide-react';

// Metric card component for displaying KPIs
export const MetricCard = ({ title, value, suffix = '', type = 'default', icon: Icon }) => {
  // Determine text color based on type
  const getValueColor = () => {
    switch (type) {
      case 'danger':
        return 'text-rose-500';
      case 'success':
        return 'text-emerald-500';
      case 'warning':
        return 'text-amber-500';
      default:
        return 'text-white';
    }
  };

  // Get default icon based on title
  const getIcon = () => {
    if (Icon) return Icon;
    if (title.toLowerCase().includes('alert')) return AlertTriangle;
    if (title.toLowerCase().includes('rate')) return TrendingUp;
    if (title.toLowerCase().includes('oldest')) return Clock;
    return AlertTriangle;
  };

  const IconComponent = getIcon();

  return (
    <div
      data-testid={`metric-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between h-32 relative overflow-hidden group hover:border-zinc-700 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-800/30 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-zinc-800/50 transition-all" />

      {/* Header with icon */}
      <div className="flex items-center gap-2 relative z-10">
        <IconComponent className="h-4 w-4 text-zinc-500" />
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          {title}
        </span>
      </div>

      {/* Value */}
      <div className="relative z-10">
        <span className={`text-4xl font-bold tracking-tighter ${getValueColor()}`}>
          {value}
        </span>
        {suffix && (
          <span className={`text-2xl font-medium ml-1 ${getValueColor()}`}>
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
