import React, { useEffect } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import AppText from "../components/AppText";
import * as firebase from "firebase";

import Screen from "../components/Screen";
import { signInAsync } from "../Service";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoginScreen = ({ navigation }) => {
  return (
    <Screen>
      <Container>
        <Button mode="contained" dark onPress={() => signInAsync(navigation)}>
          Sign in with google
        </Button>
      </Container>
    </Screen>
  );
};

export default LoginScreen;
