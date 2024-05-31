import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome6,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
import SwitchBtn from "../components/Switch";

const cardSettings = [
  {
    id: "1",
    name: "Change Pin",
    beforeIcon: <MaterialIcons name="password" size={24} color="white" />,
    afterIcon: <SwitchBtn />,
  },
  {
    id: "2",
    name: "QR Payment",
    beforeIcon: (
      <MaterialCommunityIcons name="qrcode" size={24} color="white" />
    ),
    afterIcon: <SwitchBtn />,
  },
  {
    id: "3",
    name: "Online Shopping",
    beforeIcon: <Fontisto name="shopping-store" size={24} color="white" />,
    afterIcon: <SwitchBtn />,
  },
  {
    id: "4",
    name: "Card  Transactions",
    beforeIcon: (
      <MaterialCommunityIcons
        name="credit-card-multiple-outline"
        size={24}
        color="white"
      />
    ),
    afterIcon: (
      <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
    ),
    navigate: "Card Transaction",
  },
  {
    id: "5",
    name: "Tap Pay",
    beforeIcon: (
      <MaterialCommunityIcons
        name="contactless-payment"
        size={24}
        color="white"
      />
    ),
    afterIcon: <SwitchBtn />,
  },
];

const profileSettings = [
  {
    id: "1",
    name: "E-Statement",
    beforeIcon: <FontAwesome6 name="file-text" size={24} color="#0065FF" />,
    afterIcon: (
      <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
    ),
    navigate: "Home",
  },
  {
    id: "2",
    name: "Credit Card",
    beforeIcon: <FontAwesome6 name="credit-card" size={24} color="#0065FF" />,
    afterIcon: (
      <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
    ),
    navigate: "Card",
  },
  {
    id: "3",
    name: "Settings",
    beforeIcon: <Ionicons name="settings-outline" size={24} color="#0065FF" />,
    afterIcon: (
      <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
    ),
    navigate: "Profile",
  },
];
const moreSection = [
  {
    id: "1",
    name: "Language",
    beforeIcon: <MaterialIcons name="g-translate" size={24} color="#0065FF" />,
    afterIcon: (
      <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
    ),
    navigate: null,
  },
  {
    id: "2",
    name: "Country",
    beforeIcon: <FontAwesome6 name="globe" size={24} color="#0065FF" />,
    afterIcon: (
      <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
    ),
    navigate: null,
  },
];

export {cardSettings, moreSection, profileSettings }