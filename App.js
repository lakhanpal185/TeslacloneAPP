import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { logIfNoNativeHook, logToConsole } from 'react-native/Libraries/Utilities/RCTLog';
import CarList from './components/CarsList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header 
      image={require('./assets/images/logo.png')}
      imagemenu={require('./assets/images/menu.png')}/>
      <CarList/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
