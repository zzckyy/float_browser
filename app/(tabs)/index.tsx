import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";


export default function Home() {
  return (
   <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.floatingtoolContainer}>
          <View style={styles.floatingtoolLeft}>
            <input style={styles.input} type="text" />
            <button style={styles.srcbutton}></button>
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
    borderWidth: 0,
  },
  floatingtoolLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 0,
  },

  input: {
    backgroundColor: "#fff",
    padding: 8,
    borderStartStartRadius: 8,
    borderEndStartRadius: 8,
    borderWidth: 0,
    width: 180,
  },

  srcbutton: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderEndEndRadius: 8,
    borderStartEndRadius: 8,
    borderWidth: 0,
    color: "#fff",
    fontWeight: "bold",
    height: 35,
    width: 30,
  },
})