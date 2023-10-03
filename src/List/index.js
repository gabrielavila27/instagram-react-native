import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

export default function List(props) {

    function liked(like){
        return like? require('../Images/liked.png') : require('../Images/like.png')
    }

    function showLikes(likes){
        if(likes === 0){
            return ''
        } else if(likes === 1){
            return likes + ' curtida'
        } else{
            return likes + ' curtidas'
        }
    }

 return (
   <View>

        <View style = {styles.viewPerfil}>

            <Image source = {{uri: props.data.imgProfile}} style = {styles.imgPerfil} />

            <TouchableOpacity>
                <Text style = {styles.txtPerfil}>{props.data.name}</Text>
            </TouchableOpacity>
        </View>

        <Image style={styles.publiFeed} source = {{uri:props.data.imgPublish}}/>

        <View style = {styles.viewLCD}>

            <TouchableOpacity>
                <Image style = {styles.imgLCD} source = {liked(props.data.liked)}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style = {styles.imgLCD} source = {require('../Images/commenter.png')}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style = {styles.imgLCD} source = {require('../Images/direct.png')}/>
            </TouchableOpacity>
        </View>

        <Text style = {styles.numLikes}>{showLikes(props.data.numOfLikes)}</Text>

        <View style = {styles.viewDescription}>

            <Text style = {styles.txtDescriptionName}> {props.data.name} </Text>

            <Text style = {styles.txtDescription}> {props.data.description} </Text>

        </View>

   </View>
  );
}

const styles = StyleSheet.create({
    viewPerfil:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgPerfil:{
        resizeMode: 'contain',
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: '3%',
        marginVertical: '2%'
    },
    txtPerfil:{
        fontSize: 15,
        fontWeight: '700'
    },
    publiFeed:{
        width: '100%',
        height: 250
    },
    viewLCD:{
        flexDirection: 'row',
        marginLeft: '2%'
    },
    imgLCD:{
        width:27,
        height: 25,
        marginVertical: '10%',
        marginLeft: '3%'
    },
    numLikes:{
        marginLeft: '3%',
        fontWeight: '700'
    },
    viewDescription:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '2%',
        flexWrap: 'wrap'
        
    },
    txtDescriptionName:{
        fontWeight: '700'
        
    },
    txtDescription:{
        fontWeight: '400',
        
    }
})