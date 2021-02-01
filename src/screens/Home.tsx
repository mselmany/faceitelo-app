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

  const navigateSearch = useCallback(() => {
    navigation.navigate("Search");
  }, [navigation]);

  const onPlayerSelect = useCallback(
    (player: IPlayer) => {
      navigation.navigate("Overview", { player });
    },
    [navigation]
  );

  return (
    <Screen.Wrapper>
      <Screen.Content>
        <AppHead />
        <SearchBoxPlaceholder onPress={navigateSearch} />
        <Footer>
          <PlayerList label="Favorites" players={players} onPress={onPlayerSelect} />
          <Base.Seperator ratio="2" />
          <PlayerList label="Recent Searches" players={players} onPress={onPlayerSelect} />
        </Footer>
      </Screen.Content>
    </Screen.Wrapper>
  );
};

const Footer = styled.View`
  margin-top: auto;
  margin-bottom: ${Space.screenPadding}px;
`;
