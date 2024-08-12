import React, { useCallback } from 'react';
import { View, Text, FlatList, BackHandler } from 'react-native';

import * as S from './styles/home.style'
import Header from './components/header';
import Input from './components/input';
import Task from './components/task';
import { HomeViewModel } from './viewmodel/home.view.model';
import { ITask } from './models/task.model';
import { useGlobalContext } from './context/GlobalContext';
import { useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const { tasks, setTasks } = useGlobalContext();
  const { createNewTask, search, setSearch } = HomeViewModel();

  const renderItem = ({ item }: { item: ITask }) => {
    return (<Task {...item} />)
  }

  const getHomeTasks = async () => {
    const userId = await AsyncStorage.getItem('@userId');
    AsyncStorage.getItem(`@tasks${userId}`).then((tasks) => {
      if (tasks) setTasks(JSON.parse(tasks))
    })
  }

  useFocusEffect(
    useCallback(() => {
      getHomeTasks();
      
      const onBackPress = () => true;

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.RowView>
          <Input
            placeholder="Adicione uma nova tarefa"
            limit={999999}
            value={search}
            onChangeText={setSearch}
          />
          <S.Touchable onPress={createNewTask}>
            <S.StyledIcon name="pencil-plus"></S.StyledIcon>
          </S.Touchable>
        </S.RowView>
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ marginTop: 10, paddingBottom: 20, gap: 10  }}
          data={tasks}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </S.Content>
     </S.Container>
  );
}
