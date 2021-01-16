import React, { memo } from "react";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation } from "@react-navigation/native";

import * as Base from "../../shareds/Base";

import * as s from "./styles";

import { ViewProps } from "./index";

function View(p: ViewProps) {
  const navigation = useNavigation();
  return (
    <SharedElement id="search">
      <s.Box
        toggled={p.toggle}
        onPress={() => {
          navigation.navigate(p.toggle ? "Home" : "Search");
          p.setToggle((prev) => !prev);
        }}>
        <Base.BoxLine>
          <Base.Label>Search</Base.Label>
        </Base.BoxLine>
        <Base.Seperator />
        <Base.BoxLine>
          <Base.Head>Search by nickname</Base.Head>
        </Base.BoxLine>
      </s.Box>
    </SharedElement>
  );
}

export default memo(View);
