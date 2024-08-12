import { ITask } from "./task.model";

export type GlobalContext = {
  tasks: ITask[];
  createNewTask: (task: string, id?: number) => void;
  deleteTask: (id: number) => void;
  toggleTaskChecked: (id: number) => void;
  setTasks: (tasks: ITask[]) => void;
  saveTasks: (tasks: ITask[]) => void;
  setUserId: (userId: number) => void;
  getUserId: () => Promise<number | null>;
  getCpf: () => Promise<string | null>;
};