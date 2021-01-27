import React, { memo } from "react";

import { FontFamily, FontSize } from "../../constants/System";
import * as Base from "../../shareds/Base";

import * as s from "./styles";
import { BoxProps } from "./styles";

function Component(p: Partial<BoxProps>) {
  return (
    <s.Box {...p}>
      <s.Padding>
        <s.Vertical align="start">
          <s.Label>Elo</s.Label>
          <Base.Seperator />
          <s.Text numberOfLines={1} size={FontSize.xlarge} family={FontFamily.RubikBold}>
            {p.children}
          </s.Text>
        </s.Vertical>
      </s.Padding>
    </s.Box>
  );
}

export default memo(Component);
