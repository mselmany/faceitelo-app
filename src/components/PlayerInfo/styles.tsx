import styled from "@emotion/native";

import { FontFamily, FontSize, Space } from "../../constants/System";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${Space.screenPadding}px;
`;

export const Avatar = styled.Image`
  width: ${(+Space.xlarge * 3.5).toString()}px;
  height: ${(+Space.xlarge * 3.5).toString()}px;
  border-radius: ${(+Space.xlarge * 3.5).toString()}px;
  background-color: ${({ theme }) => theme.BackgroundComponent__Contrast};
`;

export const Name = styled.Text`
  font-size: ${FontSize.xlarge}px;
  font-family: ${FontFamily.RubikBold};
`;

export const Infos = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Info = styled.Text`
  font-size: ${FontSize.small}px;
  font-family: ${FontFamily.Rubik};
  color: ${({ theme }) => theme.Color25};
`;
