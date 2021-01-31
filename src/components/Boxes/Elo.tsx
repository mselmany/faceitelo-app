import React, { memo } from "react";

import * as Base from "../../shareds/Base";

import * as s from "./styles";
import { BoxProps } from "./styles";

function Component(p: Partial<BoxProps>) {
  return (
    <s.Box {...p}>
      <s.Padding>
        <Base.Vertical>
          <Base.Label>Elo</Base.Label>
          <Base.Seperator />
          <Base.Text numberOfLines={1} size="xlarge" family="RubikBold">
            {p.children}
          </Base.Text>
        </Base.Vertical>
      </s.Padding>
    </s.Box>
  );
}

export default memo(Component);
