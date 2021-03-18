import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    
    <WebView
            automaticallyAdjustContentInsets={false}
            source={{uri: 'https:silencetimer.com'}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            style={{marginTop: 25}}
          /> 
  );
}

<StatusBar style='dark' backgroundColor='#0000'/>