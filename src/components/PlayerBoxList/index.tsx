import React, { Dispatch, SetStateAction, useCallback } from "react";

import { IPlayer } from "../../typings/types";

import View from "./view";

interface Props {
  players: IPlayer[];
  label: string;
}

export interface ViewProps extends Props {
  onSelect: Dispatch<SetStateAction<any>>;
}

function Controller(p: Props) {
  const onSelect = useCallback((item) => {
    console.log(item);
  }, []);

  return <View {...p} onSelect={onSelect} />;
}

export default Controller;
