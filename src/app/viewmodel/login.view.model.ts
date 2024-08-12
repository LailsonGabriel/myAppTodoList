import { useState } from "react";
import { ILoginViewModel } from "../models/login.model";
import { useRouter } from "expo-router";

export const LoginViewModel = (): ILoginViewModel => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);	
  const [cpf, setCpf] = useState<string>('');

  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  const typeCpf = (cpf: string) => {
    setCpf(formatCPF(cpf));
  };

  const onSubmit = () => {
    setLoading(true);
    router.push('home');
    setLoading(true);
  };

  return {
    cpf, 
    setCpf: typeCpf,
    onSubmit,
    loading,
    setLoading
  }
};