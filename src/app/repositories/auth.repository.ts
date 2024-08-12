import { AxiosResponse } from "axios";
import { AuthRequest, AuthResponse } from "../models/auth.model";
import api from "../service/api";

class Auth { 
  async login(cpf: string): Promise<AuthRequest> {
    return api.post("/login", { cpf });
  }
}