import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const Player = ({ name, score, baseScore }) => {
  const [displayName, setDisplayName] = useState(name);
  const [displayScore, setDisplayScore] = useState(score);
  const [agreg, setAgreg] = useState(0);

  useEffect(() => {
    setDisplayScore(baseScore);
  }, [baseScore]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(e) => {
          setDisplayName(e);
        }}
        value={displayName}
        placeholder="enter name (limit 15 char)"
      ></TextInput>
      <Text>{displayScore}</Text>
      <Pressable
        onPress={() => setDisplayScore((sc) => sc + 1)}
        onPressIn={() => {}}
        onPressOut={() => {}}
      >
        <Text>⬆️ button</Text>
      </Pressable>
      <Pressable
        onPress={() => setDisplayScore((sc) => sc - 1)}
        onPressIn={() => {}}
        onPressOut={() => {}}
      >
        <Text>⬇️ button</Text>
      </Pressable>
      <Pressable>
        <TextInput
          //   style={styles.input}
          onChangeText={(e) => {
            setAgreg(parseInt(e));
          }}
          onSubmitEditing={(e) => {
            setDisplayScore((sco) => sco + agreg);
            // setAgreg(0);
          }}
          value={agreg}
          placeholder="+/- number"
        ></TextInput>
      </Pressable>
      {/* maybe use a + / - button(s) to submit the number, instead of onSubmit, so that you can close the keyboard without adding to the number ? */}
      <Pressable
        onPress={() => setDisplayScore((sc) => sc - 1)}
        onPressIn={() => {}}
        onPressOut={() => {}}
      >
        <Text>remove player ❌ </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default Player;
