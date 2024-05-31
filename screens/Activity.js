import { StyleSheet, SafeAreaView, Image, ScrollView, Text, View } from 'react-native'
import tw from "twrnc";
import {
  FontAwesome5,
} from "@expo/vector-icons";

import GroupImage from "../assets/images/transferGroupImage.png";
import Chart from '../components/Chart';
import Filterbtn from '../components/Filterbtn';
import TransactionHistory from '../components/TransactionHistory';

const Activity = () => {
  return (
    <SafeAreaView style={[styles.safeContainer]}>
      <ScrollView style={([styles.scrollView], tw`bg-black dark:bg-black`)}>
        <View
          style={tw`mb-4 mx-5 mt-10 mb-5 rounded-[15px] border-[2px] border-[#272729] bg-[#232325]`}
        >
          <View style={tw`mt-3 flex flex-col justify-between px-3 gap-[13px]`}>
            <View style={tw`flex flex-col gap-[7px]`}>
              <Text
                style={tw`text-[#E9E9EA] text-[22px] text-center leading-[28px] -tracking-[0.4px]`}
              >
                Total Spending
              </Text>
              <Text
                style={tw`text-white  font-bold text-[22px] leading-[28px] text-center -tracking-[0.4px]`}
              >
                1200$
              </Text>
            </View>
            <View style={tw`flex flex-row gap-[14px]`}>
              <Filterbtn
                filterText="Weekly"
                btnStyles="flex flex-row gap-[8px] items-center rounded-[28px] px-[25px] py-[6px] bg-[#272729]"
                textStyle="text-white text-[11px] leading-[13px] -tracking-[0.4px]"
              />
              <Filterbtn
                filterText="Monthly"
                btnStyles="flex flex-row gap-[8px] items-center rounded-[41px] border-[1px] border-[#0047B3] px-[25px] py-[6px] bg-[#272729]"
                textStyle="text-[#9C9C9D] text-[11px] leading-[13px] -tracking-[0.4px]"
              />
              <Filterbtn
                filterText="Today"
                btnStyles="flex flex-row gap-[8px] items-center rounded-[41px] px-[16px] py-[6px] bg-[#272729]"
                textStyle="text-[#9C9C9D] text-[11px] leading-[13px] -tracking-[0.4px]"
              />
              <Filterbtn
                filterText="Year"
                btnStyles="flex flex-row gap-[8px] items-center rounded-[41px] px-[16px] py-[6px] bg-[#272729]"
                textStyle="text-[#9C9C9D] text-[11px] leading-[13px] -tracking-[0.4px]"
              />
            </View>
          </View>
          <Chart />
        </View>

        <View
          style={tw`px-[18px] py-[16px] mx-[15px] bg-[#232325] rounded-[4px] flex-row justify-between`}
        >
          <View style={tw`flex-col gap-y-[14px]`}>
            <Text
              style={tw`text-white text-[22px] leading-[28px] -tracking-[0.4px]`}
            >
              Recent Transfer
            </Text>
            <Image source={GroupImage} style={[tw``]} />
          </View>
          <View
            style={tw`self-end  rounded-full bg-[#272729] h-[40px] w-[40px] flex justify-center items-center`}
          >
            <FontAwesome5 name="plus" size={24} color="#96C0FF" />
          </View>
        </View>

        <View
          style={[
            styles.transactionHistory,
            tw`px-5 flex-col border-t-[1px] border-[#272729] gap-[17px] flex-4`,
          ]}
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

          <TransactionHistory />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Activity

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollView: {
    flex: 1,
  },
  transactionHistory: {
    // flex: 2
  }
});