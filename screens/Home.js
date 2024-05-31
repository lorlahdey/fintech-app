import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import TransactionHistory from "../components/TransactionHistory";

const Home = () => {
    const masterCard = require("../assets/images/masterCard.png");
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={tw`px-[20px] flex-2`}>
                <View
                style={[
                    styles.card,
                    tw`bg-[#272729] py-[30px] px-[20px] my-[30px] rounded-[11.64px] border-[1px] border-[#E5E4E480] flex-2`,
                ]}
                >
                <View style={tw`flex items-end`}>
                    <Image
                    styles={[styles.masterCardIcon, tw`flex items-end`]}
                    source={masterCard}
                    />
                </View>
                <View
                    style={tw`flex flex-row mx-[20px] mb-[20px] justify-between items-center`}
                >
                    <View>
                    <Text
                        style={tw`text-white text-[20px] leading-[25px] -tracking-[0.4px] mb-[15px]`}
                    >
                        Total Balance
                    </Text>
                    <Text
                        style={tw`text-white font-bold text-[34px] leading-[41px] -tracking-[0.4px]`}
                    >
                        1200$
                    </Text>
                    </View>
                    <View
                    style={tw`h-[38px] w-[38px] flex justify-center items-center rounded-full bg-[#2E2E2E]`}
                    >
                    <Ionicons name="qr-code-outline" size={24} color="white" />
                    </View>
                </View>
                <View
                    style={tw`flex flex-row gap-x-[30px] px-[10px] justify-between`}
                >
                    <Pressable
                    style={tw`bg-[#0065FF] rounded-[3px] flex flex-row  gap-x-[8px] justify-center items-center py-[12px] px-[15px]`}
                    >
                    <AntDesign
                        name="plus"
                        size={22}
                        color="#FFF"
                        style={tw`font-bold`}
                    />
                    <Text
                        style={tw`text-white font-bold text-[17px] leading-[20.29px] -tracking-[0.4px]`}
                    >
                        Add Cash
                    </Text>
                    </Pressable>
                    <Pressable
                    style={tw` bg-[#0065FF] rounded-[3px] flex flex-row gap-x-[8px] justify-center items-center py-[12px] px-[15px]`}
                    >
                    <Feather name="arrow-up-right" size={24} color="white" />
                    <Text
                        style={tw`text-white font-bold text-[17px] leading-[20.29px] -tracking-[0.4px]`}
                    >
                        Send Money
                    </Text>
                    </Pressable>
                </View>
                </View>

                <View
                style={[
                    styles.relatedIcons,
                    tw`border-2 border-[#272729] bg-[#232325] dark:bg-[#232325] rounded-[7px] py-[16px] px-[20px] flex flex-row items-center justify-between mb-[30px] gap-[24px] `,
                ]}
                >
                <View
                    style={tw`flex flex-col items-center gap-[24px] border-r-[1px] border-[#3B3B3B] pr-[15px]`}
                >
                    <View
                    style={tw`w-[42px] h-[42px] bg-[#2C2C2C] rounded-full flex justify-center items-center `}
                    >
                    <MaterialIcons name="payment" size={24} color="white" />
                    </View>
                    <Text
                    style={tw`font-bold text-white text-[14px] leading-[16px] -tracking-[0.4px]`}
                    >
                    Bill Pay
                    </Text>
                </View>
                <View
                    style={tw`flex flex-col items-center gap-[24px] border-r-[1px] border-[#3B3B3B] pr-[15px]`}
                >
                    <View
                    style={tw`w-[42px] h-[42px] bg-[#2C2C2C] rounded-full flex justify-center items-center `}
                    >
                    <FontAwesome5 name="hand-holding-usd" size={24} color="white" />
                    </View>
                    <Text
                    style={tw`font-bold text-white text-[14px] leading-[16px] -tracking-[0.4px]`}
                    >
                    Donations
                    </Text>
                </View>
                <View
                    style={tw`flex flex-col gap-[24px] items-center border-r-[1px] border-[#3B3B3B] pr-[15px]`}
                >
                    <View
                    style={tw`w-[42px] h-[42px] bg-[#2C2C2C] rounded-full flex justify-center items-center `}
                    >
                    <MaterialIcons name="monetization-on" size={24} color="white" />
                    </View>
                    <Text
                    style={tw`font-bold text-white text-[14px] leading-[16px] -tracking-[0.4px]`}
                    >
                    Deposit
                    </Text>
                </View>
                <View style={tw`flex flex-col items-center gap-[24px] `}>
                    <View
                    style={tw`w-[42px] h-[42px] bg-[#2C2C2C] rounded-full flex justify-center items-center `}
                    >
                    <AntDesign name="appstore1" size={24} color="white" />
                    </View>
                    <Text
                    style={tw`font-bold text-white text-[14px] leading-[16px] -tracking-[0.4px]`}
                    >
                    More
                    </Text>
                </View>
                </View>

                <View style={tw`flex-col gap-[17px] flex-4`}>
                <View style={tw`flex flex-row  justify-between items-center`}>
                    <Text
                    style={tw`text-white dark:text-white font-bold text-[20px] leading-[25px] -tracking-[0.4px]`}
                    >
                    Transaction History
                    </Text>
                    <Text
                    style={tw`text-[#6BA6FF] dark:text-[#6BA6FF] text-[13px] leading-[18px] -tracking-[0.4px]`}
                    >
                    See all
                    </Text>
                </View>
                <View style={tw`flex-row gap-[14px]`}>
                    <Pressable
                    style={tw`bg-[#232325] rounded-[28px] px-[25px] py-[6px]`}
                    >
                    <Text
                        style={tw`text-white dark:text-white text-[11px] leading-[13px] -tracking-[0.4px]`}
                    >
                        Weekly
                    </Text>
                    </Pressable>
                    <Pressable
                    style={tw`bg-[#232325] rounded-[28px] px-[25px] py-[6px]`}
                    >
                    <Text
                        style={tw`text-white dark:text-white text-[11px] leading-[13px] -tracking-[0.4px]`}
                    >
                        Monthly
                    </Text>
                    </Pressable>
                    <Pressable
                    style={tw`bg-[#232325] rounded-[28px] px-[25px] py-[6px]`}
                    >
                    <Text
                        style={tw`text-white dark:text-white text-[11px] leading-[13px] -tracking-[0.4px]`}
                    >
                        Today
                    </Text>
                    </Pressable>
                </View>

                <TransactionHistory />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
//   scrollViewContent: {
//     flexGrow: 1,
//     paddingBottom: 20, 
//   },
});
