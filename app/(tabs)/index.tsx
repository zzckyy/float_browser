import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";


export default function Home() {
  return (
   <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.floatingtoolContainer}>
          <View style={styles.floatingtoolLeft}>
            <input type="text" />
            <button>Submit</button>
          </View>
        
      </View>
    
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  floatingtoolContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 20,
    left: "5%",
    borderRadius: 16,
    width: "90%",
    backgroundColor: "#b1b1b1",
    padding: 16,
  },
  floatingtoolLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
})