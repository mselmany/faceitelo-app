import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

import AppHead from "../components/AppHead";
import SearchBoxPlaceholder from "../components/SearchBoxPlaceholder";
import Api from "../services/Api";
import { Space } from "../constants/System";
import * as Screen from "../shareds/Screen";
import PlayerList from "../components/PlayerList";
import { IPlayer } from "../typings/types";
import * as Base from "../shareds/Base";

export default () => {
  const [players, setPlayers] = useState<IPlayer[]>([]);

  useEffect(() => {
    (async () => {
      const data = await Api.players();

      setPlayers(data);
    })();
  }, []);

  const navigation = useNavigation();

  const openSearch = useCallback(() => {
    navigation.navigate("Search");
  }, [navigation]);

  return (
    <Screen.Wrapper>
      <Screen.Content>
        <AppHead />
        <SearchBoxPlaceholder onPress={openSearch} />
        <Footer>
          <PlayerList label="Favorites" players={players} />
          <Base.Seperator ratio="2" />
          <PlayerList label="Recent Searches" players={players} />
        </Footer>
      </Screen.Content>
    </Screen.Wrapper>
  );
};

const Footer = styled.View`
  margin-top: auto;
  margin-bottom: ${Space.screenPadding}px;
`;
