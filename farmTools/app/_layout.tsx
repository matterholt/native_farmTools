import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="PearsonSquare"
        options={{ title: "Pearson Square" }}
      />
      <Stack.Screen name="Gestation" options={{ title: "Gestation Cycles" }} />
      <Stack.Screen
        name="AuctionTracker"
        options={{ title: "Auction Tracker" }}
      />
      <Stack.Screen
        name="WeightEstimator"
        options={{ title: "Weight Estimator" }}
      />
    </Stack>
  );
}
