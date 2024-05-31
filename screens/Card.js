import { SafeAreaView, ScrollView, Image, StyleSheet, Text, View, Pressable, FlatList } from 'react-native'
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  Fontisto,
  FontAwesome5,
} from "@expo/vector-icons";
import Filterbtn from '../components/Filterbtn';
import { cardSettings } from "../helpers/data";

import atmImage from "../assets/images/atm.png";
import Atm from '../components/Atm';

const carouselItems = [
        { image: atmImage, id: 'item1' },
        { image: atmImage, id: 'item2' },
        { image: atmImage, id: 'item3' },
    ];

const Card = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.safeContainer]}>
      <ScrollView style={([styles.scrollView], tw`bg-black dark:bg-black`)}>
        <View>
          <View style={tw`p-[15px] flex-row gap-x-[21px]`}>
            <Filterbtn
              filterText="Physical Card"
              btnStyles="rounded-[22px] border-[1px] border-[#0065FF] px-[21px py-[10px] bg-[#232323]"
              textStyle="text-white text-[13px] leading-[18px] -tracking-[0.4px]"
            />
            <Filterbtn
              filterText="Virtual Card"
              textStyle="text-[#9C9C9D] text-[13px] leading-[18px] -tracking-[0.4px]"
              btnStyles="rounded-[22px] px-[21px py-[10px] bg-[#232323]"
            />
          </View>

          {/* <Atm /> */}
          <View style>

            <FlatList
              data={carouselItems}
              horizontal
              renderItem={({ item }) => {
                return (
                  <View
                    style={tw`flex-row justify-between items-center mr-[15px]  pb-[15px] mb-[10px]`}
                    key={item.id}
                  >
                    <Pressable
                  onPress={() => navigation.navigate(`Activity`)}
                >
                    <Image style={styles.image} source={item.image} />
                </Pressable>
                  </View>
                );
              }}
            />
          </View>

          <View style={tw`border-b-[1.5px] border-[#272729]`}>
            <View
              style={[
                tw`mx-auto flex flex-row items-center justify-between mt-[10px] mb-[30px] gap-[61px]`,
              ]}
            >
              <View style={tw`flex flex-col items-center gap-[8px] `}>
                <View
                  style={tw`w-[46px] h-[46px] bg-[#232325] rounded-full flex justify-center items-center `}
                >
                  <Fontisto name="snowflake-4" size={24} color="white" />
                </View>
                <Text
                  style={tw`text-white text-[15px] leading-[20px] -tracking-[0.4px]`}
                >
                  Freeze Card
                </Text>
              </View>
              <View style={tw`flex flex-col items-center gap-[8px] `}>
                <View
                  style={tw`w-[46px] h-[46px] bg-[#232325] rounded-full flex justify-center items-center `}
                >
                  <MaterialCommunityIcons
                    name="eye-off"
                    size={24}
                    color="white"
                  />
                </View>
                <Text
                  style={tw`text-white text-[15px] leading-[20px] -tracking-[0.4px]`}
                >
                  Reveal
                </Text>
              </View>

              <View style={tw`flex flex-col items-center gap-[8px] `}>
                <View
                  style={tw`w-[46px] h-[46px] bg-[#232325] rounded-full flex justify-center items-center `}
                >
                  <Fontisto name="snowflake-4" size={24} color="white" />
                </View>
                <Text
                  style={tw`text-white text-[15px] leading-[20px] -tracking-[0.4px]`}
                >
                  Freeze Card
                </Text>
              </View>
            </View>
          </View>

          {/* <View
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
          </View> */}

          <View style={tw`px-[15px] py-[20] `}>
            <Text
              style={tw`text-white text-[28px] leading-[34px] -tracking-[0.4px] mb-[20px]`}
            >
              Card Settings
            </Text>

            <View style={tw`flex-col gap-y-[20px]`}>
              {cardSettings.map((card) => (
                <Pressable
                  key={card.id}
                  onPress={() => navigation.navigate(`${card.navigate}`)}
                >
                  <View
                    style={tw`flex-row bg-[#272729] rounded-[8px] justify-between items-center gap-x-[10px] py-[14px] px-[18px]`}
                  >
                    <View
                      style={tw`flex-row justify-between items-center  gap-x-[12px]`}
                    >
                      <View
                        style={tw`w-[40px] h-[40px] bg-[#272729] rounded-full flex justify-center items-center`}
                      >
                        {card.beforeIcon}
                      </View>
                      <View style={tw`flex-col justify-between gap-y-[7px]`}>
                        <Text
                          style={tw`text-white dark:text-white text-[22px] leading-[28px] -tracking-[0.4px]`}
                        >
                          {card.name}
                        </Text>
                      </View>
                    </View>
                    <View>{card.afterIcon}</View>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Card

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollView: {
    flex: 1,
  },
});