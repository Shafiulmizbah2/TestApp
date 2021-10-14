import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import AppText from "./AppText";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 25px;
`;

const Details = styled.View`
  width: 80%;
  padding-horizontal: 10px;
  margin-left: 10px;
`;

const ActionBar = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: auto;
  align-items: center;
  justify-content: space-between;
`;

const ActionBarLeft = styled.View`
  width: 60%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ArticleItem = ({ title, details, like, postTime }) => {
  return (
    <Container>
      <View
        style={{
          height: 90,
          width: "20%",
          backgroundColor: "#ddd",
          borderRadius: 10,
        }}
      />

      <Details>
        <AppText
          numberOfLines={1}
          style={{
            textTransform: "uppercase",
            fontFamily: "Manrope_600SemiBold",
            fontSize: 12,
            color: "#3498db",
          }}
        >
          {title}
        </AppText>
        <AppText
          numberOfLines={2}
          variant="caption"
          style={{
            color: "#000000",
          }}
        >
          {details}
        </AppText>

        <ActionBar>
          <ActionBarLeft>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                name="like2"
                size={15}
                color="black"
                style={{ marginRight: 4 }}
              />
              <AppText
                variant="caption"
                style={{
                  color: "#000000",
                }}
              >
                {like}
              </AppText>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                name="infocirlce"
                size={15}
                color="black"
                style={{ marginRight: 4 }}
              />
              <AppText
                variant="caption"
                style={{
                  color: "#000000",
                }}
              >
                1hour age
              </AppText>
            </View>
          </ActionBarLeft>
          <Feather name="bookmark" size={20} color="black" />
        </ActionBar>
      </Details>
    </Container>
  );
};

export default ArticleItem;
