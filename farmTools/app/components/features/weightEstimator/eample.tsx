import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const IOSInchesPicker = ({
  initialFeet = 5,
  initialInches = 6,
  onMeasurementChange,
  minFeet = 0,
  maxFeet = 10,
  showDecimals = false,
}) => {
  const [selectedFeet, setSelectedFeet] = useState(initialFeet);
  const [selectedInches, setSelectedInches] = useState(initialInches);

  // Generate feet array based on min/max range
  const generateFeet = () => {
    const feetArray = [];
    for (let i = minFeet; i <= maxFeet; i++) {
      feetArray.push(i.toString());
    }
    return feetArray;
  };

  // Generate inches array (0-11 or with decimals 0-11.75)
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

  const feet = generateFeet();
  const inches = generateInches();

  const handleMeasurementChange = (type, value) => {
    let newFeet = selectedFeet;
    let newInches = selectedInches;

    if (type === "feet") {
      newFeet = parseInt(value);
      setSelectedFeet(newFeet);
    } else if (type === "inches") {
      newInches = parseFloat(value);
      setSelectedInches(newInches);
    }

    // Call the callback if provided
    if (onMeasurementChange) {
      onMeasurementChange({
        feet: newFeet,
        inches: newInches,
        totalInches: newFeet * 12 + newInches,
      });
    }
  };

  const formatInches = (inch) => {
    if (showDecimals && inch % 1 !== 0) {
      return inch.toString();
    }
    return Math.floor(inch).toString();
  };

  const getTotalMeasurement = () => {
    const totalInches = selectedFeet * 12 + selectedInches;
    return `${selectedFeet}' ${formatInches(selectedInches)}" (${totalInches.toFixed(showDecimals ? 2 : 0)}" total)`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Height</Text>

      <View style={styles.pickerContainer}>
        {/* Feet Picker */}
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedFeet.toString()}
            style={styles.picker}
            itemStyle={styles.pickerItem}
            onValueChange={(itemValue) =>
              handleMeasurementChange("feet", itemValue)
            }
          >
            {feet.map((foot) => (
              <Picker.Item
                key={foot}
                label={foot}
                value={foot}
                style={styles.pickerItemText}
              />
            ))}
          </Picker>
          <Text style={styles.label}>feet</Text>
        </View>

        {/* Separator */}
        <View style={styles.separator}>
          <Text style={styles.separatorText}>and</Text>
        </View>

        {/* Inches Picker */}
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedInches.toString()}
            style={styles.picker}
            itemStyle={styles.pickerItem}
            onValueChange={(itemValue) =>
              handleMeasurementChange("inches", itemValue)
            }
          >
            {inches.map((inch) => (
              <Picker.Item
                key={inch}
                label={
                  showDecimals && parseFloat(inch) % 1 !== 0
                    ? inch
                    : Math.floor(parseFloat(inch)).toString()
                }
                value={inch}
                style={styles.pickerItemText}
              />
            ))}
          </Picker>
          <Text style={styles.label}>inches</Text>
        </View>
      </View>

      {/* Display selected measurement */}
      <View style={styles.selectedMeasurementContainer}>
        <Text style={styles.selectedMeasurementText}>
          Selected Height: {getTotalMeasurement()}
        </Text>
      </View>

      {/* Conversion info */}
      <View style={styles.conversionContainer}>
        <Text style={styles.conversionText}>
          Centimeters:{" "}
          {((selectedFeet * 12 + selectedInches) * 2.54).toFixed(1)} cm
        </Text>
        <Text style={styles.conversionText}>
          Meters:{" "}
          {(((selectedFeet * 12 + selectedInches) * 2.54) / 100).toFixed(2)} m
        </Text>
      </View>
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

export default IOSInchesPicker;

// Usage Example:
//
// import IOSInchesPicker from './IOSInchesPicker';
//
// const App = () => {
//   const handleMeasurementChange = (measurement) => {
//     console.log('Selected measurement:', measurement);
//     // measurement object contains: { feet, inches, totalInches }
//   };
//
//   return (
//     <IOSInchesPicker
//       initialFeet={5}
//       initialInches={10}
//       onMeasurementChange={handleMeasurementChange}
//       minFeet={0}
//       maxFeet={8}
//       showDecimals={true}
//     />
//   );
// };
