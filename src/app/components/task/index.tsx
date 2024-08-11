import React from "react";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import * as S from "./styles";
import colors from "../../theme/colors";
import { ITasks } from "../../models/task.model";
import { HomeViewModel } from "../../viewmodel/home.view.model";

export default function Task({ title, id }: ITasks) {
  const { tasks, deleteTask, checkedOrNo } = HomeViewModel();
  const isChecked = tasks.find((task) => task.id === id)?.checked;

  const handleCheck = () => {
    checkedOrNo(id);
  };

  const handleDeleteTask = () => {
    deleteTask(id);
  };

  return (
    <S.Container>
      <S.Touchable onPress={handleCheck}>
        {<Icon size={20} name={isChecked ? "check-circle" : "checkbox-blank-circle-outline"} color={colors.bg} />}
      </S.Touchable>
      <S.Text>
        Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply
      </S.Text>
      <S.Touchable onPress={handleDeleteTask}>
        <Icon size={20} name="trash-can" color={colors.bg} />
      </S.Touchable>
    </S.Container>
  );
}
