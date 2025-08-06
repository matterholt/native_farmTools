import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, ScrollView } from "react-native";
import { Image } from "expo-image";

import { Picker } from "@react-native-picker/picker";

import LengthInput from "./components/features/weightEstimator/LengthInput";

export default function WeightEstimator() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Estimate Weight</Text>
      <Text>(Hear Girth X Heart Girth XBody Length) X 300 </Text>
      <Image
        source={require("../assets/images/weightEstimate/tempImageHolder.png")}
        style={styles.image}
        resizeMode="contain" // or "cover", "stretch", etc.
      />
      <View
        style={{ flexDirection: "column", height: 111, flex: 1, ...styles.box }}
      >
        <View style={styles.numberEntry}>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: 900,
                fontSize: 25,
              }}
            >
              Hear Girth
            </Text>
            <LengthInput />
          </View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: 900,
              fontSize: 25,
              alignItems: "center",
              flex: 1,
            }}
          >
            X
          </Text>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text>Body Length</Text>
            <LengthInput />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
  inputContainer: {},
  input: { width: 250, height: 50, borderWidth: 1, borderColor: "#000" },
  numberEntry: {
    flexDirection: "row",
  },
  box: {
    borderColor: "#007AFF",
    borderWidth: 2,
    borderRadius: 5,
  },
});
