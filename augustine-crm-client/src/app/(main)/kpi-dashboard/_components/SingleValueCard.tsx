interface SingleValueCardProps {
  title: string;
  value: number | string;
  suffix?: string;
}

export const SingleValueCard = ({ title, value, suffix }: SingleValueCardProps) => (
  <div className="bg-gray-800 text-white p-4 rounded shadow">
    <div className="text-sm text-gray-400">{title}</div>
    <div className="text-2xl font-bold">
      {value}
      {suffix}
    </div>
  </div>
);
