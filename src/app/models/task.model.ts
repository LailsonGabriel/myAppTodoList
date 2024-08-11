export interface ITask {
  id: number;
  title: string;
  checked: boolean;
}

export interface ITasks extends ITask {
  setChecked?: () => void;
  handleDelete?: () => void;
}