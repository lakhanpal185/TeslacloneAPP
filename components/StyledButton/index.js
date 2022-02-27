import React from 'react';
import { View , Text , Button, Pressable} from 'react-native';
import styles from './styles';

const StyledBotton =(props) =>{
  
  const {val,content,onPrass} = props;
  
    const backgraoundColor = val === "primary" ? '#171A20CC' : '#FFFFFFA6';
    const textcolor = val === "primary" ? '#FFFFFF' : '#171A20';

    return(
        <View style={styles.Container}>
          
          <Pressable 
            style ={[styles.button,{backgroundColor:backgraoundColor}]}
            onPress={() =>onPrass()}
          >
            <Text style={[styles.box1,{color:textcolor}]}>{content}</Text>
          </Pressable>
        </View>
    );
};

export default StyledBotton;