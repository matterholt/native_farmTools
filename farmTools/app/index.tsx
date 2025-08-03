import { Text, View } from "react-native";

import InternalLink from "./components/general/InternalLink";
import SectionHeader from "./components/general/SectionHeader";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 50,
      }}
    >
      <SectionHeader>Daily Farm Tools</SectionHeader>

      <InternalLink linkTo="/PearsonSquare">
        Pearson Square Calculator
      </InternalLink>
      <InternalLink linkTo="/Gestation">Ewe Gestation</InternalLink>
      <InternalLink linkTo="/AuctionTracker">Sold At Auction</InternalLink>
      <InternalLink linkTo="/WeightEstimator">
        Lamb Weight Estimate
      </InternalLink>
    </View>
  );
}
