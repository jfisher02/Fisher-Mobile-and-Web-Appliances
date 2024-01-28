import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
        <Image style={styles.image} source={('./assets/images/myself.jpg')} />
    </View>
    <View style={styles.informationContainer}>
      <Text style={styles.text} >Jaden Fisher</Text>
      <Text style={styles.text} onPress={() => Linking.openURL("tel:+18439028770")}>(843) 902-8770</Text>
      <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/jfisher02/Fisher-Mobile-and-Wireless-Appliances")}>https://github.com/jfisher02/Fisher-Mobile-and-Wireless-Appliances</Text>
      <Text style={styles.text} onPress={() => Linking.openURL("jfishe14@hgtc.edu")}>jfishe14@hgtc.edu</Text>
      </View>
        </SafeAreaView>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 300,
    borderWidth: 3
  },
  informationContainer: {
    flex: 2,
    justifyContent: "center",
    alighItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contact: {
    fontSize: 14,
    marginBottom: 3,
    color: '#555',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});