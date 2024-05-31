import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
} from "react-native";
import { ArrowDown2 } from "iconsax-react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import Atm from "../components/Atm";
import TransactionHistory from "../components/TransactionHistory";
import Chart from "../components/Chart";
import Filterbtn from "../components/Filterbtn";

const CardTransaction = () => {
  return (
    <SafeAreaView style={[styles.safeContainer]}>
      <ScrollView style={([styles.scrollView], tw`bg-black dark:bg-black`)}>
        <View>
          <View style={tw`my-5`}>
            <Atm />
          </View>
          <View
            style={tw`mb-4 mx-5 rounded-[10px] border-[2px] border-[#272729] bg-[#232325]`}
          >
            <View style={tw`mt-3 flex flex-row justify-between px-3`}>
              <View style={tw`flex flex-row gap-[24px]`}>
                <Text
                  style={tw`text-[#E9E9EA] text-[22px] leading-[28px] -tracking-[0.4px]`}
                >
                  Total Spend
                </Text>
                <Text
                  style={tw`text-white  font-bold text-[22px] leading-[28px] -tracking-[0.4px]`}
                >
                  30$
                </Text>
              </View>
              <Filterbtn
                icon={<ArrowDown2 size="14" color="#FFF" />}
                filterText="Weekly"
                btnStyles="flex flex-row gap-[8px] items-center rounded-[41px] border-[1px] border-[#0047B3] px-[16px] py-[6px] bg-[#272729]"
                textStyle="text-white text-[16px] leading-[21px] -tracking-[0.4px]"
              />
            </View>
            <Chart />
          </View>

          <View
            style={[styles.transactionHistory, tw`px-5 flex-col border-t-[1px] border-[#272729] gap-[17px] flex-4`]}
          >
            <View
              style={tw`flex flex-row mt-[20px]  justify-between items-center`}
            >
              <Text
                style={tw`text-white dark:text-white text-[20px] leading-[25px] -tracking-[0.4px]`}
              >
                Transaction History
              </Text>
              <Text
                style={tw`text-[#6BA6FF] dark:text-[#6BA6FF] text-[13px] leading-[18px] -tracking-[0.4px]`}
              >
                See all
              </Text>
            </View>

            {/* <TransactionHistory /> */}
          </View>
            <TransactionHistory />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardTransaction;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollView: {
    flex: 1,
  },
  transactionHistory: {
    // flex: 4,
  },
});
