import { useState, useMemo, useCallback } from "react";
import { useKanbanData } from "@/hooks/useKanbanData";
import SkeletonLoader from "@/pages/skeletonLoader";
import ViewToggle from "./ViewToggle";
import ColumnCard from "./ColumnCard";

const KanbanBoard = () => {
  const {
    board,
    setBoard,
    columnCounts,
    employees,
    setEmployees,
    boardLoading,
    employeesLoading,
  } = useKanbanData();

  const [viewByEmployee, setViewByEmployee] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

  const toggleView = useCallback(() => {
    setViewByEmployee((prev) => !prev);
  }, []);

  const columnsToRender = useMemo(() => {
    return viewByEmployee ? Object.values(employees) : Object.values(board);
  }, [viewByEmployee, board, employees]);

  if (boardLoading || employeesLoading) return <SkeletonLoader fullPage />;

  return (
    <div className="p-4 lg:p-8">
      <div className="flex items-end justify-end py-4">
        <ViewToggle viewByEmployee={viewByEmployee} toggleView={toggleView} />
      </div>
      <div className="flex gap-4 w-full min-h-screen overflow-x-auto">
        {columnsToRender.map((column) => (
          <ColumnCard
            key={column.id}
            column={column}
            viewByEmployee={viewByEmployee}
            columnCounts={columnCounts}
            selectedTasks={selectedTasks}
            setSelectedTasks={setSelectedTasks}
            board={viewByEmployee ? employees : board}
            setBoard={viewByEmployee ? setEmployees : setBoard}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
