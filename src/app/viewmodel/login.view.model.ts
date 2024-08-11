import { useState } from "react";
import { ILoginViewModel } from "../models/login.model";
import { useRouter } from "expo-router";

export const LoginViewModel = (): ILoginViewModel => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);	
  const [cpf, setCpf] = useState<string>('');

  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, '') // Remove tudo que não é dígito
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona um ponto após os três primeiros dígitos
      .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona outro ponto após o segundo grupo de três dígitos
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona um traço antes dos dois últimos dígitos
  };

  const typeCpf = (cpf: string) => {
    setCpf(formatCPF(cpf));
  };

  const onSubmit = () => {
    setLoading(true);
    // router.push('login');
  };

  return {
    cpf, 
    setCpf: typeCpf,
    onSubmit,
    loading,
    setLoading
  }
};