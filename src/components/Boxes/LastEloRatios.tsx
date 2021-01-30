import React, { memo, useMemo } from "react";
import styled from "@emotion/native";

import { FontFamily, Space } from "../../constants/System";
import * as Base from "../../shareds/Base";
import Theme from "../../constants/Theme";

import * as s from "./styles";
import { BoxProps } from "./styles";

type Props = {
  dots: number[];
  onPress: () => void;
};

function Component(p: Props & Partial<BoxProps>) {
  /* const lastMatchesSumPoint = useMemo(() => {
    let color = "";
    let sum: number | string = p.dots.reduce((total, item) => total + item, 0);
    if (sum > 0) {
      sum = `+${sum}`;
      color = Theme.ColorWin;
    } else if (sum < 0) {
      sum = `-${sum}`;
      color = Theme.ColorLost;
    }
    return { sum, color };
  }, [p.dots]); */

  return (
    <s.PressableBox {...p}>
      <s.Vertical align="center">
        <s.MoreLabel>See details</s.MoreLabel>
      </s.Vertical>
      <s.Box>
        <s.Padding>
          <s.Vertical>
            <s.Label>Last Elo Ratios</s.Label>
            <Base.Seperator />
            <s.Horizontal align="center">
              <Dots>
                {p.dots.map((value, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Dot key={index + value}>
                    <Circle size={value} />
                    <WL size={value}>{value < 0 ? "L" : "W"}</WL>
                  </Dot>
                ))}
              </Dots>
              {/* <Base.Seperator vertical />
              <s.Label family={FontFamily.BarlowCondensedSemiBold} style={{ color: lastMatchesSumPoint.color }}>
                {lastMatchesSumPoint.sum}
              </s.Label> */}
            </s.Horizontal>
          </s.Vertical>
        </s.Padding>
      </s.Box>
    </s.PressableBox>
  );
}

export default memo(Component);

const Dots = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  margin-top: auto;
`;

const Dot = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 ${Space.xsmall}px;
`;

const Circle = styled.View<{ size: number }>`
  margin: auto;
  width: ${({ size }) => Math.abs(size).toString()}px;
  height: ${({ size }) => Math.abs(size).toString()}px;
  border-radius: ${({ size }) => Math.abs(size).toString()}px;
  background-color: ${({ theme, size }) => (size < 0 ? theme.ColorLost : theme.ColorWin)};
`;

const WL = styled.Text<{ size: number }>`
  margin-top: ${Space.xsmall}px;
  color: ${({ theme, size }) => (size < 0 ? theme.ColorLost : theme.ColorWin)};
  text-align: center;
  font-family: ${FontFamily.RubikBold};
`;
