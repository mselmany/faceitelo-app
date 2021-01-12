import React, { ReactElement, ReactNode, useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

interface IResourceLoader {
  skipLoadingScreen?: boolean;
  children: ReactElement;
}

export default function ResourceLoader({ skipLoadingScreen = false, children }: IResourceLoader): ReactElement {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      // eslint-disable-next-line no-console
      <AppLoading startAsync={loadResourcesAsync} onError={console.warn} onFinish={() => setIsLoadingComplete(true)} />
    );
  } else {
    return children;
  }
}

export async function loadResourcesAsync(): Promise<any> {
  await Promise.all([
    Font.loadAsync({
      RubikLight: require("../../assets/fonts/Rubik-Light.ttf"),
      Rubik: require("../../assets/fonts/Rubik-Regular.ttf"),
      RubikBold: require("../../assets/fonts/Rubik-Bold.ttf"),

      WorkSansLight: require("../../assets/fonts/WorkSans-Light.ttf"),
      WorkSans: require("../../assets/fonts/WorkSans-Regular.ttf"),
      WorkSansBold: require("../../assets/fonts/WorkSans-Bold.ttf"),

      PromptLight: require("../../assets/fonts/Prompt-Light.ttf"),
      Prompt: require("../../assets/fonts/Prompt-Medium.ttf"),
      PromptBold: require("../../assets/fonts/Prompt-Bold.ttf"),

      BarlowLight: require("../../assets/fonts/Barlow-Light.ttf"),
      Barlow: require("../../assets/fonts/Barlow-Regular.ttf"),
      BarlowSemiBold: require("../../assets/fonts/Barlow-SemiBold.ttf"),
      BarlowBold: require("../../assets/fonts/Barlow-Bold.ttf"),

      BarlowCondensedLight: require("../../assets/fonts/BarlowCondensed-Light.ttf"),
      BarlowCondensed: require("../../assets/fonts/BarlowCondensed-Regular.ttf"),
      BarlowCondensedSemiBold: require("../../assets/fonts/BarlowCondensed-SemiBold.ttf"),
      BarlowCondensedBold: require("../../assets/fonts/BarlowCondensed-Bold.ttf"),
    }),
  ]);
}
