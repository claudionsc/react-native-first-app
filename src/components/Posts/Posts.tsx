import React from "react";
import { useState } from "react";
import { ImageSourcePropType, View } from "react-native";
import {
  PostHeadBar,
  PostMainImage,
  PostsIconsBottom,
  PostsImage,
  PostsText,
  PostsView,
} from "./PostsS";
import {
  Entypo,
  AntDesign,
  SimpleLineIcons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";

interface PostsProps {
  userName: string;
  sourceHeadBar: ImageSourcePropType;
  sourceMain: ImageSourcePropType;
}

export const Posts = ({ userName, sourceHeadBar, sourceMain }: PostsProps) => {
  const [clicked, setClicked] = useState(false);

  function isTrueBookMark() {
    return (
      <FontAwesome
        onPress={() => setClicked(true)}
        name="bookmark-o"
        size={24}
        color="black"
      />
    );
  }

  function isFalseBookMark() {
    return (
      <FontAwesome
        onPress={() => setClicked(false)}
        name="bookmark"
        size={24}
        color="black"
      />
    );
  }

  return (
    <PostsView>
      <PostHeadBar>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <PostsImage source={sourceHeadBar} />
          <PostsText>{userName}</PostsText>
        </View>
        <Entypo name="dots-three-horizontal" size={24} color="black" />
      </PostHeadBar>

      <PostMainImage source={sourceMain} />

      <PostsIconsBottom>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "30%",
          }}
        >
          <AntDesign name="hearto" size={24} color="black" />
          <FontAwesome5 name="comment" size={24} color="black" />
          <SimpleLineIcons name="paper-plane" size={24} color="black" />
        </View>
        {clicked === false ? isTrueBookMark() : isFalseBookMark()}
      </PostsIconsBottom>
    </PostsView>
  );
};
