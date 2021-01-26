import styled from "@emotion/native";
import React, { memo, useState } from "react";

import { FontFamily, Space } from "../../constants/System";
import * as Base from "../../shareds/Base";

import * as s from "./styles";
import { BoxProps } from "./styles";

function View(p: Partial<BoxProps>) {
  const [dots, setDots] = useState(() => [-6, 10, -13, 10, 18]);

  return (
    <s.PressableBox {...p}>
      <s.BoxLine>
        <s.MoreLabel>See details</s.MoreLabel>
      </s.BoxLine>
      <s.Box>
        <s.Padding>
          <s.BoxLine>
            <s.Label>Last Elo Ratios</s.Label>
          </s.BoxLine>
          <Base.Seperator />
          <Dots>
            {dots.map((value, index) => (
              <Dot key={index}>
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

export default memo(View);

const Dots = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
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
