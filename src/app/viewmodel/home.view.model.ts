import { useState } from "react"
import { IHomeViewModel } from "../models/home.model";
import { useGlobalContext } from "../context/GlobalContext";
import tasksRepository from "../repositories/tasks.repository";
import { ToastAndroid } from "react-native";

export const HomeViewModel = (): IHomeViewModel => {
  const { tasks, createNewTask, getCpf } = useGlobalContext();
  const [search, setSearch] = useState<string>("");

  const handleCreateNewTask = async () => {
    if(search === "") return;
    const cpf = await getCpf();
    let id;

    if(cpf) {
      tasksRepository.createTask([{ title: search, checked: false }], cpf).then((response) => {
        id = response.data.id;
        ToastAndroid.show("Task criada com sucesso!", ToastAndroid.SHORT);
      }).catch((err) => { console.log(err); });
    }

    createNewTask(search, id);
    setSearch("");
  };
  
  return {
    createNewTask: handleCreateNewTask,
    search,
    setSearch
  }
}
