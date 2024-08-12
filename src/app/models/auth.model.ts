import { AxiosResponse } from "axios";
import { ITask } from "./task.model";

export interface AuthResponse {
  userId: number;
  tasks: ITask[];
}

export interface IAuth {
  cpf: string;
}

export type AuthRequest = {
  login: (cpf: string) => AxiosResponse<AuthResponse, AuthResponse>;
}