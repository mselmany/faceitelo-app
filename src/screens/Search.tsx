import React, { SetStateAction, useEffect, useState } from "react";
import styled from "@emotion/native";

import AppHead from "../components/AppHead";
import SearchBox from "../components/SearchBox";
import Api from "../services/Api";
import { Space } from "../constants/System";
import * as Screen from "../shareds/Screen";
import PlayerBoxList from "../components/PlayerBoxList";
import { IPlayer } from "../types";

export default function SearchScreen() {
  const [players, setPlayers] = useState<IPlayer[]>();

  useEffect(() => {
    (async () => {
      const data = await Api.players();

      setPlayers(data);
    })();
  }, []);

  const [toggle, setToggle] = useState(false);

  return (
    <Screen.Wrapper>
      <Screen.Status {...{ toggle }} />
      <Screen.Content>
        <AppHead {...{ toggle }} />
        <SearchBox {...{ toggle, setToggle }} />
        <Footer>
          <PlayerList label="Favorites" players={players} />
          <PlayerList label="Recent Searches" players={players} />
        </Footer>
      </Screen.Content>
    </Screen.Wrapper>
  );
}

const Footer = styled.View`
  margin-top: auto;
`;

const PlayerList = styled(PlayerBoxList)`
  margin-bottom: ${Space.screenPadding}px;
`;
