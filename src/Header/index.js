import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function Header() {
 return (
   <View style={styles.container}>

        <Image style = {styles.instaLogo} source={require('../Images/Instagram_logo.svg.png')}/>

        <TouchableOpacity style={styles.botaoDirect}>
            <Image style={styles.directLogo} source={require('../Images/direct.png')}/>
        </TouchableOpacity>

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: '8%',
        //width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.3
        },
    instaLogo:{
        resizeMode: 'contain',
        height: '60%',
        width: '30%'
    },
    directLogo:{
        resizeMode: 'contain',
        height: '50%',
        width: '80%',
        marginTop: '4%'
    },
    botaoDirect:{
        width:'9%'
    }
})