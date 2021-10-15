// In App.js in a new project

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import BookmarkScreen from "../screens/BookmarkScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{ headerShown: true, title: "All Bookmarks" }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedStack;
