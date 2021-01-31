import React, { memo } from "react";

import * as Base from "../../shareds/Base";

import * as s from "./styles";
import { BoxProps } from "./styles";

const mock = {
  current: 5,
  longest: 17,
};

function Component(p: Partial<BoxProps>) {
  return (
    <s.Box {...p}>
      <s.Padding>
        <Base.Vertical align="center">
          <Base.Label>Win Streak</Base.Label>
        </Base.Vertical>
        <Base.Seperator />
        <Base.Horizontal>
          <Base.Vertical align="center">
            <Base.Text family="BarlowCondensedLight" size="medium">
              {mock.current}
            </Base.Text>
            <Base.Seperator />
            <Base.Label>Current</Base.Label>
          </Base.Vertical>
          <Base.Seperator vertical />
          <Base.Vertical align="center">
            <Base.Text family="BarlowCondensedLight" size="medium">
              {mock.longest}
            </Base.Text>
            <Base.Seperator />
            <Base.Label>Longest</Base.Label>
          </Base.Vertical>
        </Base.Horizontal>
      </s.Padding>
    </s.Box>
  );
}

export default memo(Component);
