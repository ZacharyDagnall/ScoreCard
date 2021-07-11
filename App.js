import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Options from "./Options";
import Scores from "./Scores";
const height = Dimensions.get("window").height;

export default function App() {
  const [players, setPlayers] = useState([
    { name: "bingo", score: 10 },
    { name: "bongo", score: 7 },
  ]);
  const [baseScore, setBaseScore] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Keeping Score</Text>
      <Options setPlayers={setPlayers} setBaseScore={setBaseScore} />
      <Scores players={players} baseScore={baseScore} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9D9EB",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: height,
  },
});
