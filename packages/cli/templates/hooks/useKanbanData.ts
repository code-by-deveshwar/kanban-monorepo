import { useState } from "react";

type Task = {
  id: string;
  title: string;
  jammeId: string;
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
        { id: "1", title: "Review campaign brief", jammeId: "JAM-101" },
        { id: "2", title: "Upload ad copy", jammeId: "JAM-102" },
      ],
    },
    inprogress: {
      id: "inprogress",
      title: "In Progress",
      tasks: [{ id: "3", title: "Create video ad", jammeId: "JAM-103" }],
    },
    rejected: {
      id: "rejected",
      title: "Rejected",
      tasks: [
        { id: "4", title: "Fix ad compliance issue", jammeId: "JAM-104" },
      ],
    },
    approved: {
      id: "approved",
      title: "Approved",
      tasks: [{ id: "5", title: "Finalize graphics", jammeId: "JAM-105" }],
    },
  });

  const [employees, setEmployees] = useState<Board>({
    emp1: {
      id: "emp1",
      title: "Alice Johnson",
      tasks: [{ id: "6", title: "Design logo", jammeId: "JAM-106" }],
      approvedCount: 1,
      openCount: 1,
    },
    emp2: {
      id: "emp2",
      title: "Bob Smith",
      tasks: [{ id: "7", title: "Write copy", jammeId: "JAM-107" }],
      approvedCount: 0,
      openCount: 1,
    },
    emp3: {
      id: "emp3",
      title: "Charlie Lee",
      tasks: [{ id: "8", title: "Create animation", jammeId: "JAM-108" }],
      approvedCount: 0,
      openCount: 1,
    },
    emp4: {
      id: "emp4",
      title: "Dana White",
      tasks: [
        { id: "9", title: "Prepare budget", jammeId: "JAM-109" },
        { id: "10", title: "Schedule meeting with team", jammeId: "JAM-110" },
        { id: "11", title: "Review marketing strategy", jammeId: "JAM-111" },
        { id: "12", title: "Prepare quarterly report", jammeId: "JAM-112" },
        { id: "13", title: "Update website content", jammeId: "JAM-113" },
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
          jammeId: "JAM-114",
        },
        { id: "15", title: "Organize team-building event", jammeId: "JAM-115" },
        { id: "16", title: "Finalize product launch plan", jammeId: "JAM-116" },
      ],
      approvedCount: 1,
      openCount: 2,
    },
    emp6: {
      id: "emp6",
      title: "Chris Hemsworth",
      tasks: [
        { id: "17", title: "Prepare financial forecast", jammeId: "JAM-117" },
        {
          id: "18",
          title: "Evaluate new software solutions",
          jammeId: "JAM-118",
        },
        { id: "19", title: "Host client meeting", jammeId: "JAM-119" },
      ],
      approvedCount: 3,
      openCount: 0,
    },
    emp7: {
      id: "emp7",
      title: "Emma Watson",
      tasks: [
        { id: "20", title: "Oversee HR compliance audit", jammeId: "JAM-120" },
        {
          id: "21",
          title: "Implement diversity initiatives",
          jammeId: "JAM-121",
        },
        {
          id: "22",
          title: "Conduct employee satisfaction survey",
          jammeId: "JAM-122",
        },
        { id: "23", title: "Plan annual company retreat", jammeId: "JAM-123" },
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
