import styled from "@emotion/native";
import { FlatList as _Flatlist } from "react-native";

import { FontFamily, FontSize, Space } from "../../constants/System";
import * as Base from "../../shareds/Base";
import { IPlayer } from "../../typings/types";

export const Box = styled(Base.Box)`
  flex: 1;
  margin: ${Space.screenPadding}px;
  margin-top: 0;
  padding: 0;
  padding-top: ${Space.normal}px;
`;

export const BoxLine = styled.View`
  display: flex;
  flex-direction: row;
  padding: 0 ${Space.normal}px;
`;

export const Input = styled.TextInput`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: ${Space.normal}px;
  width: 100%;
  font-size: ${FontSize.large}px;
  font-family: ${FontFamily.Rubik};
  color: ${({ theme }) => theme.ColorPrimary};
`;

export const FlatList = styled(_Flatlist as new () => _Flatlist<IPlayer>)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 ${Space.normal}px;
  padding-bottom: ${Space.small}px;
  width: 100%;
`;

export const ListItem = styled(Base.PressableBox)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${Space.small}px 0;
`;

export const Avatar = styled.Image`
  width: ${(+Space.xlarge * 1.5).toString()}px;
  height: ${(+Space.xlarge * 1.5).toString()}px;
  border-radius: ${Space.xlarge}px;
  background-color: ${({ theme }) => theme.BackgroundComponent__Contrast};
`;

export const NameAndInfos = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  margin-left: ${Space.normal}px;
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

export const Name = styled.Text`
  font-size: ${FontSize.normal}px;
  font-family: ${FontFamily.Rubik};
`;
