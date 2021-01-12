import React, { memo } from "react";

import * as Base from "../../shareds/Base";

import * as s from "./styles";

import { IPlayerBox } from ".";

function View(p: IPlayerBox) {
  return (
    <s.Box {...p} onPress={p.onPress}>
      <s.Infos>
        <s.Info>Level {p.skill_level}</s.Info>
        {p.verified && (
          <>
            <s.Info> • </s.Info>
            <s.Info>Verified</s.Info>
          </>
        )}
        <s.Avatar
          source={{
            uri: p.avatar,
          }}
        />
      </s.Infos>
      <Base.Seperator />
      <s.Name>{p.nickname}</s.Name>
    </s.Box>
  );
}

export default memo(View);
