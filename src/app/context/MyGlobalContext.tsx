import React, { useState } from 'react'
import { GlobalContext } from './GlobalContext'
import { ITask } from '../models/task.model';

export default function MyGlobalContext({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const createNewTask = (task: string) => {
    setTasks((tasks) => [...tasks, { id: Math.random(), title: task, checked: false }]);
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

  const reveal = {
    tasks,
    createNewTask,
    deleteTask,
    checkedOrNo
  };

  return (
    <GlobalContext.Provider value={reveal}>
      {children}
    </GlobalContext.Provider>
  )
}
