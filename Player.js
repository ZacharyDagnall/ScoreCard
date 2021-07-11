import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Player = ({ name, score }) => {
  return (
    <View style={styles.container}>
      <Text>
        my name is {name} and my score is {score}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Player;
