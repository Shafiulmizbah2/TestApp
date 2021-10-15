import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { View, Text, ScrollView } from "react-native";
import Screen from "../components/Screen";
import firebase from "firebase/app";
import ArticleItem from "../components/ArticleItem";
import { ActivityIndicator } from "react-native-paper";

const Container = styled(ScrollView)`
  flex: 1;
  padding: 20px;
`;

const BookmarkScreen = () => {
  const [totalBookmarks, setTotalBookmarks] = useState([]);
  const firestore = firebase.firestore();

  var copyBookmarks = [];

  const getAllBookmarks = () => {
    firestore.collection("bookmarks").onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        copyBookmarks.push(doc.data());
      });

      setTotalBookmarks(copyBookmarks);
    });
  };

  useEffect(() => {
    getAllBookmarks();
  }, []);

  if (totalBookmarks.length === 0)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator animating={true} size={40} color="red" />
      </View>
    );

  return (
    <Screen>
      <Container>
        {totalBookmarks.map((item) => (
          <ArticleItem
            key={`${item.title} ${Math.random() * 2}`}
            title={item.title}
            like={item.like}
            details={item.details}
          />
        ))}
      </Container>
    </Screen>
  );
};

export default BookmarkScreen;
