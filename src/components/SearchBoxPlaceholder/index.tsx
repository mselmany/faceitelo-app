import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";

import View from "./view";

interface Props {}

export interface ViewProps extends Props {
  openSearch: () => void;
}

function Controller(p: Props) {
  const navigation = useNavigation();

  const openSearch = useCallback(() => {
    navigation.navigate("Search");
  }, [navigation]);

  return <View {...{ ...p, openSearch }} />;
}

export default Controller;
