import styled from "@emotion/native";
import { FlatList as _Flatlist } from "react-native";

import { FontFamily, FontSize, Radius, Space } from "../../constants/System";
import * as Base from "../../shareds/Base";
import { IPlayer } from "../../typings/types";

export const Box = styled(Base.Box)`
  flex: 0 1 auto;
  margin: ${Space.screenPadding}px;
  margin-top: 0;
  padding: 0;
`;

export const Padding = styled(Base.Vertical)`
  padding: ${Space.normal}px;
`;

export const Input = styled(Base.TextInput)`
  font-size: ${FontSize.xlarge}px;
`;

export const FlatList = styled(_Flatlist as new () => _Flatlist<IPlayer>)`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  padding: 0 ${Space.normal}px;
  width: 100%;
`;

FlatList.defaultProps = {
  contentContainerStyle: {
    paddingBottom: +Space.small,
  },
};

export const ListItem = styled(Base.PressableBox)`
  flex-direction: row;
  align-items: center;
  padding: ${Space.small}px 0;
  background-color: transparent;
`;

export const Avatar = styled.Image`
  width: ${String(+Space.xlarge * 1.5)}px;
  height: ${String(+Space.xlarge * 1.5)}px;
  border-radius: ${Space.xlarge}px;
  background-color: ${({ theme }) => theme.BackgroundComponent__Contrast};
  margin-right: ${Space.normal}px;
`;

export const Infos = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Info = styled(Base.Text)`
  color: ${({ theme }) => theme.Color25};
`;
