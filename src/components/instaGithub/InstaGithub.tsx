import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Posts } from "../Posts/Posts";
import { Header } from "../Header/Header";
import { FooterMain } from "../Footer/FooterS";
import { Main } from "./MainS";

export const InstaGithub = () => {
  return (
    <Main>
      <Header />
      <Posts
        userName={"alvigabriel"}
        sourceHeadBar={{
          uri: "https://github.com/claudionsc.png",
        }}
        sourceMain={{
          uri: "https://github.com/claudionsc.png",
        }}
      />
      <FooterMain />
    </ Main>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 200,
  },
  postImage: {
    width: "100%",
    height: 350,
  },
});
