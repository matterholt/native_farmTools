import { Button, Alert } from "react-native";

export default function BaseButton({ text }) {
  return (
    <Button
      title={text}
      onPress={() => Alert.alert("button has been presseed")}
    />
  );
}
