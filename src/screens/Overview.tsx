import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

import Api from "../services/Api";
import * as Screen from "../shareds/Screen";
import * as Base from "../shareds/Base";
import { IPlayer } from "../@types/types";
import PlayerInfo from "../components/PlayerInfo";
import Buttons, { IButton } from "../components/Button";
import * as Boxes from "../components/Boxes/styles";
import Elo from "../components/Boxes/Elo";
import LastEloRatios from "../components/Boxes/LastEloRatios";
import WinRate from "../components/Boxes/WinRate";
import AverageKills from "../components/Boxes/AverageKills";
import WinStreak from "../components/Boxes/WinStreak";
import Ban from "../components/Boxes/Ban";
import LastMatchesTable from "../components/Boxes/LastMatchesTable";
import PlayerList from "../components/PlayerList";

interface Props {
  route: { params: { nicknameOrId: string; tab: string } };
}

export default ({ route }: Props) => {
  const { params: { nicknameOrId = "JW-JW", tab = "ALL_MATCHES" } = {} } = route;

  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [player, setPlayer] = useState<IPlayer>(null);

  const scrollElement = useRef<ScrollView>(null);

  useEffect(() => {
    (async () => {
      const _player = await Api.player(nicknameOrId);
      setPlayer(_player);

      const _players = await Api.players();
      setPlayers(_players);
    })();
  }, [nicknameOrId]);

  const buttons = useMemo<IButton[]>(
    () =>
      [
        { text: "All matches", value: "ALL_MATCHES", isActive: true },
        { text: "Last 20", value: "LAST_20" },
        { text: "Last 5", value: "LAST_5" },
      ].map((t) => {
        t.isActive = t.value === tab;
        return t;
      }),
    [tab]
  );

  const navigation = useNavigation();

  const onButtonPress = useCallback(
    (button: IButton) => {
      navigation.navigate("Overview", { nicknameOrId, tab: button.value });
    },
    [navigation, nicknameOrId]
  );

  const onLastEloRatiosDetail = useCallback(() => {
    navigation.navigate("Home");
  }, [navigation]);

  const onPlayerSelect = useCallback(
    (player: IPlayer) => {
      navigation.navigate("Overview", { nicknameOrId: player?.player_id });

      scrollElement.current?.scrollTo({ y: 0, animated: true });
    },
    [navigation]
  );

  return (
    <Screen.Wrapper>
      <Screen.Status />
      <Screen.Scroll ref={scrollElement}>
        <Screen.Vertical align="center">
          <PlayerInfo player={player} />
          <Buttons list={buttons} onPress={onButtonPress} />
          <Base.Seperator ratio="3" />
          <Boxes.Container>
            <Boxes.Group noPadding>
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
        <Base.Seperator ratio="3" />
        <PlayerList label="Friends" players={players} onPress={onPlayerSelect} />
        <Base.Seperator ratio="2" />
      </Screen.Scroll>
    </Screen.Wrapper>
  );
};
