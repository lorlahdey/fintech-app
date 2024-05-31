import { Icon } from 'iconsax-react-native';
import { StyleSheet, Text, Pressable, View } from 'react-native'
import tw from "twrnc";

const Filterbtn = ({btnStyles, textStyle, filterText, icon}) => {
  return (
    <View>
        <Pressable
            style={tw`${btnStyles}`}
        >
            {icon}
            <Text
            style={tw`${textStyle}`}
            >
            {filterText}
            </Text>
        </Pressable>
    </View>
  );
}

export default Filterbtn

const styles = StyleSheet.create({})