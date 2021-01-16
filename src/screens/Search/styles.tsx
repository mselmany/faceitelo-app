import styled from "@emotion/native";
import { Dimensions } from "react-native";

import { FontSize, FontFamily, Space, Opacity } from "../../constants/System";
import { TouchableBox } from "../../shareds/Base";

const { height } = Dimensions.get("window");

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding: ${Space.screenPadding}px;
  padding-top: 0;
`;

export const HeadAndVersion = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${FontFamily.Prompt};
`;

export const Description = styled.Text`
  font-size: ${FontSize.small}px;
  font-family: ${FontFamily.PromptLight};
  color: ${({ theme }) => theme.Color50};
`;

export const Version = styled.View`
  align-self: center;
  position: relative;
  top: 5px;
  left: ${Space.large}px;
  padding: 4px 8px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.BackgroundGreen};
`;

export const VersionText = styled.Text`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
  font-family: ${FontFamily.BarlowCondensedSemiBold};
  color: ${({ theme }) => theme.ColorGreen};
`;

export const VersionTextOpac = styled.Text`
  opacity: ${Opacity.a50};
`;

export const Box = styled(TouchableBox)`
  height: ${height.toString()}px;
  margin: 0 ${Space.screenPadding}px;
`;
