import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/auth.model";
import api from "../service/api";

class Auth { 
  async login(cpf: string): Promise<AxiosResponse<AuthResponse, AuthResponse>> {
    return api.post("/login", { cpf });
  }
}

export default new Auth();