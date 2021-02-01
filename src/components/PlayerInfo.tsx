import React, { memo } from "react";
import styled from "@emotion/native";

import * as Base from "../shareds/Base";
import { FontFamily, FontSize, Space } from "../constants/System";
import { IPlayer } from "../typings/types";

interface Props {
  player: IPlayer;
}

export default memo(
  (p: Props) =>
    p.player && (
      <Base.Vertical align="center">
        <Base.Seperator ratio="2" />
        <Avatar
          source={{
            uri: p.player.avatar || undefined,
          }}
        />
        <Base.Seperator ratio="2" />
        <Base.Text numberOfLines={1} size="xlarge" family="RubikBold">
          {p.player.nickname}
        </Base.Text>
        <Base.Seperator />
        <Infos>
          <Info>Level {p.player.skill_level}</Info>
          {p.player.verified && <Info> • Verified</Info>}
          <Info> • Premium</Info>
        </Infos>
        <Base.Seperator ratio="3" />
      </Base.Vertical>
    )
);

export const Avatar = styled.Image`
  width: ${String(+Space.xlarge * 3.5)}px;
  height: ${String(+Space.xlarge * 3.5)}px;
  border-radius: ${String(+Space.xlarge * 3.5)}px;
  background-color: ${({ theme }) => theme.BackgroundComponent__Contrast};
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
