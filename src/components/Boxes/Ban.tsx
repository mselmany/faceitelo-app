import React, { memo } from "react";

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
        <Base.Center full>
          <Base.Vertical align="center">
            <Base.Text family="BarlowCondensedLight" size="xlarge">
              {mock.bans}
            </Base.Text>
            <Base.Seperator />
            <Base.Label>Bans</Base.Label>
          </Base.Vertical>
        </Base.Center>
      </s.Padding>
    </s.Box>
  );
}

export default memo(Component);
