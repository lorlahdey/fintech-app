import { View, Switch, StyleSheet, Text } from "react-native";
import { useState } from "react";
import tw from "twrnc";

const SwitchBtn = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
      setIsEnabled((previousState) => !previousState);
    };

    return (
      <View style={styles.container}>
        <Switch
          trackColor={{ false: "#787880", true: "#0047B3" }}
          thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
        //   ios_backgroundColor="#78788052"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
};

export default SwitchBtn;

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    marginTop: 10,
  },
});
