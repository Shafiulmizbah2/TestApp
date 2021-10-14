import React, { useEffect } from "react";
import { View, Text } from "react-native";
import {
  Provider as StoreProvider,
  useDispatch,
  useSelector,
} from "react-redux";
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

import { NavigationContainer } from "@react-navigation/native";
import AuthenticatedStack from "./app/Navigation/AuthenticatedStack";
import * as firebase from "firebase";
import { firebaseConfig } from "./app/config";
import { login, logout } from "./app/store/slices/userSlice";
import myStore from "./app/store";
import LoginStack from "./app/Navigation/LoginStack";

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
    <>
      <StoreProvider store={myStore}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <AuthenticatedStack />
            {/* <LoginStack /> */}
          </NavigationContainer>
        </PaperProvider>
      </StoreProvider>
    </>
  );
};

export default App;
