import React, { memo, ReactChildren, useCallback, useState } from "react";
import styled from "@emotion/native";

import { Space, Radius, FontSize, FontFamily } from "../constants/System";

export interface IButton {
  text: string;
  value: string;
  isActive?: boolean;
}

interface Props {
  list: IButton[];
  onPress: (button: IButton) => void;
}

const Buttons = (p: Props) => {
  const [buttons, setButtons] = useState<IButton[]>(() => p.list);

  const onButtonPress = useCallback(
    (button: IButton) => {
      if (button.isActive) {
        return;
      }
      setButtons((prev) =>
        prev.map((b) => {
          b.isActive = b.value === button.value;
          return b;
        })
      );

      p.onPress(button);
    },
    [p]
  );

  return (
    <Container>
      <Scroll horizontal showsHorizontalScrollIndicator={false}>
        {buttons.map((button) => (
          <Button key={button.value} isActive={button.isActive} onPress={() => onButtonPress(button)}>
            {button.text}
          </Button>
        ))}
      </Scroll>
    </Container>
  );
};

export default memo(Buttons);

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 90%;
  padding: 5px;
  margin: 0 ${Space.screenPadding}px;
  background-color: ${({ theme }) => theme.BackgroundComponent};
  border-radius: ${Radius.large}px;
`;

export const Scroll = styled.ScrollView`
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  flex-grow: 0;
  border-radius: ${Radius.normal}px;
`;

interface ButtonProps {
  children: ReactChildren | string;
  onPress: () => void;
  isActive?: boolean;
}

export const Button = (p: ButtonProps) => (
  <ButtonItem onPress={p.onPress}>
    <Text {...p}>{p.children}</Text>
  </ButtonItem>
);

const ButtonItem = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.Text<{ isActive?: boolean }>`
  background-color: ${({ theme, isActive }) => (isActive ? theme.BackgroundComponent__Contrast : "transparent")};
  padding: ${Space.small}px;
  border-radius: ${Radius.normal}px;
  font-size: ${FontSize.small}px;
  font-family: ${FontFamily.Rubik};
  color: ${({ theme, isActive }) => (isActive ? theme.Color75 : theme.Color50)};
`;
