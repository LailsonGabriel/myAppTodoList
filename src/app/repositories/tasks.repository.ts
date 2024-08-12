import { AxiosResponse } from "axios";
import api from "../service/api";
import { ITask, ITaskResponse, ITaskResponseCreate } from "../models/task.model";

class Tasks {
  async createTask(task: ITask, cpf: string): Promise<AxiosResponse<ITaskResponseCreate, ITaskResponseCreate>> {
    return api.post('/tasks', { cpf: cpf, tasks: [task] });
  }
  
  async deleteTask(taskId: number): Promise<void> {
    return api.delete(`/tasks/${taskId}`);
  }

  async toggleTaskChecked(taskId: number): Promise<AxiosResponse<ITaskResponse, ITaskResponse>> {
    return api.patch(`/tasks/toggle/${taskId}`);
  }
}