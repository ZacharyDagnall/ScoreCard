import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";

const Options = ({ setPlayers, setBaseScore }) => {
  const [base, setBase] = useState(0);

  return (
    <View>
      <Text>Options</Text>
      <Pressable
        //   style={
        //     quitBTNpressed
        //       ? [styles.quitGameButton, styles.quitGameButtonPressed]
        //       : styles.quitGameButton
        //   }
        onPress={() =>
          setPlayers((players) => [
            ...players,
            { name: "New Player", score: 0 },
          ])
        }
        onPressIn={() => {}}
        onPressOut={() => {}}
      >
        <Text style={styles.quitGameText}>Add another player</Text>
      </Pressable>

      <Pressable
        onPress={() => setBaseScore(50)}
        onPressIn={() => {}}
        onPressOut={() => {}}
      >
        <Text>Base Score: (resets all players when *changed*)</Text>
        <TextInput
          //   style={styles.input}
          onChangeText={(e) => {
            setBase(parseInt(e));
          }}
          onSubmitEditing={(e) => {
            setBaseScore(base);
          }}
          value={base}
          placeholder="enter a number"
        ></TextInput>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  //   quitGameButtonPressed: {},
  //   quitGameButton: {},
  quitGameText: {},
});

export default Options;
