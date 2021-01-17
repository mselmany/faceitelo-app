import React, { memo } from "react";
import Animated from "react-native-reanimated";

import * as Base from "../../shareds/Base";

import * as s from "./styles";

import { ViewProps } from "./index";

function View(p: ViewProps) {
  return (
    <s.Box onPress={() => p.openSearch()}>
      <Base.BoxLine>
        <Base.Label>Search</Base.Label>
      </Base.BoxLine>
      <Base.Seperator />
      <Base.BoxLine>
        <Base.Head>Search by nickname</Base.Head>
      </Base.BoxLine>
    </s.Box>
  );
}

export default memo(View);
