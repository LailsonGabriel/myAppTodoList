import React from 'react';
import { View, Text, FlatList } from 'react-native';

import * as S from './styles/home.style'
import Header from './components/header';
import Input from './components/input';
import Task from './components/task';
import { HomeViewModel } from './viewmodel/home.view.model';
import { ITask } from './models/task.model';

export default function Home() {
  const { createNewTask, search, setSearch, tasks } = HomeViewModel();

  const renderItem = ({ item }: { item: ITask }) => {
    return (<Task {...item} />)
  }

  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.RowView>
          <Input
            placeholder="Adicione uma nova tarefa"
            limit={14}
            value={search}
            onChangeText={setSearch}
          />
          <S.Touchable onPress={createNewTask}>
            <S.StyledIcon name="pencil-plus"></S.StyledIcon>
          </S.Touchable>
        </S.RowView>
        <FlatList
          contentContainerStyle={{ marginTop: 10, gap: 10 }}
          data={tasks}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </S.Content>
     </S.Container>
  );
}
