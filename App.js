import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Position from 'react-native/Libraries/Components/Touchable/Position';
import CarItem from './components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
      
      <CarItem/>     

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
