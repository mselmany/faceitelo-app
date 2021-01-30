import React, { memo, useState } from "react";
import styled from "@emotion/native";

import Theme from "../constants/Theme";

function MiniDotGraph({ style }) {
  const [dots, setDots] = useState(() => [-6, 10, -13, 10, 18]);
  return (
    <Container style={style}>
      <Dots>
        {dots.map((value, index) => (
          <Dot key={index} size={value} />
        ))}
      </Dots>
      <Label>Last 5 Matches</Label>
    </Container>
  );
}

export default memo(MiniDotGraph);

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Dots = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const Dot = styled.View`
  width: ${({ size }) => Math.abs(size).toString()}px;
  height: ${({ size }) => Math.abs(size).toString()}px;
  border-radius: ${({ size }) => Math.abs(size).toString()}px;
  background-color: ${({ size }) => (size < 0 ? Theme.ColorLost : Theme.ColorWin)};
  margin: 0px 5px;
`;

const Label = styled.Text`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 15px;
  font-family: "Rubik-Light";
  color: ${Theme.Color50};
`;
