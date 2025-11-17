export interface TableHeaderColumn {
  label: string;
  align?: 'left' | 'center' | 'right';
}

interface TableHeaderProps {
  columns: TableHeaderColumn[];
}

export const TableHeader = ({ columns }: TableHeaderProps) => {
  return (
    <thead>
      <tr className="border-b border-gray-200">
        {columns.map((col, idx) => (
          <th
            key={idx}
            className={`py-3 px-4 text-sm font-semibold text-card-foreground text-${col.align ?? 'left'}`}
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};
