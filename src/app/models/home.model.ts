import { ITask } from "./task.model";

export interface IHomeViewModel {
  tasks: ITask[];
  createNewTask: () => void;
  search: string;
  setSearch: (search: string) => void;
  deleteTask: (id: number) => void;
  checkedOrNo: (id: number) => void;
}