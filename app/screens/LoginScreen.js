import React, { useEffect } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import AppText from "../components/AppText";
import { useDispatch, useSelector } from "react-redux";
import * as firebase from "firebase";

import Screen from "../components/Screen";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoginScreen = ({ navigation }) => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const IsLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user));
      } else {
        dispatch(logout());
      }
    });
  };

  useEffect(() => {
    IsLoggedIn();
  }, []);
  return (
    <Screen>
      <Container>
        <Button mode="contained" dark>
          Google login
        </Button>
      </Container>
    </Screen>
  );
};

export default LoginScreen;
