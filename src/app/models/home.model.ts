import { ITask } from "./task.model";

export interface IHomeViewModel {
  createNewTask: () => void;
  search: string;
  setSearch: (search: string) => void;
}