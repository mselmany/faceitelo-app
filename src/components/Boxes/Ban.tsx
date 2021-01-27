import React, { memo } from "react";

import { FontFamily, FontSize } from "../../constants/System";
import Theme from "../../constants/Theme";
import * as Base from "../../shareds/Base";

import * as s from "./styles";
import { BoxProps } from "./styles";

const mock = {
  bans: 5,
};

function Component(p: Partial<BoxProps>) {
  return (
    <s.Box {...p}>
      <s.Padding>
        <s.Center full>
          <s.Vertical align="center">
            <s.Text family={FontFamily.BarlowCondensedLight} size={FontSize.xlarge}>
              {mock.bans}
            </s.Text>
            <Base.Seperator />
            <s.Label>Bans</s.Label>
          </s.Vertical>
        </s.Center>
      </s.Padding>
    </s.Box>
  );
}

export default memo(Component);
