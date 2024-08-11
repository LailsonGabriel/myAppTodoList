import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import colors from '../../theme/colors';

export const ContainerBox = styled.View`
  max-height: 64px;
  width: 100%;
`;

export const TextInputStyled = styled.TextInput.attrs({
  placeholderTextColor: "#6a888f4F",
})`
  border: 1px;
  height: 40px;
  border-radius: 5px;
  border-color: ${colors.primary};
  color: ${colors.primary};
`;

export const Label = styled.Text`
  color: ${colors.primary};
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
`;

export const StyledIcon = styled(Icon).attrs({
})`
  color: ${colors.primary};
  position: absolute;
  left: 10px;
  top: 32px;
  font-size: 24px;
  opacity: 0.8;
`;

export const IconEye = styled(Icon).attrs({})`
  position: absolute;
  right: 10px;
  bottom: 7px;
  color: ${colors.primary};
  font-size: 24px;
`;

export const LabelPass = styled.Text`
  color: ${colors.fontSecundary};
  font-size: 12px;
`;

export const Btn = styled.TouchableOpacity``;