import { Card, CardContent, CardTitle } from "@/components/ui/card";
import ColumnHeader from "./ColumnHeader";
import TaskCard from "./TaskCard";

interface ColumnCardProps {
    column: any;
    viewByEmployee: boolean;
    columnCounts: Record<string, number>;
    selectedTasks: string[];
    setSelectedTasks: React.Dispatch<React.SetStateAction<string[]>>;
    board: any;
    setBoard: (data: any) => void;
}

const ColumnCard: React.FC<ColumnCardProps> = ({
    column,
    viewByEmployee,
    columnCounts,
    selectedTasks,
    setSelectedTasks,
    board,
    setBoard,
}) => {
    const handleTaskSelection = (taskId: string) => {
        setSelectedTasks((prev) =>
            prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]
        );
    };

    const handleDragStart = (
        e: React.DragEvent<HTMLDivElement>,
        taskId: string
    ) => {
        const draggingTasks = selectedTasks.includes(taskId) ? selectedTasks : [taskId];
        e.dataTransfer.setData("taskIds", JSON.stringify(draggingTasks));
        e.dataTransfer.setData("sourceColumnId", column.id);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const taskIds: string[] = JSON.parse(e.dataTransfer.getData("taskIds"));
        const sourceColumnId = e.dataTransfer.getData("sourceColumnId");
        if (sourceColumnId === column.id) return;

        const sourceColumn = board[sourceColumnId];
        const tasksToMove = sourceColumn?.tasks.filter((task: { id: string }) =>
            taskIds.includes(task.id)
        );

        if (!tasksToMove || tasksToMove.length === 0) return;

        const updated = { ...board };
        updated[sourceColumnId].tasks = updated[sourceColumnId].tasks.filter(
            (task: { id: string }) => !taskIds.includes(task.id)
        );
        updated[column.id].tasks = [...updated[column.id].tasks, ...tasksToMove];

        setBoard(updated);
        setSelectedTasks([]);
    };

    return (
        <Card
            className="flex-1 min-w-[280px] bg-white dark:bg-background rounded-lg shadow-none p-4 h-full"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
        >
            <CardTitle>
                <ColumnHeader
                    title={column.title}
                    viewByEmployee={viewByEmployee}
                    columnCounts={columnCounts}
                    openCount={column.openCount}
                    approvedCount={column.approvedCount}
                />
            </CardTitle>

            <CardContent className="p-2 shadow-none rounded-md gap-2 flex flex-col mt-4 overflow-auto">
                {column.tasks.map((task: any) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        selected={selectedTasks.includes(task.id)}
                        onSelect={handleTaskSelection}
                        onDragStart={(e) => handleDragStart(e, task.id)}
                    />
                ))}
            </CardContent>
        </Card>
    );
};

export default ColumnCard;
