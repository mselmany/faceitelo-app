import React, { memo } from "react";

import { FontFamily, FontSize } from "../../constants/System";
import * as Base from "../../shareds/Base";

import * as s from "./styles";
import { BoxProps } from "./styles";

function Component(p: Partial<BoxProps>) {
  return (
    <s.Box {...p}>
      <s.Padding>
        <s.Horizontal>
          <s.Label>Elo</s.Label>
        </s.Horizontal>
        <Base.Seperator />
        <s.Text numberOfLines={1} size={FontSize.xlarge} family={FontFamily.RubikBold}>
          {p.children}
        </s.Text>
      </s.Padding>
    </s.Box>
  );
}

export default memo(Component);
