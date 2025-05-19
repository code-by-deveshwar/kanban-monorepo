interface TaskCardProps {
    task: any;
    selected: boolean;
    onSelect: (id: string) => void;
    onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  }
  
  const TaskCard: React.FC<TaskCardProps> = ({
    task,
    selected,
    onSelect,
    onDragStart,
  }) => {
    return (
      <div
        draggable
        onClick={() => onSelect(task.id)}
        onDragStart={onDragStart}
        className={`p-4 border bg-gray-50 dark:bg-background border-gray-300 rounded-md shadow-md cursor-pointer ${
          selected ? "border-blue-500 bg-orange-500 dark:bg-blue-900" : ""
        }`}
      >
        <p className="font-semibold">{task.title}</p>
        <p className="text-sm text-gray-600">Ref No: {task.jammeId}</p>
      </div>
    );
  };
  
  export default TaskCard;
  