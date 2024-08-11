import { useState } from "react";
import { ILoginViewModel } from "../models/login.model";

export const LoginViewModel = (): ILoginViewModel => {
  const [cpf, setCpf] = useState<string>('');


  return {
    cpf, 
    setCpf
  }
};