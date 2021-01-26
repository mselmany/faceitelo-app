import React, { memo } from "react";

import { FontFamily, FontSize } from "../../constants/System";
import Theme from "../../constants/Theme";
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
        <s.Vertical align="center">
          <s.Label>Win Streak</s.Label>
        </s.Vertical>
        <Base.Seperator />
        <s.Horizontal>
          <s.Vertical align="end">
            <s.Text family={FontFamily.BarlowCondensedLight}>{mock.current}</s.Text>
            <Base.Seperator />
            <s.Label>Current</s.Label>
          </s.Vertical>
          <s.Vertical align="start">
            <s.Text family={FontFamily.BarlowCondensedLight}>{mock.longest}</s.Text>
            <Base.Seperator />
            <s.Label>Longest</s.Label>
          </s.Vertical>
        </s.Horizontal>
      </s.Padding>
    </s.Box>
  );
}

export default memo(Component);
