import { useState } from "react";
import { ILoginViewModel } from "../models/login.model";
import { useRouter } from "expo-router";
import authRepository from "../repositories/auth.repository";
import { useGlobalContext } from "../context/GlobalContext";
import { ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LoginViewModel = (): ILoginViewModel => {
  const { setTasks, saveTasks, setUserId } = useGlobalContext();
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
    setLoading(true);
    await AsyncStorage.setItem('@cpf', cpf);
    authRepository.login(cpf).then((response) => {
      saveTasks(response.data.tasks);
      setTasks(response.data.tasks);
      setUserId(response.data.userId);
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