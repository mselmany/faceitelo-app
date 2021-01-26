import React, { memo } from "react";
import styled from "@emotion/native";

import { FontFamily, Space } from "../../constants/System";
import * as Base from "../../shareds/Base";

import * as s from "./styles";
import { BoxProps } from "./styles";

type Props = {
  dots: number[];
};

function Component(p: Props & Partial<BoxProps>) {
  return (
    <s.PressableBox {...p}>
      <s.Horizontal>
        <s.MoreLabel>See details</s.MoreLabel>
      </s.Horizontal>
      <s.Box>
        <s.Padding>
          <s.Horizontal>
            <s.Label>Last Elo Ratios</s.Label>
          </s.Horizontal>
          <Base.Seperator />
          <Dots>
            {p.dots.map((value, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Dot key={index + value}>
                <Circle size={value} />
                <WL size={value}>{value < 0 ? "L" : "W"}</WL>
              </Dot>
            ))}
          </Dots>
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
