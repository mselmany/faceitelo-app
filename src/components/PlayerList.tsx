import React, { memo, useCallback } from "react";
import { ListRenderItemInfo } from "react-native";
import styled from "@emotion/native";

import { IPlayer } from "../typings/types";
import { FontSize, Space } from "../constants/System";
import * as Base from "../shareds/Base";

type Props = {
  players: IPlayer[];
  label: string;
};

export default memo((p: Props) => {
  const onSelect = useCallback((item) => {
    console.log(item);
  }, []);

  return (
    <Base.Vertical {...p}>
      <Label>
        {p.label} {p.players?.length ? `• ${p.players?.length}` : ""}
      </Label>
      <Base.Seperator />
      <Base.HorizontalFlatlist
        data={p.players}
        keyExtractor={(item: any) => item.player_id}
        renderItem={({ item, index }: ListRenderItemInfo<any>) => (
          <PlayerBox {...item} index={index} onPress={onSelect} />
        )}
      />
    </Base.Vertical>
  );
});

const Label = styled(Base.Label)`
  margin-left: ${Space.screenPadding}px;
`;

type PlayerBoxProps = IPlayer & {
  index?: number;
  onPress?: () => void;
};

export const PlayerBox = (p: PlayerBoxProps) => (
  <Box onPress={p.onPress}>
    <Base.Horizontal>
      <Info>Level {p.skill_level}</Info>
      {p.verified && (
        <>
          <Info> • </Info>
          <Info>Verified</Info>
        </>
      )}
      <Avatar
        source={{
          uri: p.avatar || undefined,
        }}
      />
    </Base.Horizontal>
    <Base.Seperator />
    <Name numberOfLines={1}>{p.nickname}</Name>
  </Box>
);

const Box = styled(Base.PressableBox)`
  width: 180px;
  margin-left: ${Space.normal}px;
`;

const Info = styled(Base.Label)`
  font-size: ${FontSize.xsmall}px;
`;

const Name = styled(Base.Text)`
  font-size: ${FontSize.normal}px;
`;

const Avatar = styled.Image`
  width: ${Space.xlarge}px;
  height: ${Space.xlarge}px;
  border-radius: ${Space.xlarge}px;
  margin-left: auto;
  background-color: ${({ theme }) => theme.BackgroundComponent__Contrast};
`;
