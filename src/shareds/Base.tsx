import styled from "@emotion/native";

import { Space, Radius, FontSize, FontFamily } from "../constants/System";

export const Box = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.BackgroundComponent};
  padding: ${Space.normal}px;
  border-radius: ${Radius.large}px;
`;

export const TouchableBox = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.BackgroundComponent};
  padding: ${Space.normal}px;
  border-radius: ${Radius.large}px;
`;

export const BoxLine = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Seperator = styled.View`
  display: flex;
  width: 100%;
  height: ${Space.small}px;
`;

export const Label = styled.Text`
  display: flex;
  font-size: ${FontSize.small}px;
  font-family: ${FontFamily.BarlowCondensed};
  color: ${({ theme }) => theme.Color25};
`;

export const Head = styled.Text`
  display: flex;
  font-size: ${FontSize.normal}px;
  font-family: ${FontFamily.Barlow};
  color: ${({ theme }) => theme.ColorPrimary};
`;