import React, { memo } from "react";
import { ListRenderItemInfo } from "react-native";

import PlayerBox from "../PlayerBox";

import * as s from "./styles";

import { ViewProps } from ".";

function View(p: ViewProps) {
  return (
    <s.Container {...p}>
      <s.Label>
        {p.label} {p.players?.length ? `• ${p.players?.length}` : ""}
      </s.Label>
      <s.Scroll
        horizontal
        showsHorizontalScrollIndicator={false}
        data={p.players}
        keyExtractor={(item: any) => item.player_id}
        renderItem={({ item, index }: ListRenderItemInfo<any>) => (
          <PlayerBox {...item} index={index} onPress={p.onSelect} />
        )}
      />
    </s.Container>
  );
}

export default memo(View);
