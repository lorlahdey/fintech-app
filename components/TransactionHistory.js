import { StyleSheet, Text, View, FlatList } from 'react-native'
import tw from "twrnc";
import {
  DollarCircle,
} from "iconsax-react-native";
import {
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
  Ionicons,
  Fontisto,
} from "@expo/vector-icons";
const transactionHistory = [
  {
    id: "1",
    type: "credit",
    time: "12:10 pm",
    date: "12-12-20024",
    name: "E wallet",
    amount: 100,
    icon: <Ionicons name="wallet-outline" size={24} color="white" />,
  },
  {
    id: "2",
    type: "debit",
    time: "12:10 pm",
    date: "12-12-20024",
    name: "Online Shopping",
    amount: 100,
    icon: <FontAwesome6 name="bag-shopping" size={24} color="white" />,
  },
  {
    id: "3",
    type: "credit",
    time: "12:10 pm",
    date: "12-12-20024",
    name: "E wallet",
    amount: 100,
    icon: <Fontisto name="world-o" size={24} color="white" />,
  },
  {
    id: "4",
    type: "credit",
    time: "12:10 pm",
    date: "12-12-20024",
    name: "Banking Fee",
    amount: 100,
    icon: <MaterialCommunityIcons name="bank" size={24} color="white" />,
  },
  {
    id: "5",
    type: "debit",
    time: "12:10 pm",
    date: "12-12-20024",
    name: "Saving",
    amount: 300,
    icon: <DollarCircle size="32" color="#FFF" />,
  },
  {
    id: "6",
    type: "debit",
    time: "12:10 pm",
    date: "12-12-20024",
    name: "Loan",
    amount: 500,
    icon: <FontAwesome5 name="money-check" size={24} color="white" />,
  },
];

const TransactionHistory = () => {
  return (
    <View style={tw`flex-col justify-between h-[250px]`}>
      <FlatList
        style={[styles.FlatList, tw``]}
        data={transactionHistory}
        // horizontal
        renderItem={({ item }) => {
          return (
            <View
              style={tw`flex-row justify-between items-center border-[1px] border-b-[#232325] pb-[15px] mb-[10px]`}
              key={item.id}
            >
              <View
                style={tw`flex-row justify-between items-center  gap-x-[15px]`}
              >
                <View
                  style={tw`w-[52px] h-[52px] bg-[#272729] border-[1px] rounded-full flex justify-center items-center `}
                >
                  {item.icon}
                </View>
                <View style={tw`flex-col justify-between gap-y-[7px]`}>
                  <Text
                    style={tw`text-white dark:text-white font-bold  text-[17px] leading-[22px] -tracking-[0.4px]`}
                  >
                    {item.name}
                  </Text>
                  <View
                    style={tw`flex-row justify-between items-center gap-x-[4px]`}
                  >
                    <Text
                      style={tw`text-white dark:text-white text-[13px] leading-[18px] -tracking-[0.4px]`}
                    >
                      {item.time}
                    </Text>
                    <Text
                      style={tw`text-white dark:text-white text-[13px] leading-[18px] -tracking-[0.4px]`}
                    >
                      {item.date}
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Text
                  style={tw` ${
                    item.type === "credit"
                      ? "text-[#0065FF] dark:text-[0065FF]"
                      : "text-[#C40C00] dark:text-[#C40C00]"
                  } font-bold  text-[20px] leading-[25px] -tracking-[0.4px]`}
                >
                  {item.type === "credit" ? "+" : "-"} {item.amount}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

export default TransactionHistory

const styles = StyleSheet.create({
  FlatList: {
    // flex: 1,
  },
});