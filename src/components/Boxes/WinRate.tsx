import React, { memo } from "react";

import { FontFamily, FontSize } from "../../constants/System";
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
        <s.Vertical>
          <s.Label>Win %</s.Label>
          <Base.Seperator />
          <s.Text numberOfLines={1} size={FontSize.xlarge}>
            {mock.winRate}
          </s.Text>
        </s.Vertical>
        <Base.Seperator />
        <Base.Seperator />
        <s.Horizontal>
          <s.Vertical>
            <s.Text family={FontFamily.BarlowCondensedLight} style={{ color: Theme.ColorWin }}>
              {mock.win}
            </s.Text>
            <Base.Seperator />
            <s.Label>Win</s.Label>
          </s.Vertical>
          <s.Vertical align="center">
            <s.Text family={FontFamily.BarlowCondensedLight} style={{ color: Theme.ColorLost }}>
              {mock.lost}
            </s.Text>
            <Base.Seperator />
            <s.Label>Lost</s.Label>
          </s.Vertical>
          <s.Vertical align="end">
            <s.Text family={FontFamily.BarlowCondensedLight}>{mock.win + mock.lost}</s.Text>
            <Base.Seperator />
            <s.Label>All</s.Label>
          </s.Vertical>
        </s.Horizontal>
      </s.Padding>
    </s.Box>
  );
}

export default memo(Component);
