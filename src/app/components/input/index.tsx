import { TextInput, KeyboardTypeOptions } from 'react-native';
import React, { createRef, forwardRef, useImperativeHandle, useState } from 'react';

import * as S from './styles';
import { InputProps } from '../../models/input.model';

const Input = forwardRef((props: InputProps, ref) => {
  const [sec, setSec] = useState(props.secureTextEntry);
  const [error, setError] = useState<boolean>(true);
  const inputRef = createRef();

  useImperativeHandle(ref, () => ({
    focusOnError() {
      setError(true);
      (inputRef as React.RefObject<TextInput>)?.current?.focus();
    },
    resetError() { setError(false) }
  }));

  return (
    <S.ContainerBox>
      {props.label && <S.Label>{props.label}</S.Label>}
      <S.TextInputStyled
        textAlign="center"
        secureTextEntry={sec}
        keyboardType={props.type ?? "default"}
        placeholder={props.placeholder}
        autoCapitalize='none'
        onChangeText={props.onChangeText}
        maxLength={props.limit}
        value={props.value}
      />
      <S.StyledIcon name={props.iconName as any} />
      {props.secureTextEntry && (
        <S.Btn onPress={() => setSec(!sec)}>
          <S.IconEye name={sec ? "eye" : "eye-off"} />
        </S.Btn>
      )}
      {props.secureTextEntry && (
        <S.LabelPass>Esqueceu a senha?</S.LabelPass>
      )}
    </S.ContainerBox>
  );
});

export default Input;