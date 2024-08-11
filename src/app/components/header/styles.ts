import styled from "styled-components/native";
import colors from "../../theme/colors";

export const Container = styled.View`
  background-color: ${colors.primary};
  height: 15%;
  width: 100%;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
`;

export const TextTitle = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 35px;
  letter-spacing: 5px;
  font-style: italic;
  color: ${colors.bg};
`;