import React from "react";
import styled from "styled-components/native";
import { Text, SafeAreaView, StatusBar, Platform } from "react-native";

const StyledScreen = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
  background-color: #f9f9f9;
`;

const Screen = ({ children }) => {
  return <StyledScreen>{children}</StyledScreen>;
};

export default Screen;
