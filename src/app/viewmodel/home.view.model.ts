import { useState } from "react"
import { ITask } from "../models/task.model"
import { IHomeViewModel } from "../models/home.model";

export const HomeViewModel = (): IHomeViewModel => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [search, setSearch] = useState<string>("");
  console.log(tasks, tasks)

  const createNewTask = () => {
    setTasks((tasks) => [...tasks, { id: Math.random(), title: search, checked: false }]);
    setSearch("");
  };

  const deleteTask = (id: number) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const checkedOrNo = (id: number) => {
    setTasks((tasks) => 
      tasks.map((task) => {
        if (task.id === id) return { ...task, checked: !task.checked };
        return task;
      })
    );
  };
  
  
  return {
    tasks,
    createNewTask,
    search,
    setSearch,
    deleteTask,
    checkedOrNo
  }
}