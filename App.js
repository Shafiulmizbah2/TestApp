import React from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Manrope_400Regular,
  Manrope_600SemiBold,
} from "@expo-google-fonts/manrope";

import LoginScreen from "./app/screens/LoginScreen";
import store from "./app/store";
import VerificationScreen from "./app/screens/VerificationScreen";

const fontConfig = {
  web: {
    regular: {
      fontFamily: "sans-serif",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "sans-serif-medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "sans-serif-light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "sans-serif-thin",
      fontWeight: "normal",
    },
  },
  ios: {
    regular: {
      fontFamily: "Manrope_400Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Manrope_600SemiBold",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "Manrope_400Regular",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "Manrope_400Regular",
      fontWeight: "normal",
    },
  },
  android: {
    regular: {
      fontFamily: "Manrope_400Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Manrope_600SemiBold",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "Manrope_400Regular",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "Manrope_400Regular",
      fontWeight: "normal",
    },
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f9f9f9",
  },
  fonts: configureFonts(fontConfig),
};

const App = () => {
  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_600SemiBold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <LoginScreen />
        {/* <VerificationScreen /> */}
      </PaperProvider>
    </Provider>
  );
};

export default App;
