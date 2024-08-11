import styled from "styled-components/native";
import colors from "../../theme/colors";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  height: 70px;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 10px;
`;

export const Text = styled.Text`
  width: 60%;
  color: ${colors.bg};
`;

export const Touchable = styled.TouchableOpacity``;