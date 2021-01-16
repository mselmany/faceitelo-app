import React, { memo } from "react";
import { SharedElement } from "react-navigation-shared-element";

import appJson from "../../../app.json";

import * as s from "./styles";

const { version, name, description } = appJson.expo;

function View(p) {
  return (
    <s.Container>
      <s.HeadAndVersion>
        <SharedElement id="title">
          <s.Title toggled={p.toggle}>{name}</s.Title>
        </SharedElement>
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
