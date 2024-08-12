export interface ITask {
  id?: number;
  title: string;
  checked?: boolean;
}

export interface ITasks extends ITask {
  setChecked?: () => void;
  handleDelete?: () => void;
}

export interface ITaskResponse {
  title: string;
  checked: boolean;
  id: number;
}

export interface ITaskResponseCreate extends ITaskResponse {
  user: {
    id: number;
    cpf: string;
  };
}

export interface TaskResponse {
  
}