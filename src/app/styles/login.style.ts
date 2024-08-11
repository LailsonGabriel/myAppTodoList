import styled from "styled-components/native";
import colors from "../theme/colors";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${colors.bg};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10%;
  gap: 20px;
`; 