import { Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const styles = StyleSheet.create({
  linkBox: {
    width: 300,
    borderColor: "#007AFF",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  linkText: {
    color: "#007AFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

type allowedRoutes =
  | "/PearsonSquare"
  | "/Gestation"
  | "/AuctionTracker"
  | "/WeightEstimator";

interface PropsInternalLink {
  linkTo: allowedRoutes;
  children: string;
}

const InternalLink: React.FC<PropsInternalLink> = ({ linkTo, children }) => {
  return (
    <Link style={styles.linkBox} href={`${linkTo}` as const}>
      <Text style={styles.linkText}>{children}</Text>
    </Link>
  );
};

export default InternalLink;
