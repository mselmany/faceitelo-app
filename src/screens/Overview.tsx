import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Api from "../services/Api";
import * as Screen from "../shareds/Screen";
import { IPlayer } from "../typings/types";
import PlayerInfo from "../components/PlayerInfo";
import Buttons, { IButton } from "../shareds/Button";
import * as Boxes from "../components/Boxes/styles";
import Elo from "../components/Boxes/Elo";
import LastEloRatios from "../components/Boxes/LastEloRatios";
import WinRate from "../components/Boxes/WinRate";
import AverageKills from "../components/Boxes/AverageKills";
import WinStreak from "../components/Boxes/WinStreak";
import Ban from "../components/Boxes/Ban";
import LastMatchesTable from "../components/Boxes/LastMatchesTable";

interface Props {
  route: { params: { player: IPlayer } };
}

export default ({ route }: Props) => {
  const { params: { player: _player } = {} } = route;
  const [player, setPlayer] = useState<IPlayer | undefined>(_player);

  console.log(player);
  useEffect(() => {
    if (_player) {
      return;
    }
    (async () => {
      const data = await Api.players();

      setPlayer(data[0]);
    })();
  }, []);

  const buttons = useMemo<IButton[]>(
    () => [
      { text: "All matches", value: "ALL_MATCHES", isActive: true },
      { text: "Last 20", value: "LAST_20" },
      { text: "Last 5", value: "LAST_5" },
    ],
    []
  );

  const onButtonPress = useCallback((button: IButton) => {
    console.log(button, buttons);
  }, []);

  const navigation = useNavigation();

  const onLastEloRatiosDetail = useCallback(() => {
    navigation.navigate("Home");
  }, [navigation]);

  return (
    <Screen.Wrapper>
      <Screen.Status />
      <Screen.Scroll>
        <Screen.Vertical align="center">
          <PlayerInfo player={player} />
          <Buttons list={buttons} onPress={onButtonPress} />
          <Boxes.Container>
            <Boxes.Group>
              <Elo solid>2107</Elo>
              <LastEloRatios solid dots={[-6, 10, -13, 10, 18]} onPress={onLastEloRatiosDetail} />
            </Boxes.Group>
            <Boxes.Group>
              <WinRate />
              <AverageKills />
            </Boxes.Group>
            <Boxes.Group>
              <WinStreak />
              <Ban />
            </Boxes.Group>
            <Boxes.Group>
              <LastMatchesTable solid data={[-6, 10, -13, 10, 18]} onPress={() => null} />
            </Boxes.Group>
          </Boxes.Container>
        </Screen.Vertical>
      </Screen.Scroll>
    </Screen.Wrapper>
  );
};
