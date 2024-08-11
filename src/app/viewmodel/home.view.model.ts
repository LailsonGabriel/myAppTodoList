import { useState } from "react"
import { IHomeViewModel } from "../models/home.model";
import { useGlobalContext } from "../context/GlobalContext";

export const HomeViewModel = (): IHomeViewModel => {
  const { tasks, createNewTask } = useGlobalContext();
  const [search, setSearch] = useState<string>("");

  const handleCreateNewTask = () => {
    if(search === "") return;

    createNewTask(search);
    setSearch("");
  };
  
  return {
    createNewTask: handleCreateNewTask,
    search,
    setSearch
  }
}
