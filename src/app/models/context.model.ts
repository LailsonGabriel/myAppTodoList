import { ITask } from "./task.model";

export type GlobalContext = {
  tasks: ITask[];
  createNewTask: (task: string) => void;
  deleteTask: (id: number) => void;
  checkedOrNo: (id: number) => void;
};