import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Position from 'react-native/Libraries/Components/Touchable/Position';
import CarList from './components/CarsList';

export default function App() {
  return (
    <View style={styles.container}>
      
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
