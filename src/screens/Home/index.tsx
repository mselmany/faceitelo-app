import React, { useEffect, useState } from "react";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation } from "@react-navigation/native";

import Api from "../../services/Api";
import * as Screen from "../../shareds/Screen";
import { IPlayer } from "../../types";
import appJson from "../../../app.json";
import * as Base from "../../shareds/Base";

import * as s from "./styles";

const { version, name, description } = appJson.expo;

export default () => {
  const [players, setPlayers] = useState<IPlayer[]>();
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const data = await Api.players();

      setPlayers(data);
    })();
  }, []);

  return (
    <Screen.Wrapper>
      {/* <Screen.Status {...{ toggle }} /> */}
      <Screen.Content>
        <s.Container>
          <s.HeadAndVersion>
            <SharedElement id="title">
              <s.Title>{name}</s.Title>
            </SharedElement>
            <s.Version>
              <s.VersionText>
                Beta <s.VersionTextOpac>{version}</s.VersionTextOpac>
              </s.VersionText>
            </s.Version>
          </s.HeadAndVersion>
          <s.Description>{description}</s.Description>
        </s.Container>

        <SharedElement id="search">
          <s.Box
            onPress={() => {
              navigation.navigate("Search");
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
