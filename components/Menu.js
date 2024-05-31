import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import {
//   AntDesign,
//   MaterialIcons,
//   FontAwesome5,
//   Ionicons,
// } from "@expo/vector-icons";
import tw from "twrnc";
import { HambergerMenu, Notification, } from "iconsax-react-native";

const Header = () => {
  return (
    <View
      style={tw`flex bg-[#272729] flex-row justify-between items-center px-[20px] py-[20px]`}
    >
      <HambergerMenu size="20" color="#FFFFFF" />
      <View style={tw`flex flex-row`}>
        <Text
          style={tw`text-white text-[15px] leading-[20px] -tracking-[0.4px]`}
        >
          Welcome{" "}
        </Text>
        <Text
          style={tw`text-white font-bold  text-[15px] leading-[20px] -tracking-[0.4px]`}
        >
          Tayyab Sohail
        </Text>
      </View>
      <View
        style={tw`h-[34px] w-[34px] flex justify-center items-center rounded-full bg-[#2E2D2D]`}
      >
        <Notification size="16" color="#FFFFFF" />
      </View>
    </View>
  );
}

export default Header

const styles = StyleSheet.create({})
