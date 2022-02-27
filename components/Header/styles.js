import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
      position: 'absolute',
      top: 50,
      zIndex:100,   
      flexDirection: 'row' 
    },
    logo:{
        width:100,
        height:20,
        resizeMode: 'contain',
        marginRight: 220,
    },
    menu:{
        height:25,
        width:25,
        resizeMode: 'contain',
    }
})

export default styles;