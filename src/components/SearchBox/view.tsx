import React, { memo } from "react";
import { useTheme } from "@emotion/react";

import * as Base from "../../shareds/Base";
import { IPlayer } from "../../typings/types";

import * as s from "./styles";

import { ViewProps } from "./index";

function View(p: ViewProps) {
  const theme = useTheme();
  return (
    <s.Box>
      <s.BoxLine>
        <Base.Label>Search {p.list.length ? `• ${123} player found` : ""}</Base.Label>
      </s.BoxLine>
      <Base.Seperator />
      <s.Input
        hitSlop={{ top: 10, bottom: 10 }}
        placeholder="Search by nickname"
        placeholderTextColor={theme.Color50}
        returnKeyType="search"
        value={p.text}
        onChangeText={p.onChangeText}
        autoFocus
        blurOnSubmit
        numberOfLines={1}
      />
      <Base.Seperator />
      <s.FlatList
        data={p.list}
        keyExtractor={(item: IPlayer) => item.player_id}
        renderItem={({ item }) => (
          <s.ListItem>
            <s.Avatar
              source={{
                uri: item.avatar,
              }}
            />
            <s.NameAndInfos>
              <s.Name numberOfLines={1}>{item.nickname}</s.Name>
              <s.Infos>
                <s.Info>Level {item.skill_level}</s.Info>
                {item.verified && (
                  <>
                    <s.Info> • </s.Info>
                    <s.Info>Verified</s.Info>
                  </>
                )}
              </s.Infos>
            </s.NameAndInfos>
          </s.ListItem>
        )}
      />
    </s.Box>
  );
}

export default memo(View);
