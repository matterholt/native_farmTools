import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
const zeroToNine = Array.from({ length: 10 }, (_, i) => i);

const LengthInput = (props) => {
  const [inches, setInches] = useState("inch");
  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
      <Picker
        style={{ width: 77, padding: 10, height: 77 }}
        selectedValue={inches}
        onValueChange={(currentCurrency) => setInches(currentCurrency)}
      >
        {zeroToNine.map((num) => (
          <Picker.Item label={num.toString()} value={num} key={num} />
        ))}
      </Picker>
      <Picker
        style={{ width: 77, padding: 10, height: 77 }}
        selectedValue={inches}
        onValueChange={(currentCurrency) => setInches(currentCurrency)}
      >
        {zeroToNine.map((num) => (
          <Picker.Item label={num.toString()} value={num} key={num} />
        ))}
      </Picker>
    </View>
  );
};

export default LengthInput;
