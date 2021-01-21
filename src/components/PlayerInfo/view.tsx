import React, { memo } from "react";

import * as Base from "../../shareds/Base";

import * as s from "./styles";

import { ViewProps } from "./index";

function View(p: ViewProps) {
  return (
    p.player && (
      <s.Container>
        <s.Avatar
          source={{
            uri: p.player.avatar || undefined,
          }}
        />
        <Base.Seperator />
        <Base.Seperator />
        <s.Name numberOfLines={1}>{p.player.nickname}</s.Name>
        <Base.Seperator />
        <s.Infos>
          <s.Info>Level {p.player.skill_level}</s.Info>
          {p.player.verified && (
            <>
              <s.Info> • </s.Info>
              <s.Info>Verified</s.Info>
            </>
          )}
          <s.Info> • </s.Info>
          <s.Info>Premium</s.Info>
        </s.Infos>
      </s.Container>
    )
  );
}

export default memo(View);
