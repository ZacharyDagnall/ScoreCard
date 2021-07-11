import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Player from "./Player";

const Scores = ({ players }) => {
  return (
    <View>
      <Text>here are the scores:</Text>
      {players.map((pl, i) => {
        return <Player name={pl.name} score={pl.score} />;
      })}
    </View>
  );
};

export default Scores;
