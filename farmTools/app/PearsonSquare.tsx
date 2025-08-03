import { Text, View } from "react-native";
import SectionHeader from "./components/general/SectionHeader";
export default function PearsonSquare() {
  return (
    <View>
      <SectionHeader>Feed rations</SectionHeader>
      <Text>Calculating the ratios for dairy cattle</Text>
      <View>
        <Text>INPUTS</Text>
        <Text>Feed A: "Corn"</Text>
        <Text>Feed B: "Grain"</Text>
        <Text>Target Ratio = 'Protein'</Text>
      </View>
      <View>
        <Text>RESUlts</Text>
        <Text>Ration of Feed A</Text>
        <Text>Ration for Feed B</Text>
      </View>
    </View>
  );
}
