import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { symbolicateLogNow } from "react-native/Libraries/LogBox/Data/LogBoxData";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Feather name="menu" size={30} color="white" />
          <Image
            source={require("./assets/profile.jpg")}
            style={styles.profile}
          />
        </View>

        <View style={styles.Searchnavbar}>
          <TextInput placeholder="Search" style={styles.search} />
        </View>
        <Text style={styles.Heading}>Services</Text>
        <View style={styles.mainbox}>
          <View style={styles.itemone}>
            <Ionicons name="tv" size={100} color="black" />
            <Text style={styles.miniheading}>Tv Repair</Text>
          </View>
          <View style={styles.itemone}>
            <MaterialCommunityIcons
              name="washing-machine"
              size={100}
              color="black"
            />
            <Text style={styles.miniheading}>Washingmachine Repair</Text>
          </View>
          <View style={styles.itemone}>
            <MaterialCommunityIcons
              name="desktop-tower-monitor"
              size={100}
              color="black"
            />
            <Text style={styles.miniheading}>Computer Repair</Text>
          </View>
          <View style={styles.itemone}>
            <MaterialCommunityIcons
              name="ceiling-fan"
              size={100}
              color="black"
            />
            <Text style={styles.miniheading}>Fan Repair</Text>
          </View>
          <View style={styles.itemone}>
            <MaterialCommunityIcons
              name="microsoft-xbox-controller"
              size={100}
              color="black"
            />
            <Text style={styles.miniheading}>Console Repair</Text>
          </View>
          <View style={styles.itemone}>
            <MaterialCommunityIcons
              name="office-building"
              size={100}
              color="black"
            />
            <Text style={styles.miniheading}>Construction Work Repair</Text>
          </View>
        </View>

        <Text style={styles.Heading}>Book Your Service</Text>

        <View style={styles.center}>
          <View style={styles.profilebox}>
            <View>
              <Text style={styles.name}>T.Ramesh</Text>
              <Text style={styles.expertname}>Tv Repair Expert</Text>
              <Text style={styles.miniprice}>Service Cost Start</Text>
              <Text style={styles.price}>Rs:₹500/-</Text>
            </View>
            <Image />
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
  },
  navbar: {
    marginTop: 24,
    width: 400,
    height: 70,
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  Searchnavbar: {
    width: 400,
    height: 70,
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  search: {
    width: 350,
    backgroundColor: "#fff",
    padding: 5,
  },
  mainbox: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  itemone: {
    backgroundColor: "#fff",
    color: "#000",
    height: 150,
    width: 150,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 22,
  },
  Heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  miniheading: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  center: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  profilebox: {
    width: 350,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
  },
  expertname: {
    fontSize: 16,
    marginTop: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  miniprice: {
    fontSize: 13,
    color: "green",
  },
});
