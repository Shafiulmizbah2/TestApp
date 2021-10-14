import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { View, Text, ScrollView } from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import {
  ActivityIndicator,
  Button,
  FAB,
  IconButton,
  Searchbar,
} from "react-native-paper";
import ArticleItem from "../components/ArticleItem";
import axios from "axios";

const Container = styled(ScrollView)`
flex;1;
padding: 15px;

`;

const HeadLineContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);

  const getArticles = () => {
    axios
      .get(" https://news.sobjanta.live/public/api/news")
      .then((res) => {
        // console.log("res");
        setArticles(res.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getArticles();
  }, []);

  console.log(typeof articles);

  return (
    <Screen>
      <Container>
        <HeadLineContainer>
          <AppText variant="heading">Articles</AppText>
          <IconButton
            icon="menu"
            size={25}
            onPress={() => navigation.navigate("Bookmark")}
          />
        </HeadLineContainer>
        <Searchbar
          placeholder="Search here..."
          style={{ borderRadius: 20, marginVertical: 10 }}
        />
        <HeadLineContainer>
          <AppText variant="heading2">Newest</AppText>
          <Button uppercase={false}>More</Button>
        </HeadLineContainer>
        {articles?.map((article) => (
          <ArticleItem
            title={article.title}
            details={article.detail_news}
            like={article.view_count}
          />
        ))}
        {articles.length === 0 && (
          <ActivityIndicator animating={true} size={30} color="red" />
        )}
      </Container>
      <FAB
        large
        icon="plus"
        label="Create post"
        color="#f9f9f9"
        style={{
          position: "absolute",
          margin: 16,
          right: 0,
          bottom: 0,
          backgroundColor: "#3498db",
        }}
      />
    </Screen>
  );
};

export default HomeScreen;
