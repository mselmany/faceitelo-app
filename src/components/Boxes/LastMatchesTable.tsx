import React, { memo } from "react";
import styled from "@emotion/native";

import { FontFamily, FontSize, Space } from "../../constants/System";
import * as Base from "../../shareds/Base";

import * as s from "./styles";
import { AlignmentProps, BoxAlignments, BoxProps, TextAlignments, TextProps } from "./styles";
import Theme from "../../constants/Theme";

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
  ],
};

function Component(p: Props & Partial<BoxProps>) {
  return (
    <s.PressableBox {...p}>
      <s.Box>
        <s.Padding>
          <s.Vertical>
            <s.Label>Last matches results</s.Label>
            <Base.Seperator />
            <Table>
              <Row withBorder>
                <Column>
                  <Text>K</Text>
                </Column>
                <Column>
                  <Text>A</Text>
                </Column>
                <Column>
                  <Text>D</Text>
                </Column>
                <Column ratio={2} align="end">
                  <Text family={FontFamily.RubikBold}>Elo</Text>
                </Column>
                <Column ratio={2} align="end">
                  <Text family={FontFamily.RubikBold}>Points</Text>
                </Column>
              </Row>
              {mock.matches.map((value, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Row key={index} withBorder>
                  <Column>
                    <Text>{value.kill}</Text>
                  </Column>
                  <Column>
                    <Text opacity=".5">{value.assist}</Text>
                  </Column>
                  <Column>
                    <Text opacity=".75">{value.death}</Text>
                  </Column>
                  <Column ratio={2} align="end">
                    <Text family={FontFamily.RubikBold}>{value.elo}</Text>
                  </Column>
                  <Column ratio={2}>
                    <EloPointHidden>
                      <Text style={{ opacity: 0 }}>{value.eloPoint}</Text>
                    </EloPointHidden>
                    <EloPoint style={{ color: value.eloPoint > 0 ? Theme.ColorWin : Theme.ColorLost }}>
                      {value.eloPoint > 0 ? "+" : ""}
                      {value.eloPoint}
                    </EloPoint>
                  </Column>
                </Row>
              ))}
            </Table>
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

const Table = styled.View`
  display: flex;
  width: 100%;
`;

const Row = styled.View<{ withBorder?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: ${Space.xsmall}px;
  padding-right: 0;
  padding-top: ${String(+Space.xsmall * 3)}px;
  ${({ theme, withBorder }) => (withBorder ? `border-bottom-width: 1px; border-color: ${theme.BorderColor};` : "")};
`;

const Column = styled.View<{ ratio?: number } & AlignmentProps & TextProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ align = "start" }) => BoxAlignments[align] || align};
  align-items: center;
  position: relative;
  ${({ ratio = 1 }) => `flex: ${ratio};`}
  margin-left: 2px;
`;

const Text = styled.Text<{ opacity?: number | string } & TextProps>`
  font-size: ${({ size = FontSize.small }) => String(size)}px;
  font-family: ${({ family = FontFamily.Rubik }) => family};
  color: ${({ theme }) => theme.ColorPrimary};
  opacity: ${({ opacity = 1 }) => opacity};
`;

const EloPointHidden = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.BackgroundMain};
  bottom: -${Space.small}px;
  z-index: 1;
`;

const EloPoint = styled(Text)`
  position: absolute;
  margin-bottom: -${Space.xsmall}px;
  bottom: -50%;
  left: ${Space.xlarge}px;
  z-index: 2;
`;

const Aligner = styled.View<{ align: "left" | "center" | "right" }>`
  ${({ align }) => (align === "left" ? "margin-right: auto;" : "")}
  ${({ align }) => (align === "center" ? "margin: 0 auto;" : "")}
  ${({ align }) => (align === "right" ? "margin-left: auto;" : "")}
`;
