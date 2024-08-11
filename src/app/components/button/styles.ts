import styled from "styled-components/native";
import colors from "../../theme/colors";

export const MyButton = styled.TouchableOpacity<{ opacity: boolean; disabled: boolean }>`
  padding: 8px;
  background-color: ${colors.primary};
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: 500;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: "white"
})`
`;