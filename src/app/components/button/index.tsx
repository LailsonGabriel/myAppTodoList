import React from "react";

import * as S from "./styles";
import { ButtonType } from "../../models/button.model";

export default function Button({ title, onPress, disabled, loading }: ButtonType) {

  return (
    <S.MyButton onPress={onPress} opacity={disabled} disabled={disabled}>
      {loading ? <S.Loading testID="loading-spinner" /> : <S.TextButton>{title}</S.TextButton>}
    </S.MyButton>
  );
}
