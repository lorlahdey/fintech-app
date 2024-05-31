// import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {  createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import {  StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";
import tw from "twrnc";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import Home from "./screens/Home";
import Card from "./screens/Card";
import CardTransaction from "./screens/CardTransaction";
import Profile from "./screens/Profile";
import Activity from "./screens/Activity";
import CustomDrawerComponent from "./components/CustomDrawerComponent";

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <SafeAreaView style={[styles.safeContainer, tw`bg-black dark:bg-black`]}>
      <StatusBar style="light" backgroundColor="#272729" />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: "#000",
              width: 282,
              borderEndColor: "#252525",
              borderEndWidth: 2,
              paddingHorizontal: 15,
            },
            headerStyle: {
              backgroundColor: "#272729",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            drawerLabelStyle: {
              color: "#FFF",
              borderEndColor: "#fff",
              borderEndWidth: 2,
            },
          }}
          drawerContent={CustomDrawerComponent}
        >
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              // title: "My dashboard",
              // drawerLabel: "Dashboard label",
              headerTitle: () => (
                <View
                  style={tw`flex flex-row text-center justify-center items-center`}
                >
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
              ),
              headerRight: () => (
                <Pressable style={tw`mr-[20px]`}>
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="white"
                  />
                </Pressable>
              ),
            }}
          />
          <Drawer.Screen
            name="Card"
            component={Card}
            options={{
              headerTitle: () => (
                <View
                  style={tw`flex flex-col justify-center
                `}
                >
                  <Text
                    style={tw`text-white text-[28px] leading-[34px] -tracking-[0.4px]`}
                  >
                    Your Card
                  </Text>
                  <Text
                    style={tw`text-[#BCBCBD]  text-[12px] leading-[16px] -tracking-[0.4px]`}
                  >
                    2 Physical Card, 1 Virtual Card
                  </Text>
                </View>
              ),
              headerRight: () => (
                <Pressable style={tw`mr-[20px]`}>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={24}
                    color="white"
                  />
                </Pressable>
              ),

              headerStyle: {
                backgroundColor: "#000",
                borderBottomWidth: 0,
              },
              drawerLabelStyle: {
                color: "#fff",
              },
            }}
          />
          <Drawer.Screen
            name="Profile"
            component={Profile}
            options={{
              headerTitle: () => (
                <View
                  style={tw`flex flex-col justify-center
                `}
                >
                  <Text
                    style={tw`text-white text-[28px] leading-[34px] -tracking-[0.4px]`}
                  >
                    Profile
                  </Text>
                </View>
              ),
              headerRight: () => (
                <Pressable style={tw`mr-[20px]`}>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={24}
                    color="white"
                  />
                </Pressable>
              ),

              headerStyle: {
                backgroundColor: "#000",
                borderBottomWidth: 0,
              },
              drawerLabelStyle: {
                color: "#fff",
              },
            }}
          />
          <Drawer.Screen
            name="Card Transaction"
            component={CardTransaction}
            options={{
              headerTitle: () => (
                <View
                  style={tw`flex flex-col justify-center
                `}
                >
                  <Text
                    style={tw`text-white text-[28px] leading-[34px] -tracking-[0.4px]`}
                  >
                    Card Transaction
                  </Text>
                </View>
              ),
              headerRight: () => (
                <Pressable style={tw`mr-[20px]`}>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={24}
                    color="white"
                  />
                </Pressable>
              ),

              headerStyle: {
                backgroundColor: "#000",
                borderBottomWidth: 0,
              },
              drawerLabelStyle: {
                color: "#fff",
              },
            }}
          />
          <Drawer.Screen
            name="Activity"
            component={Activity}
            options={{
              headerTitle: () => (
                <View
                  style={tw`flex flex-col justify-center
                `}
                >
                  <Text
                    style={tw`text-white text-[28px] leading-[34px] -tracking-[0.4px]`}
                  >
                    My Activity
                  </Text>
                </View>
              ),
              headerRight: () => (
                <Pressable style={tw`mr-[20px]`}>
                  <MaterialCommunityIcons
                    name="dots-horizontal"
                    size={24}
                    color="white"
                  />
                </Pressable>
              ),

              headerStyle: {
                backgroundColor: "#000",
                borderBottomWidth: 0,
              },
              drawerLabelStyle: {
                color: "#fff",
              },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    // alignItems: 'center',
    // justifyContent: "center",
  },
  card: {
    // flex: ,
  },
  transactionHistory: {
    flex: 1,
  },
  relatedIcons: {
    // flex: 3,
  },
  masterCardIcon: {
    // flex: 3,
    // width: 42.46,
    // height: 32.27,
  },
  FlatList: {
    // flex: 3,
    // width: 42.46,
    // height: 32.27,
  },
});

// border: 1px solid;

// border-image-source: linear-gradient(122.27deg, rgba(229, 228, 228, 0.5) -10.27%, rgba(0, 0, 0, 0.235) 125.88%);
