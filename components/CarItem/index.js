import React from 'react';
import { View , Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledBotton from '../StyledButton';

const CarItem =(props) =>{

  const { name , subtitle ,subtitleCTA, image} = props;

    return(
       
        <View style ={styles.Cantainer}>

        <ImageBackground 
          source={image}
          style={styles.image}
         />
 
         <View style={styles.titles}>
 
           <Text style={styles.title}>{name}</Text>
           <Text style={styles.subtitle}>
             {subtitle}
             <Text style={styles.subtitleCTA}>{subtitleCTA}</Text>
           </Text>
           
         </View>
         <View style={styles.buttonContainer}>
          
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
              console.warn("exitsting invantory was p rassed");
          }} /> 

         </View>

       </View>
 

    );
};

export default CarItem;