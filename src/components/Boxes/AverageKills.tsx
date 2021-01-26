import React, { memo } from "react";

import { FontFamily, FontSize } from "../../constants/System";
import Theme from "../../constants/Theme";
import * as Base from "../../shareds/Base";

import * as s from "./styles";
import { BoxProps } from "./styles";

const mock = {
  avgKill: 27,
  kd: 1.9,
  kr: 1.5,
  hs: 37,
};

function Component(p: Partial<BoxProps>) {
  return (
    <s.Box {...p}>
      <s.Padding>
        <s.Horizontal align="start">
          <s.Vertical>
            <s.Label>Avg. Kill</s.Label>
            <Base.Seperator />
            <s.Text size={FontSize.xlarge}>{mock.avgKill}</s.Text>
          </s.Vertical>
          <s.Vertical align="end">
            <s.Label>HS %</s.Label>
            <Base.Seperator />
            <s.Text family={FontFamily.BarlowCondensed} size={FontSize.medium}>
              {mock.hs}
            </s.Text>
          </s.Vertical>
        </s.Horizontal>
        <Base.Seperator />
        <Base.Seperator />
        <s.Horizontal>
          <s.Vertical>
            <s.Text family={FontFamily.BarlowCondensedSemiBold}>{mock.kd}</s.Text>
            <Base.Seperator />
            <s.Label>K/D</s.Label>
          </s.Vertical>
          <s.Vertical align="end">
            <s.Text family={FontFamily.BarlowCondensed}>{mock.kr}</s.Text>
            <Base.Seperator />
            <s.Label>K/R</s.Label>
          </s.Vertical>
        </s.Horizontal>
      </s.Padding>
    </s.Box>
  );
}

export default memo(Component);
