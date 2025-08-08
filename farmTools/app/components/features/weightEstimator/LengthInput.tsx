import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const LengthInput = (props) => {
  const [incheSelect, setInchesSelect] = useState("inch");
  const showDecimals = true;
  const generateInches = () => {
    if (showDecimals) {
      const inchesArray = [];
      for (let i = 0; i < 12; i++) {
        inchesArray.push(i.toString());
        inchesArray.push((i + 0.25).toString());
        inchesArray.push((i + 0.5).toString());
        inchesArray.push((i + 0.75).toString());
      }
      return inchesArray.slice(0, -3); // Remove 12, 12.25, 12.5 to keep it under 12
    } else {
      return Array.from({ length: 12 }, (_, i) => i.toString());
    }
  };

  const inches = generateInches();

  return (
    <View style={styles.pickerWrapper}>
      <Picker
        style={styles.picker}
        selectedValue={incheSelect}
        onValueChange={(currentCurrency) => setInchesSelect(currentCurrency)}
      >
        {inches.map((num) => (
          <Picker.Item
            style={styles.pickerItemText}
            label={num.toString()}
            value={num}
            key={num}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f7",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
    color: "#000",
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pickerWrapper: {
    flex: 1,
    alignItems: "center",
  },
  picker: {
    width: 100,
    height: 200,
  },
  pickerItem: {
    fontSize: 20,
    color: "#007AFF",
    fontWeight: "400",
  },
  pickerItemText: {
    fontSize: 20,
    color: "#007AFF",
  },
  label: {
    fontSize: 16,
    color: "#8E8E93",
    marginTop: -10,
    fontWeight: "400",
  },
  separator: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  separatorText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#8E8E93",
  },
  selectedMeasurementContainer: {
    marginTop: 40,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedMeasurementText: {
    fontSize: 18,
    textAlign: "center",
    color: "#000",
    fontWeight: "500",
  },
  conversionContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#E5E5EA",
    borderRadius: 10,
    marginHorizontal: 20,
  },
  conversionText: {
    fontSize: 16,
    textAlign: "center",
    color: "#3C3C43",
    marginVertical: 2,
  },
});

export default LengthInput;
