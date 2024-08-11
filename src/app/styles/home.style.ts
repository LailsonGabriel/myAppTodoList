import styled from "styled-components/native";
import colors from "../theme/colors";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`; 

export const Content = styled.View`
  width: 80%;
  margin-top: -20px;
  position: relative;
  gap: 20px;
`;

export const RowView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledIcon = styled(Icon).attrs({
})`
  color: ${colors.primary};
  padding: 5px;
  font-size: 24px;
`;

export const Touchable = styled.TouchableOpacity`
  background-color: ${colors.bgBarMenu};
  border: 1px;
  border-color: ${colors.primary};
`;
