import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Api from "../services/Api";
import * as Screen from "../shareds/Screen";
import { IPlayer } from "../typings/types";
import PlayerInfo from "../components/PlayerInfo";
import Buttons, { IButton } from "../shareds/Button";

interface Props {
  route: { params: { player: IPlayer } };
}

export default ({ route }: Props) => {
  // const {
  //   params: { player: _player },
  // } = route;
  const [player, setPlayer] = useState<IPlayer>(/* _player */);

  console.log(player);
  useEffect(() => {
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
      { text: "Last 20", value: "LAST_201" },
      { text: "Last 5", value: "LAST_52" },
      { text: "Last 20", value: "LAST_203" },
      { text: "Last 5", value: "LAST_54" },
    ],
    []
  );

  const onButtonPress = useCallback((button: IButton) => {
    console.log(button, buttons);
  }, []);

  return (
    <Screen.Wrapper>
      <Screen.Status />
      <Screen.Content>
        <PlayerInfo player={player} />
        <Buttons list={buttons} onPress={onButtonPress} />
      </Screen.Content>
    </Screen.Wrapper>
  );
};
