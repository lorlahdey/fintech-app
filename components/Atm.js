import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import tw from "twrnc";

const Atm = () => {
    const atm = require("../assets/images/atm.png");
    const masterCard = require("../assets/images/masterCard.png");

    return (
      <View style={tw`mx-auto`}>
        <Image
          styles={[styles.masterCardIcon, tw`flex items-end`]}
          source={atm}
        />

        {/* <View
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
            
          </View>
          <View
            style={tw`flex flex-row gap-x-[30px] px-[10px] justify-between`}
          >
            
          </View>
        </View> */}
      </View>
    );
}

export default Atm

const styles = StyleSheet.create({})