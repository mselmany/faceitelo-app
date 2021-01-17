import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";

import View from "./view";

interface Props {
  isActive?: boolean;
}

export interface ViewProps extends Props {
  openSearch: () => void;
}

function Controller(p: Props) {
  const navigation = useNavigation();

  const openSearch = useCallback(() => {
    if (!p.isActive) {
      navigation.navigate("Search");
    }
  }, [p.isActive, navigation]);

  return <View {...{ ...p, openSearch }} />;
}

export default Controller;
