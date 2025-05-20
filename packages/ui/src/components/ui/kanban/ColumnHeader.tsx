import { statusColors } from "@/types/types";

interface ColumnHeaderProps {
  title: string;
  viewByEmployee: boolean;
  columnCounts: Record<string, number>;
  openCount?: number;
  approvedCount?: number;
}

const ColumnHeader: React.FC<ColumnHeaderProps> = ({
  title,
  viewByEmployee,
  columnCounts,
  openCount,
  approvedCount,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {!viewByEmployee && (
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: statusColors[title] || "#ddd" }}
          />
        )}
        <span className="capitalize">{title}</span>
      </div>

      {viewByEmployee ? (
        <div className="flex gap-2">
          <span className="px-3 py-1 text-sm font-semibold rounded-full bg-orange-200">
            {openCount || 0}
          </span>
          <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-200">
            {approvedCount || 0}
          </span>
        </div>
      ) : (
        <span className="text-gray-500">({columnCounts[title] || 0})</span>
      )}
    </div>
  );
};

export default ColumnHeader;
