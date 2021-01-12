import styled from "@emotion/native";

import { FontSize, FontFamily, Space, Opacity } from "../../constants/System";
import { TouchableBox } from "../../shareds/Base";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: ${Space.xlarge}px;
`;

export const Box = styled(TouchableBox)`
  display: flex;
  flex-direction: column;
  width: 180px;
  margin-left: ${({ index }: { index: number }) => (index === 0 ? Space.xlarge : Space.normal)}px;
`;

export const Infos = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const Info = styled.Text`
  font-size: ${FontSize.small}px;
  font-family: ${FontFamily.BarlowCondensed};
  color: ${({ theme }) => theme.Color25};
`;

export const Name = styled.Text`
  font-size: ${FontSize.normal}px;
  font-family: ${FontFamily.Barlow};
`;

export const Avatar = styled.Image`
  width: ${Space.xlarge}px;
  height: ${Space.xlarge}px;
  border-radius: ${Space.xlarge}px;
  margin-left: auto;
  background-color: ${({ theme }) => theme.BackgroundComponent__Contrast};
`;
