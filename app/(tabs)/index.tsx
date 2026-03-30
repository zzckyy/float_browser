import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";
import { WebView } from "react-native-webview";

export default function InteractiveBrowser() {
  const [url, setUrl] = useState("https://www.google.com");
  const [inputUrl, setInputUrl] = useState("https://google.com");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  const webViewRef = useRef(null);

  // 🔍 GO / SEARCH
  const handleGo = () => {
    let targetUrl = inputUrl.trim();

    if (!targetUrl.includes(".")) {
      targetUrl = `https://www.google.com/search?q=${targetUrl}`;
    } else if (!targetUrl.startsWith("http")) {
      targetUrl = "https://" + targetUrl;
    }

    setUrl(targetUrl);
    setInputUrl(targetUrl);
  };

  // 🔙 NAVIGATION
  const goBack = () => webViewRef.current?.goBack();
  const goForward = () => webViewRef.current?.goForward();
  const reload = () => webViewRef.current?.reload();

  return (
    <SafeAreaView style={styles.container}>
      {/* 🌐 WEBVIEW */}
      <View style={styles.webviewWrapper}>
        <WebView
          ref={webViewRef}
          source={{ uri: url }}
          style={styles.webview}
          pullToRefreshEnabled={true}

          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}

          onLoadProgress={({ nativeEvent }) => {
            setProgress(nativeEvent.progress);
          }}

          onNavigationStateChange={(navState) => {
            setCanGoBack(navState.canGoBack);
            setCanGoForward(navState.canGoForward);
            setUrl(navState.url);
            setInputUrl(navState.url);
          }}
        />

        {/* ⚡ PROGRESS BAR */}
        {loading && (
          <View
            style={[
              styles.progressBar,
              { width: `${progress * 100}%` },
            ]}
          />
        )}

        {/* ⏳ LOADER */}
        {loading && (
          <ActivityIndicator
            style={styles.loader}
            size="large"
            color="#444"
          />
        )}
      </View>

      {/* 🧭 BOTTOM BAR */}
      <View style={styles.bottomBar}>
        {/* 🔍 INPUT */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputUrl}
            onChangeText={setInputUrl}
            onSubmitEditing={handleGo}
            returnKeyType="go"
            autoCapitalize="none"
            keyboardType="url"
            placeholder="Search or type URL..."
          />

          <TouchableOpacity onPress={reload} style={styles.refreshIcon}>
            <View style={styles.dot} />
          </TouchableOpacity>
        </View>

        {/* 🎛️ NAV BUTTONS */}
        <View style={styles.navButtons}>
          <TouchableOpacity
            onPress={goBack}
            disabled={!canGoBack}
            style={[
              styles.navBtn,
              !canGoBack && styles.disabledBtn,
            ]}
          >
            <Text style={styles.btnText}>{"<"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={goForward}
            disabled={!canGoForward}
            style={[
              styles.navBtn,
              !canGoForward && styles.disabledBtn,
            ]}
          >
            <Text style={styles.btnText}>{">"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleGo}
            style={[styles.navBtn, styles.goBtn]}
          >
            <Text style={styles.btnText}>GO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  webviewWrapper: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#ccc",
  },

  webview: {
    flex: 1,
  },

  progressBar: {
    height: 3,
    backgroundColor: "#4caf50",
    position: "absolute",
    top: 0,
    left: 0,
  },

  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -20 }, { translateY: -20 }],
  },

  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#eee",
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ddd",
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
    marginRight: 8,
  },

  input: {
    flex: 1,
    fontSize: 13,
  },

  refreshIcon: {
    width: 20,
    height: 20,
    backgroundColor: "#bbb",
    borderRadius: 5,
  },

  dot: {
    width: 6,
    height: 6,
    backgroundColor: "#555",
    borderRadius: 3,
    alignSelf: "center",
    marginTop: 7,
  },

  navButtons: {
    flexDirection: "row",
    gap: 6,
  },

  navBtn: {
    width: 38,
    height: 38,
    borderRadius: 8,
    backgroundColor: "#999",
    justifyContent: "center",
    alignItems: "center",
  },

  goBtn: {
    backgroundColor: "#333",
  },

  disabledBtn: {
    opacity: 0.3,
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});