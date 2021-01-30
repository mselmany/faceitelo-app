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
        {buttons.map((button, index) => (
          <Button
            key={button.value}
            isActive={button.isActive}
            onPress={() => onButtonPress(button)}
            isLast={buttons.length - 1 === index}>
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

Scroll.defaultProps = { contentContainerStyle: { alignItems: "center" } };

interface ButtonProps {
  children: ReactChildren | string;
  onPress: () => void;
  isActive?: boolean;
  isLast?: boolean;
}

export const Button = (p: ButtonProps) => (
  <>
    <ButtonItem {...p}>
      <Text {...p}>{p.children}</Text>
    </ButtonItem>
    {!p.isLast && <Point>•</Point>}
  </>
);

const ButtonItem = styled.TouchableOpacity<{ isActive?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${Space.small}px;
  border-radius: ${Radius.normal}px;
  background-color: ${({ theme, isActive }) => (isActive ? theme.Color10 : "transparent")};
`;

const Text = styled.Text<{ isActive?: boolean }>`
  font-size: ${FontSize.small}px;
  font-family: ${FontFamily.Rubik};
  color: ${({ theme, isActive }) => (isActive ? theme.Color75 : theme.Color50)};
`;

const Point = styled.Text`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 ${Space.small}px;
  font-size: ${FontSize.small}px;
  font-family: ${FontFamily.RubikBold};
  color: ${({ theme }) => theme.Color50};
`;
