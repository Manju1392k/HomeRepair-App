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

        <View style={styles.mainbox}></View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
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
  },
});
