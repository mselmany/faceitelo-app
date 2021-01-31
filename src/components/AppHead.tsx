import React, { memo } from "react";
import styled from "@emotion/native";

import appJson from "../../app.json";
import * as Base from "../shareds/Base";
import { FontSize, FontFamily, Space } from "../constants/System";

const { version, name, description } = appJson.expo;

function Component(p: any) {
  return (
    <Container>
      <Base.Horizontal>
        <Title family="Prompt">{name}</Title>
        <Version>
          <VersionText>Beta</VersionText>
          <VersionText opacity=".5"> • {version}</VersionText>
        </Version>
      </Base.Horizontal>
      <Base.Text family="RubikLight" size="normal" color="Color50">
        {description}
      </Base.Text>
    </Container>
  );
}

export default memo(Component);

const Container = styled(Base.Vertical)`
  padding: ${(+Space.screenPadding * 2).toString()}px;
`;

const Title = styled(Base.Text)`
  font-size: 60px;
`;

const Version = styled.View`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-right: auto;
  position: relative;
  top: 5px;
  left: ${Space.large}px;
  padding: 4px 8px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.BackgroundGreen};
`;

const VersionText = styled(Base.Text)`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: ${FontSize.xsmall}px;
  font-family: ${FontFamily.BarlowCondensedSemiBold};
  color: ${({ theme }) => theme.ColorGreen};
`;
