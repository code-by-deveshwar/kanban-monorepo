export interface Task {
  id: string;
  title: string;
  jammeId: string;
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