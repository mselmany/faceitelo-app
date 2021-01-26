import React, { memo } from "react";

import * as Base from "../../shareds/Base";

import * as s from "./styles";
import { BoxProps } from "./styles";

function View(p: Partial<BoxProps>) {
  return (
    <s.Box {...p}>
      <s.Padding>
        <s.BoxLine>
          <s.Label>Elo</s.Label>
        </s.BoxLine>
        <Base.Seperator />
        <s.Text numberOfLines={1}>{p.children}</s.Text>
      </s.Padding>
    </s.Box>
  );
}

export default memo(View);
