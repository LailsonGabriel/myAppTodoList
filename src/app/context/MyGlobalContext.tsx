import React, { useEffect, useState } from 'react'
import { GlobalContext } from './GlobalContext'
import { ITask } from '../models/task.model';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyGlobalContext({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const saveTasks = async (updatedTasks: ITask[]) => {
    setTasks(updatedTasks);
    await AsyncStorage.setItem('@tasks', JSON.stringify(updatedTasks));
  };

  const createNewTask = async (taskTitle: string) => {
    const newTask = { id: Math.random(), title: taskTitle, checked: false };
    const updatedTasks = [...tasks, newTask];
    await saveTasks(updatedTasks);
  };

  const deleteTask = async (taskId: number) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    await saveTasks(updatedTasks);
  };

  const toggleTaskChecked = async (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, checked: !task.checked } : task
    );
    await saveTasks(updatedTasks);
  };

  const verifyTasksInStorage = async () => {
    const tasksInStorage = await AsyncStorage.getItem('@tasks');
    if (tasksInStorage) setTasks(JSON.parse(tasksInStorage));
  };

  useEffect(() => { verifyTasksInStorage() }, []);

  const reveal = {
    tasks,
    createNewTask,
    deleteTask,
    toggleTaskChecked
  };

  return (
    <GlobalContext.Provider value={reveal}>
      {children}
    </GlobalContext.Provider>
  )
}
