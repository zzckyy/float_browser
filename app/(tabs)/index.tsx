import { View, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Text} from "react-native";
import { WebView } from "react-native-webview";
import { useState } from "react";

export default function App() {
  const [site, setSite] = useState("https://www.google.com");
  const [input, setInput] = useState("https://www.google.com");

  // function handleChange(text: string) {
  //   setSite(text);
  // }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            value={input}
            onChangeText={setInput}
            style={styles.inputStyle}
          />
          <TouchableOpacity onPress={() => setSite(input)} style={styles.searchbtn}>
            <Text>Update</Text>
          </TouchableOpacity>
        </View>
      
      <WebView style={styles.webview} source={{ uri: site }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  inputContainer: {
    padding: 10,
    marginTop: 20,
    
  },

  inputStyle: {
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "rgba(203, 203, 203, 0.7)",
    paddingHorizontal: 15,
  },

  searchbtn:{
    position: "absolute",
    right: 15,
    top: 15,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 5,
    borderRadius: 16,
  },

  webview:{
    flex: 1,
    width: "100%",
    borderRadius: 20,
    marginBottom: 20,
  }
});