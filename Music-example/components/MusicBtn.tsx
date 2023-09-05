import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props { 
    onPress?:any,
    icon:string,
    title:string
  }


export const MusicBtn= ({icon,onPress,title}:Props) =>{
  
return (
        
    <TouchableOpacity style={styles.container}>
        <View style={styles.icon}>
            <Icon name={icon} size={30} color={'black'}/>
        </View>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
        
        
);
}
        


const styles = StyleSheet.create({
         
    container:{
        width:'40%',
        height:60,
        backgroundColor:'#FF8FAB',
        borderRadius:5,
        flexDirection:'row'
      },
      text:{
        fontSize:17,
        width:'70%',
        textAlign:'left',
        textAlignVertical:'center',
        color:'white',
        fontWeight:'300',
        paddingHorizontal:10,
        fontStyle:'italic'
      },
      icon:{
        width:'30%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',

      }
        });