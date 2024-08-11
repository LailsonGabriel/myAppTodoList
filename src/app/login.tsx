import { View, Text } from "react-native";
import React from "react";
import Input from "./components/input";

import * as S from './styles/login.style';
import { LoginViewModel } from "./viewmodel/login.view.model";

export default function Login() {
  const { cpf, setCpf } = LoginViewModel();

  return (
    <S.Container>
      <Input
        iconName="account-arrow-right"
        label={"CPF"}
        type={"number-pad"}
        placeholder="000.000.000-00"
        limit={14}
        value={cpf}
        onChangeText={setCpf}
      />
    </S.Container>
  );
}
