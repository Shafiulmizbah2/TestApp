import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import Screen from "../components/Screen";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const BookmarkScreen = () => {
  return (
    <Screen>
      <Container>
        <Text>Bookmark page</Text>
      </Container>
    </Screen>
  );
};

export default BookmarkScreen;
