import React, { memo } from "react";

import { FontFamily, FontSize } from "../../constants/System";
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
        <Base.Horizontal align="start">
          <Base.Vertical>
            <Base.Label>Avg. Kill</Base.Label>
            <Base.Seperator />
            <Base.Text family="RubikBold" size="xlarge">
              {mock.avgKill}
            </Base.Text>
          </Base.Vertical>
          <Base.Vertical align="end">
            <Base.Label>HS %</Base.Label>
            <Base.Seperator />
            <Base.Text family="BarlowCondensed" size="medium">
              {mock.hs}
            </Base.Text>
          </Base.Vertical>
        </Base.Horizontal>
        <Base.Seperator />
        <Base.Horizontal align="end">
          <Base.Vertical>
            <Base.Text family="BarlowCondensedSemiBold" size="medium">
              {mock.kd}
            </Base.Text>
            <Base.Seperator />
            <Base.Label>K/D</Base.Label>
          </Base.Vertical>
          <Base.Vertical align="end">
            <Base.Text family="BarlowCondensed" size="medium">
              {mock.kr}
            </Base.Text>
            <Base.Seperator />
            <Base.Label>K/R</Base.Label>
          </Base.Vertical>
        </Base.Horizontal>
      </s.Padding>
    </s.Box>
  );
}

export default memo(Component);
