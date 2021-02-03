import React, { memo } from "react";
import { useTheme } from "@emotion/react";

import * as Base from "../../shareds/Base";
import { IPlayer } from "../../@types/types";

import * as s from "./styles";

import { ViewProps } from "./index";

function View(p: ViewProps) {
  const theme = useTheme();

  return (
    <s.Box>
      <s.Padding>
        <Base.Label>Search • {p.list.length ? `${p.list.length} players found` : "No player found"}</Base.Label>
        <Base.Seperator />
        <s.Input
          hitSlop={{ top: 10, bottom: 10 }}
          placeholder="Nickname"
          placeholderTextColor={theme.Color50}
          returnKeyType="search"
          value={p.text}
          onChangeText={p.onChangeText}
          autoFocus={p.isFocused}
          blurOnSubmit
          numberOfLines={1}
        />
      </s.Padding>
      <s.FlatList
        data={p.list}
        keyExtractor={(item: IPlayer) => item.player_id}
        renderItem={({ item }) => <ListItem {...{ item, p }} />}
      />
    </s.Box>
  );
}

export default memo(View);

type ListItemProps = {
  p: Pick<ViewProps, "onSelect">;
  item: IPlayer;
};

const ListItem = ({ p, item }: ListItemProps) => (
  <s.ListItem onPress={() => p.onSelect(item)}>
    <s.Avatar
      source={{
        uri: item.avatar || undefined,
      }}
    />
    <Base.Vertical full>
      <Base.Text numberOfLines={1} size="normal">
        {item.nickname}
      </Base.Text>
      <s.Infos>
        <s.Info>Level {item.skill_level}</s.Info>
        {item.verified && <s.Info> • Verified</s.Info>}
      </s.Infos>
    </Base.Vertical>
  </s.ListItem>
);
