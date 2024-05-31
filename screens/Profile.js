import { SafeAreaView, ScrollView, Pressable, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import User from "../assets/images/AvatarImage.png";
import { profileSettings, moreSection } from "../helpers/data";
import SwitchBtn from "../components/Switch";
import Filterbtn from "../components/Filterbtn";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.safeContainer]}>
      <ScrollView
        style={[styles.scrollView, tw`bg-black dark:bg-black px-[20px]`]}
      >
        <View style={[styles.drawerContent, tw`bg-black  dark:bg-black`]}>
          <View
            style={tw`border-b-[1px] border-b-[#272729] items-center flex-row gap-x-[15px] mt-[15px] mb-[20px] pb-[10px]`}
          >
            <View style={tw`mb-[10px] w-[52px] h-[52px]`}>
              <Image
                source={User}
                style={[
                  tw`rounded-full border-[1px] border-[#E9E9EA] relative`,
                ]}
              />
            </View>
            <View style={tw``}>
              <View style={tw`flex-row gap-x-[11px]`}>
                <Text
                  style={[
                    tw`text-white text-[15px] leading-[20px] -tracking-[0.4px] mb-[7px]`,
                  ]}
                >
                  Tayyab Sohail
                </Text>
                <Filterbtn
                  textStyle="text-white text-[9px] leading-[13px] -tracking-[0.4px]"
                  btnStyles="py-[2px] px-[7px] bg-[#272729] rounded-[24px]"
                  filterText="UX/UI Designer"
                />
              </View>
              <Text
                style={[
                  tw`text-[#E9E9EA]  text-[11px] leading-[13px] -tracking-[0.4px] mb-[10px]`,
                ]}
              >
                tayyabsohailabd@gmail.com
              </Text>
            </View>
          </View>

          <View style={tw`mb-[30px]`}>
            <Text
              style={tw`text-white font-bold  text-[20px] leading-[25px] -tracking-[0.4px]`}
            >
              Profile Settings
            </Text>

            <View style={tw`flex-col gap-[17px] mt-[25px]`}>
              {profileSettings.map((card) => (
                <Pressable
                  key={card.id}
                  onPress={() => navigation.navigate(`${card.navigate}`)}
                >
                  <View
                    style={tw`flex-row bg-[#232325] rounded-[6px] justify-between items-center gap-x-[10px] py-[8px] px-[10px]`}
                  >
                    <View
                      style={tw`flex-row justify-between items-center  gap-x-[10px]`}
                    >
                      <View
                        style={tw`w-[40px] h-[40px] bg-[#272729] rounded-full flex justify-center items-center`}
                      >
                        {card.beforeIcon}
                      </View>
                      <View style={tw`flex-col justify-between gap-y-[7px]`}>
                        <Text
                          style={tw`text-white dark:text-white font-bold  text-[17px] leading-[22px] -tracking-[0.4px]`}
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
          <View style={tw`mb-[30px]`}>
            <Text
              style={tw`text-white font-bold  text-[20px] leading-[25px] -tracking-[0.4px]`}
            >
              Notification
            </Text>

            <View style={tw`flex-col gap-[17px] mt-[25px]`}>
              <View
                style={tw`flex-row bg-[#232325] rounded-[6px] justify-between items-center gap-x-[10px] py-[8px] px-[10px]`}
              >
                <View
                  style={tw`flex-row justify-between items-center  gap-x-[10px]`}
                >
                  <View
                    style={tw`w-[40px] h-[40px] bg-[#272729] rounded-full flex justify-center items-center`}
                  >
                    <Ionicons
                      name="notifications-outline"
                      size={24}
                      color="#0065FF"
                    />
                  </View>
                  <View style={tw`flex-col justify-between gap-y-[7px]`}>
                    <Text
                      style={tw`text-white dark:text-white font-bold  text-[17px] leading-[22px] -tracking-[0.4px]`}
                    >
                      App Notification
                    </Text>
                  </View>
                </View>
                <View>
                  <SwitchBtn />
                </View>
              </View>
            </View>
          </View>
          <View style={tw`mb-[30px]`}>
            <Text
              style={tw`text-white font-bold  text-[20px] leading-[25px] -tracking-[0.4px]`}
            >
              More
            </Text>

            <View style={tw`flex-col gap-[17px] mt-[25px]`}>
              {moreSection.map((card) => (
                <Pressable
                  key={card.id}
                  onPress={() => navigation.navigate(`${card.navigate}`)}
                >
                  <View
                    style={tw`flex-row bg-[#232325] rounded-[6px] justify-between items-center gap-x-[10px] py-[8px] px-[10px]`}
                  >
                    <View
                      style={tw`flex-row justify-between items-center  gap-x-[10px]`}
                    >
                      <View
                        style={tw`w-[40px] h-[40px] bg-[#272729] rounded-full flex justify-center items-center`}
                      >
                        {card.beforeIcon}
                      </View>
                      <View style={tw`flex-col justify-between gap-y-[7px]`}>
                        <Text
                          style={tw`text-white dark:text-white font-bold  text-[17px] leading-[22px] -tracking-[0.4px]`}
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

          <Pressable
            style={tw`flex-row w-[108px] bg-[#FFD4D4] justify-between items-center text-[#FFD4D4] rounded-[8px] gap-[8px] py-[8px] px-[10px]`}
          >
            <Text
              style={tw`text-[#5A0000] font-bold text-[17px] leading-[22px] -tracking-[0.4px]`}
            >
              Logout
            </Text>
            <Ionicons name="log-in-outline" size={24} color="#5A0000" />
          </Pressable>

          {/* <DrawerItemList {...props} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollView: {
    flex: 1,
  },
});