import React, { memo } from "react";
import styled from "@emotion/native";

import { FontFamily, FontSize, Space } from "../../constants/System";
import * as Base from "../../shareds/Base";
import Theme from "../../constants/Theme";

import * as s from "./styles";
import { AlignmentProps, BoxAlignments, BoxProps, TextAlignments, TextProps } from "./styles";

type Props = {
  data: number[];
  onPress: () => void;
};

const mock = {
  matches: [
    { kill: 33, assist: 9, death: 17, elo: 1423, eloPoint: 29 },
    { kill: 24, assist: 15, death: 11, elo: 1433, eloPoint: -25 },
    { kill: 47, assist: 1, death: 9, elo: 1399, eloPoint: 33 },
    { kill: 33, assist: 9, death: 17, elo: 1323, eloPoint: 29 },
    { kill: 24, assist: 15, death: 11, elo: 1323, eloPoint: -25 },
    { kill: 17, assist: 1, death: 9, elo: 1399, eloPoint: 33 },
    { kill: 33, assist: 39, death: 17, elo: 1423, eloPoint: 29 },
    { kill: 24, assist: 15, death: 11, elo: 1323, eloPoint: -25 },
    { kill: 17, assist: 1, death: 9, elo: 1399, eloPoint: 33 },
    { kill: 33, assist: 9, death: 47, elo: 1423, eloPoint: 29 },
    { kill: 24, assist: 15, death: 11, elo: 1433, eloPoint: -25 },
    { kill: 47, assist: 1, death: 9, elo: 1399, eloPoint: 33 },
    { kill: 33, assist: 9, death: 17, elo: 1323, eloPoint: 29 },
    { kill: 24, assist: 15, death: 11, elo: 1323, eloPoint: -25 },
    { kill: 17, assist: 1, death: 9, elo: 1399, eloPoint: 33 },
    { kill: 33, assist: 39, death: 17, elo: 1423, eloPoint: 29 },
    { kill: 24, assist: 15, death: 11, elo: 1323, eloPoint: -25 },
    { kill: 17, assist: 1, death: 9, elo: 1399, eloPoint: 33 },
    { kill: 33, assist: 9, death: 47, elo: 1423, eloPoint: 29 },
  ],
};

function Component(p: Props & Partial<BoxProps>) {
  return (
    <s.PressableBox {...p}>
      <s.Box>
        <s.Padding>
          <s.Vertical>
            <s.Label>Last matches results • {mock.matches.length}</s.Label>
            <Base.Seperator />
            <Tables>
              <Table ratio={3}>
                <Row>
                  <Column>
                    <Base.Text>K</Base.Text>
                  </Column>
                  <Column>
                    <Base.Text>A</Base.Text>
                  </Column>
                  <Column>
                    <Base.Text>D</Base.Text>
                  </Column>
                  <Column ratio={2} align="end">
                    <Base.Text>Elo</Base.Text>
                  </Column>
                </Row>
                {mock.matches.map((value, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Row key={index} withBorder>
                    <Column>
                      <Base.Text family={FontFamily.RubikBold} opacity=".75">
                        {value.kill}
                      </Base.Text>
                    </Column>
                    <Column>
                      <Base.Text opacity=".5">{value.assist}</Base.Text>
                    </Column>
                    <Column>
                      <Base.Text opacity=".75">{value.death}</Base.Text>
                    </Column>
                    <Column ratio={2} align="end">
                      <Base.Text family={FontFamily.RubikBold}>{value.elo}</Base.Text>
                    </Column>
                  </Row>
                ))}
              </Table>
              <Table ratio={1} style={{ marginTop: +Space.normal }}>
                <Row>
                  <Column align="center">
                    <Base.Text opacity="0">Points</Base.Text>
                  </Column>
                </Row>
                {mock.matches.map((value, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Row key={index} style={{ borderColor: "transparent", borderTopWidth: 1 }}>
                    <Column align="center">
                      <Base.Text
                        family={FontFamily.RubikBold}
                        style={{ color: value.eloPoint > 0 ? Theme.ColorWin : Theme.ColorLost }}>
                        {value.eloPoint > 0 ? "+" : ""}
                        {value.eloPoint}
                      </Base.Text>
                    </Column>
                  </Row>
                ))}
              </Table>
            </Tables>
            <Base.Seperator />
            <Base.Seperator />
          </s.Vertical>
        </s.Padding>
      </s.Box>
      <s.Vertical align="center">
        <s.MoreLabel>See all matches</s.MoreLabel>
      </s.Vertical>
    </s.PressableBox>
  );
}

export default memo(Component);

const Tables = styled(s.Horizontal)`
  width: 100%;
`;

const Table = styled.View<{ ratio?: number }>`
  display: flex;
  flex-direction: column;
  ${({ ratio = 1 }) => `flex: ${ratio};`}
`;

const Row = styled.View<{ withBorder?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: ${Space.xsmall}px;
  padding-top: ${String(+Space.xsmall * 3)}px;
  ${({ theme, withBorder }) => (withBorder ? `border-top-width: 1px; border-color: ${theme.BorderColor};` : "")};
`;

const Column = styled.View<{ ratio?: number } & AlignmentProps & Base.TextProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ align = "start" }) => BoxAlignments[align] || align};
  align-items: center;
  position: relative;
  ${({ ratio = 1 }) => `flex: ${ratio};`}
  margin-left: 2px;
`;
