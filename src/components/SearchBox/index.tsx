import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Api from "../../services/Api";
import { IPlayer } from "../../typings/types";
import useDebounce from "../../utils/useDebounce";

import View from "./view";

interface Props {
  isFocused?: boolean;
}

export interface ViewProps extends Props {
  list: IPlayer[];
  text?: string;
  onChangeText: (text: string) => void;
  onSelect: (user: IPlayer) => void;
}

function Controller(p: Props) {
  const [text, onChangeText] = useState<string>("jw");
  const [list, setList] = useState<IPlayer[]>([]);

  const navigation = useNavigation();

  const debouncedText = useDebounce(text, 350);

  useEffect(() => {
    (async () => {
      const players = await Api.players(debouncedText);
      setList(players);
    })();
  }, [debouncedText]);

  const onSelect = useCallback(
    (player: IPlayer) => {
      navigation.navigate("Overview", { player });
    },
    [navigation]
  );

  return (
    <View
      {...{
        ...p,
        list,
        text,
        onChangeText,
        onSelect,
      }}
    />
  );
}

export default Controller;
