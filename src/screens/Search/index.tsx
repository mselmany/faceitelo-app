import React from "react";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation } from "@react-navigation/native";

import * as Screen from "../../shareds/Screen";
import appJson from "../../../app.json";
import * as Base from "../../shareds/Base";

import * as s from "./styles";

const { name } = appJson.expo;

export default () => {
  const navigation = useNavigation();

  return (
    <Screen.Wrapper>
      {/* <Screen.Status {...{ toggle }} /> */}
      <Screen.Content>
        <s.Container>
          <SharedElement id="title">
            <s.Title>{name}</s.Title>
          </SharedElement>
        </s.Container>

        <SharedElement id="search">
          <s.Box
            onPress={() => {
              navigation.navigate("Home");
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
      </Screen.Content>
    </Screen.Wrapper>
  );
};
