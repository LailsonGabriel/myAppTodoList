import { useState } from "react";
import { ILoginViewModel } from "../models/login.model";
import { useRouter } from "expo-router";
import authRepository from "../repositories/auth.repository";
import { useGlobalContext } from "../context/GlobalContext";
import { ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LoginViewModel = (): ILoginViewModel => {
  const { saveTasks } = useGlobalContext();
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

  const onSubmit = async () => {
    if(cpf.length < 14) return ToastAndroid.show("Digite um CPF válido!", ToastAndroid.SHORT);

    setLoading(true);
    await AsyncStorage.setItem('@cpf', cpf);
    authRepository.login(cpf).then((response) => {
      const { tasks, userId } = response.data;
      console.log(response.data);
      saveTasks(tasks, userId);
      router.push('home');
    }).catch((err) => {
      ToastAndroid.show(err.message ?? "Algo deu errado...", ToastAndroid.SHORT);
    }).finally(() => setLoading(false));
  };

  return {
    cpf, 
    setCpf: typeCpf,
    onSubmit,
    loading,
    setLoading
  }
};