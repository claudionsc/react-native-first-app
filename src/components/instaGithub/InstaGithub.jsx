import React from 'react'
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';


export const InstaGithub = () => {
  return (
    <>
    <View>
      <Text>alvigabriel</Text>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://github.com/claudionsc.png",
          }}
        />
      </View>
        <Image
          style={styles.postImage}
          source={{
            uri: "https://github.com/claudionsc.png",
          }}
        />
      <View>
        <AntDesign name="hearto" size={24} color="black" />
      </View></>
  )
}

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
