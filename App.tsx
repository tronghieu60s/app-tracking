/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';
import {WebView} from 'react-native-webview';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {JT_INJECTED_JAVASCRIPT} from './app/utils/executeScripts';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>
        <WebView
          source={{
            uri: 'https://jtexpress.vn/track?billcodes=812128093976',
          }}
          onMessage={event => {
            console.log(JSON.parse(event.nativeEvent.data));
          }}
          injectedJavaScript={JT_INJECTED_JAVASCRIPT}
        />
      </Text>
    </SafeAreaView>
  );
};

export default App;
