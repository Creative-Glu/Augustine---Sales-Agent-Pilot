import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: string;
}

const statusColors: Record<string, string> = {
  Running: 'bg-green-100 text-green-700',
  Draft: 'bg-yellow-100 text-yellow-700',
  Default: 'bg-gray-100 text-gray-700',
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const colorClass = statusColors[status] || statusColors['Default'];

  return (
    <span
      className={cn('text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap', colorClass)}
    >
      {status}
    </span>
  );
}
