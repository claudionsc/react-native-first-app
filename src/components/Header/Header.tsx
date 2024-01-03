import React from "react";
import { View, Image, Text } from "react-native";
import { HeaderMain, HeaderStories, HeaderStoriesImage } from "./HeaderS";

export const Header = () => {
  const stories = ["Pessoa1", "Pessoa2", "Pessoa3", "Pessoa4", "Pessoa5"];

  return (
    <>
      <HeaderMain>
        <Text>Instagram</Text>
        <HeaderStories>
          {stories.map(() => (
            <HeaderStoriesImage
              source={{
                uri: "https://github.com/claudionsc.png",
              }}
            />
          ))}
        </HeaderStories>
      </HeaderMain>
    </>
  );
};
