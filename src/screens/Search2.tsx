import React, { useEffect, useState } from "react";
import styled from "@emotion/native";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation } from "@react-navigation/native";

import AppHead from "../components/AppHead";
import SearchBox from "../components/SearchBox";
import Api from "../services/Api";
import { Space } from "../constants/System";
import * as Screen from "../shareds/Screen";
import PlayerBoxList from "../components/PlayerBoxList";
import { IPlayer } from "../types";

export default () => {
  const [players, setPlayers] = useState<IPlayer[]>();

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const data = await Api.players();

      setPlayers(data);
    })();
  }, []);

  const [toggle, setToggle] = useState(false);

  return (
    <Container
      onStartShouldSetResponder={() => {
        navigation.navigate("Search3");
        return true;
      }}>
      <SharedElement id="QWE" style={{ flex: 1 }}>
        <View>
          <Text>deneme</Text>
        </View>
      </SharedElement>
      <SharedElement id="QWE2" style={{ flex: 1 }}>
        <Text>deneme</Text>
      </SharedElement>
    </Container>
  );
};

const Container = styled.View`
  background-color: red;
  display: flex;
  flex: 1;
`;

const View = styled.View`
  background-color: black;
  width: 200px;
  height: 200px;
`;

const Text = styled.Text`
  font-size: 13px;
`;
