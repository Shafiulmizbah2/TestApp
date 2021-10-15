import firebase from "firebase";
import * as Google from "expo-google-app-auth";

export const signInAsync = async (navigation) => {
  console.log("LoginScreen.js 6 | loggin in");
  try {
    const { type, user } = await Google.logInAsync({
      // iosClientId: `<YOUR_IOS_CLIENT_ID>`,
      androidClientId:
        "563862798699-fu8bs8ufdc42j1hk2ersmqf18dedc995.apps.googleusercontent.com",
    });

    if (type === "success") {
      // console.log(user);
      navigation.navigate("Home", { user: user });
    }
  } catch (error) {
    console.log("LoginScreen.js 19 | error with login", error);
  }
};
