import { StyleSheet, ScrollView, Text, View, Image, Pressable, SafeAreaView , Platform} from "react-native";
import { useNavigation } from "@react-navigation/native";
import User from "../assets/images/AvatarImage.png";
import { AntDesign, Ionicons, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { DrawerItemList } from "@react-navigation/drawer";
import tw from "twrnc";
import SwitchBtn from "./Switch";
import { profileSettings, moreSection } from "../helpers/data";

const CustomDrawerComponent = (props) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView
        style={[
            styles.safeContainer,
            Platform.OS === "android" && { paddingTop: 50 },
        ]}
        >
        <ScrollView style={[styles.scrollView, tw`bg-black dark:bg-black`]}>
            <View style={[styles.drawerContent, tw`bg-black dark:bg-black`]}>
            <View
                style={tw`relative border-b-[1px] border-b-[#272729] mb-[20px]`}
            >
                <View style={tw`relative  w-[59px] h-[59px]`}>
                <Image
                    source={User}
                    style={[tw`rounded-full mb-[10px] relative`]}
                />
                <Pressable
                    style={tw`w-[16px] absolute bottom-0 right-0 h-[16px] bg-[#E6F0FF] rounded-full flex justify-center items-center`}
                >
                    <AntDesign name="edit" size={10} color="#0047B3" />
                </Pressable>
                </View>
                <Text
                style={[
                    tw`text-white text-[12px] leading-[16px] -tracking-[0.4px] mb-[7px]`,
                ]}
                >
                Welcome
                </Text>
                <Text
                style={[
                    tw`text-white font-bold text-[13px] leading-[18px] -tracking-[0.4px] mb-[10px]`,
                ]}
                >
                Tayyab Sohail
                </Text>
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
};

export default CustomDrawerComponent

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollView: {
    flex: 1,
  },
  drawerContent: {
    flex: 1,
  },
});
