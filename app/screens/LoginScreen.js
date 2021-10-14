import React from "react";
import { ImageBackground, Image, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import AppText from "../components/AppText";

import Screen from "../components/Screen";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Shape = styled(Image)`
  width: 100%;
  height: 300px;
  resize-mode: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;
const TopImage = styled(Image)`
  width: 200px;
  height: 200px;
  resize-mode: contain;
  margin-bottom: 25px;
  margin-top: auto;
`;

const LowerContainer = styled.View`
  height: 50%;
  width: 100%;
  padding-vertical: 10px;
  padding-horizontal: 8%;
`;

const LoginScreen = () => {
  return (
    <Screen>
      <Container>
        <Shape source={require("../assets/Shape1.png")} />
        <TopImage source={require("../assets/add-num.png")} />
        <LowerContainer>
          <AppText
            variant="heading"
            style={{ marginBottom: 10, textAlign: "center" }}
          >
            OTP Verification
          </AppText>
          <AppText variant="caption" style={{ textAlign: "center" }}>
            We will send you an <AppText> One Time Password </AppText>on this
            mobile number you are providing.
          </AppText>

          <View
            style={{
              marginVertical: 10,
              overflow: "hidden",
            }}
          >
            <TextInput label="Mobile number" mode="outlined" />
            <Button
              mode="contained"
              style={{ marginTop: 10, paddingVertical: 7, borderRadius: 5 }}
              uppercase
              dark
            >
              GET OTP
            </Button>
          </View>
        </LowerContainer>
      </Container>
    </Screen>
  );
};

export default LoginScreen;
