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
import { Ionicons } from '@expo/vector-icons'; 

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
    justifyContent: 'space-around',
  },
  itemone:{
    backgroundColor: '#fff',
    color: '#000',
    height:150,
    width:150,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom:22,
  }, 
  Heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
  },
  miniheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:10,
  }
});
