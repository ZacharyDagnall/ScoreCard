import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Player from "./Player";

const Scores = ({ players, baseScore }) => {
  return (
    <View>
      <Text>here are the scores:</Text>
      {players.map((pl, i) => {
        return (
          <Player
            key={i}
            name={pl.name}
            score={pl.score}
            baseScore={baseScore}
          />
        );
      })}
    </View>
  );
};

export default Scores;
