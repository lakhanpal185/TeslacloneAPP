import React from 'react';
import { View , Text,Image} from 'react-native';
import styles from './styles';

const Header=(props) =>{
    const{ image,imagemenu} = props;
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={image}/>
            <Image style={styles.menu} source={imagemenu}/>
        </View>
    );
};

export default Header;