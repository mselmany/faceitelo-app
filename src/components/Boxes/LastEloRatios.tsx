import styled from "@emotion/native";
import React, { memo } from "react";

import * as Base from "../../shareds/Base";

import * as s from "./styles";
import { BoxProps } from "./styles";

function View(p: Partial<BoxProps>) {
  return (
    <s.PressableBox {...p}>
      <s.BoxLine>
        <s.MoreLabel>See details</s.MoreLabel>
      </s.BoxLine>
      <s.Box>
        <s.Padding>
          <s.BoxLine>
            <s.Label>Last Elo Ratios</s.Label>
          </s.BoxLine>
          <Base.Seperator />
          <s.Text numberOfLines={1}>{p.children}</s.Text>
        </s.Padding>
      </s.Box>
    </s.PressableBox>
  );
}

export default memo(View);
