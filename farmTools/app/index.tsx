import { Text, View } from "react-native";
import { Stack, Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 50,
      }}
    >
      <Text>Daily Farm Tools</Text>
      <Link href="/PearsonSquare">
        <Text
          style={{
            color: "#007AFF",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Pearson Square
        </Text>
      </Link>
      <Link href="/Gestation">
        <Text
          style={{
            color: "#007AFF",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Gestation Cycles
        </Text>
      </Link>
      <Link href="/AuctionTracker">
        <Text
          style={{
            color: "#007AFF",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Auction Tracker
        </Text>
      </Link>
      <Link href="/WeightEstimator">
        <Text
          style={{
            color: "#007AFF",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Weight Estimator
        </Text>
      </Link>
    </View>
  );
}
