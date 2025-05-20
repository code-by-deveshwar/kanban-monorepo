export interface Task {
  id: string;
  title: string;
  Id: string;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
  openCount?: number;
  approvedCount?: number;
}
export type ColumnMap = {
  [key: string]: Column;
};

export const statusColors: { [key: string]: string } = {
    "Open": "#FFD1B3",
    "In Progress": "#FFF0BE",
    "Rejected": "#FFCCCC",
    "Approved": "#BEFFC0",
  };