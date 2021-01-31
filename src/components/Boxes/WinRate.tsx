import React, { memo } from "react";

import Theme from "../../constants/Theme";
import * as Base from "../../shareds/Base";

import * as s from "./styles";
import { BoxProps } from "./styles";

const mock = {
  winRate: 54.8,
  win: 147,
  lost: 96,
};

function Component(p: Partial<BoxProps>) {
  return (
    <s.Box {...p}>
      <s.Padding>
        <Base.Vertical>
          <Base.Label>Win %</Base.Label>
          <Base.Seperator />
          <Base.Text numberOfLines={1} size="xlarge" family="RubikBold">
            {mock.winRate}
          </Base.Text>
        </Base.Vertical>
        <Base.Seperator />
        <Base.Horizontal align="end">
          <Base.Vertical>
            <Base.Text size="large" family="BarlowCondensedLight" style={{ color: Theme.ColorWin }}>
              {mock.win}
            </Base.Text>
            <Base.Seperator />
            <Base.Label>Win</Base.Label>
          </Base.Vertical>
          <Base.Vertical align="center">
            <Base.Text size="large" family="BarlowCondensedLight" style={{ color: Theme.ColorLost }}>
              {mock.lost}
            </Base.Text>
            <Base.Seperator />
            <Base.Label>Lost</Base.Label>
          </Base.Vertical>
          <Base.Vertical align="end">
            <Base.Text size="large" family="BarlowCondensedLight">
              {mock.win + mock.lost}
            </Base.Text>
            <Base.Seperator />
            <Base.Label>All</Base.Label>
          </Base.Vertical>
        </Base.Horizontal>
      </s.Padding>
    </s.Box>
  );
}

export default memo(Component);
