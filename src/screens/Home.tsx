import React, { useEffect, useState } from "react";
import styled from "@emotion/native";

import AppHead from "../components/AppHead";
import SearchBoxPlaceholder from "../components/SearchBoxPlaceholder";
import Api from "../services/Api";
import { Space } from "../constants/System";
import * as Screen from "../shareds/Screen";
import PlayerBoxList from "../components/PlayerBoxList";
import { IPlayer } from "../typings/types";

export default () => {
  const [players, setPlayers] = useState<IPlayer[]>();

  useEffect(() => {
    (async () => {
      const data = await Api.players();

      setPlayers(data);
    })();
  }, []);

  return (
    <Screen.Wrapper>
      <Screen.Content>
        <AppHead />
        <SearchBoxPlaceholder />
        <Footer>
          <PlayerList label="Favorites" players={players} />
          <PlayerList label="Recent Searches" players={players} />
        </Footer>
      </Screen.Content>
    </Screen.Wrapper>
  );
};

const Footer = styled.View`
  margin-top: auto;
`;

const PlayerList = styled(PlayerBoxList)`
  margin-bottom: ${Space.screenPadding}px;
`;