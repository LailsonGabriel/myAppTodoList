import React from "react";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import * as S from "./styles";
import colors from "../../theme/colors";
import { ITasks } from "../../models/task.model";
import { useGlobalContext } from "../../context/GlobalContext";

export default function Task({ title, id }: ITasks) {
  const { tasks, deleteTask, toggleTaskChecked } = useGlobalContext();
  const isChecked = tasks.find((task) => task.id === id)?.checked;

  const handleCheck = () => {
    toggleTaskChecked(id);
  };

  const handleDeleteTask = () => {
    deleteTask(id);
  };

  return (
    <S.Container>
      <S.Touchable onPress={handleCheck} testID="checkbox-button">
        <Icon
          size={20}
          name={isChecked ? "check-circle" : "checkbox-blank-circle-outline"}
          color={colors.bg}
          testID="checkbox-icon"
        />
      </S.Touchable>
      <S.Text>
        {title}
      </S.Text>
      <S.Touchable onPress={handleDeleteTask} testID="delete-button">
        <Icon size={20} name="trash-can" color={colors.bg} />
      </S.Touchable>
    </S.Container>
  );
}
