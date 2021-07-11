import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Options from "./Options";
import Scores from "./Scores";

export default function App() {
  const [players, setPlayers] = useState([
    { name: "bingo", score: 10 },
    { name: "bongo", score: 7 },
  ]);

  return (
    <View style={styles.container}>
      <Text>Here is the app</Text>
      <Options />
      <Scores players={players} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
