import React, { memo } from "react";

import appJson from "../../../app.json";

import * as s from "./styles";

import { ViewProps } from ".";

const { version, name, description } = appJson.expo;

function View(p: ViewProps) {
  return (
    <s.Container style={p.fadeOutStyle}>
      <s.HeadAndVersion>
        <s.Title>{name}</s.Title>
        <s.Version>
          <s.VersionText>
            Beta <s.VersionTextOpac>{version}</s.VersionTextOpac>
          </s.VersionText>
        </s.Version>
      </s.HeadAndVersion>
      <s.Description>{description}</s.Description>
    </s.Container>
  );
}

export default memo(View);
