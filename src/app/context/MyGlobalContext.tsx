import React, { useEffect, useState } from 'react'
import { GlobalContext } from './GlobalContext'
import { ITask } from '../models/task.model';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyGlobalContext({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [tasksLoaded, setTasksLoaded] = useState(false);

  const saveTasks = async (updatedTasks: ITask[], userId?: number) => {
    console.log(updatedTasks, 'saveTasks')
    setTasks(updatedTasks);
    console.log(tasks, '<--- tasks --->')
    if (userId) {
      await AsyncStorage.setItem('@userId', JSON.stringify(userId));
    }
    await AsyncStorage.setItem(`@tasks${userId}`, JSON.stringify(updatedTasks));
    setTasksLoaded(true);
  };

  const getUserId = async () => {
    const userId = await AsyncStorage.getItem('@userId');
    return userId ? JSON.parse(userId) : null;
  };

  const setUserId = async (userId: number) => {
    await AsyncStorage.setItem('@userId', JSON.stringify(userId));
  };

  const getCpf = async () => {
    const cpf = await AsyncStorage.getItem('@cpf');
    return cpf ? cpf : null;
  };

  const createNewTask = async (taskTitle: string, id?: number) => {
    const newTask = { id: id ?? Math.random(), title: taskTitle, checked: false };
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
    const userId = await getUserId();
    if (userId) {
      const tasksInStorage = await AsyncStorage.getItem(`@tasks${userId}`);
      if (tasksInStorage) {
        console.log('Tasks set:', JSON.parse(tasksInStorage));
        setTasks(JSON.parse(tasksInStorage))
      };
    }
    setTasksLoaded(true);
  };
  
  // useEffect(() => {
  //   if (!tasksLoaded) verifyTasksInStorage();
  // }, [tasksLoaded]);

  useEffect(() => {
    console.log(tasks, '<--- tasks updated in useEffect --->');
  }, [tasks]);

  const reveal = {
    tasks,
    createNewTask,
    deleteTask,
    toggleTaskChecked,
    setTasks,
    saveTasks,
    getUserId,
    setUserId,
    getCpf
  };

  return (
    <GlobalContext.Provider value={reveal}>
      {children}
    </GlobalContext.Provider>
  )
}
