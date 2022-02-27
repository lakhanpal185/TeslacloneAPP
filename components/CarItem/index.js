import React from 'react';
import { View , Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledBotton from '../StyledButton';

const CarItem =(props) =>{
    return(
       
        <View style ={styles.carCantainer}>

        <ImageBackground 
          source={require('../../assets/images/ModelS.jpeg')}
          style={styles.image}
         />
 
         <View style={styles.titles}>
 
           <Text style={styles.title}>Model S</Text>
           <Text style={styles.subtitle}>Starting at $79,999 </Text>
           
         </View>
          <StyledBotton 
            val="primary"  
            content="custom order"  
            onPrass={()=>{
              console.warn("custom oreder was prassed");
          }} /> 
            <StyledBotton 
            val="secondary"  
            content="existing invantory"  
            onPrass={()=>{
              console.warn("exitsting invantory was prassed");
          }} /> 
          
       </View>
 

    );
};

export default CarItem;