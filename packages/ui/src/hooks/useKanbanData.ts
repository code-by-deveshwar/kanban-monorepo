import { useState } from "react";

type Task = {
  id: string;
  title: string;
  taskCode: string;
};

type Column = {
  id: string;
  title: string;
  tasks: Task[];
  boardId?: string;
  approvedCount?: number;
  openCount?: number;
};

type Board = Record<string, Column>;

export const useKanbanData = () => {
  const [board, setBoard] = useState<Board>({
    open: {
      id: "open",
      title: "Open",
      tasks: [
        { id: "1", title: "Review campaign brief", taskCode: "TKT-101" },
        { id: "2", title: "Upload ad copy", taskCode: "TKT-102" },
      ],
    },
    inprogress: {
      id: "inprogress",
      title: "In Progress",
      tasks: [{ id: "3", title: "Create video ad", taskCode: "TKT-103" }],
    },
    rejected: {
      id: "rejected",
      title: "Rejected",
      tasks: [
        { id: "4", title: "Fix ad compliance issue", taskCode: "TKT-104" },
      ],
    },
    approved: {
      id: "approved",
      title: "Approved",
      tasks: [{ id: "5", title: "Finalize graphics", taskCode: "TKT-105" }],
    },
  });

  const [employees, setEmployees] = useState<Board>({
    emp1: {
      id: "emp1",
      title: "Alice Johnson",
      tasks: [{ id: "6", title: "Design logo", taskCode: "TKT-106" }],
      approvedCount: 1,
      openCount: 1,
    },
    emp2: {
      id: "emp2",
      title: "Bob Smith",
      tasks: [{ id: "7", title: "Write copy", taskCode: "TKT-107" }],
      approvedCount: 0,
      openCount: 1,
    },
    emp3: {
      id: "emp3",
      title: "Charlie Lee",
      tasks: [{ id: "8", title: "Create animation", taskCode: "TKT-108" }],
      approvedCount: 0,
      openCount: 1,
    },
    emp4: {
      id: "emp4",
      title: "Dana White",
      tasks: [
        { id: "9", title: "Prepare budget", taskCode: "TKT-109" },
        { id: "10", title: "Schedule meeting with team", taskCode: "TKT-110" },
        { id: "11", title: "Review marketing strategy", taskCode: "TKT-111" },
        { id: "12", title: "Prepare quarterly report", taskCode: "TKT-112" },
        { id: "13", title: "Update website content", taskCode: "TKT-113" },
      ],
      approvedCount: 2,
      openCount: 3,
    },
    emp5: {
      id: "emp5",
      title: "Alex Morgan",
      tasks: [
        {
          id: "14",
          title: "Conduct team performance review",
          taskCode: "TKT-114",
        },
        { id: "15", title: "Organize team-building event", taskCode: "TKT-115" },
        { id: "16", title: "Finalize product launch plan", taskCode: "TKT-116" },
      ],
      approvedCount: 1,
      openCount: 2,
    },
    emp6: {
      id: "emp6",
      title: "Chris Hemsworth",
      tasks: [
        { id: "17", title: "Prepare financial forecast", taskCode: "TKT-117" },
        {
          id: "18",
          title: "Evaluate new software solutions",
          taskCode: "TKT-118",
        },
        { id: "19", title: "Host client meeting", taskCode: "TKT-119" },
      ],
      approvedCount: 3,
      openCount: 0,
    },
    emp7: {
      id: "emp7",
      title: "Emma Watson",
      tasks: [
        { id: "20", title: "Oversee HR compliance audit", taskCode: "TKT-120" },
        {
          id: "21",
          title: "Implement diversity initiatives",
          taskCode: "TKT-121",
        },
        {
          id: "22",
          title: "Conduct employee satisfaction survey",
          taskCode: "TKT-122",
        },
        { id: "23", title: "Plan annual company retreat", taskCode: "TKT-123" },
      ],
      approvedCount: 2,
      openCount: 2,
    },
  });

  const [columnCounts] = useState<Record<string, number>>({
    Open: 2,
    InProgress: 1,
    Rejected: 1,
    Approved: 1,
  });

  return {
    board,
    setBoard,
    columnCounts,
    employees,
    setEmployees,
    boardLoading: false,
    employeesLoading: false,
    refetchBoard: () => {},
    refetchEmployees: () => {},
  };
};
