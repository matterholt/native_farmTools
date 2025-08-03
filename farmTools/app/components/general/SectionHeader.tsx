import { StyleSheet, Text } from "react-native";
interface HeaderProp {
  children: string;
}

const styles = StyleSheet.create({
  textHeading: {
    fontWeight: 900,
    fontSize: 25,
  },
});
const SectionHeader: React.FC<HeaderProp> = ({ children }) => {
  return <Text style={styles.textHeading}>{children}</Text>;
};

export default SectionHeader;
