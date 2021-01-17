import React, { useCallback, useEffect, useState } from "react";

import Api from "../../services/Api";
import { IPlayer } from "../../typings/types";

import View from "./view";

interface Props {
  isFocused?: boolean;
}

export interface ViewProps extends Props {
  list: IPlayer[];
  text?: string;
  onSearch: () => void;
  onChangeText: () => void;
  onSelect: () => void;
}

function Controller(p: Props) {
  const [text, onChangeText] = useState("hüsame");
  const [list, setList] = useState<IPlayer[]>([]);

  useEffect(() => {
    (async () => {
      const data = await Api.players();

      setList(data);
      console.log(data);
    })();
  }, []);

  const onSearch = useCallback(() => {}, []);
  const onSelect = useCallback(() => {}, []);

  return (
    <View
      {...{
        ...p,
        list,
        text,
        onChangeText,
        onSearch,
        onSelect,
      }}
    />
  );
}

export default Controller;
