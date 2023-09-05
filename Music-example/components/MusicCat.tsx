import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props { 
    onPress?:any,
    title:string,
    img:any
  }


export const MusicCat= ({onPress,title,img}:Props) =>{
  
return (
        
    <TouchableOpacity style={styles.container}>
        <Image source={{uri:img}}
        style={styles.img} resizeMode='contain'/>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
        
        
);
}
        


const styles = StyleSheet.create({
         
    container:{
        width:'40%',
        height:120,
        backgroundColor:'#FF8FAB',
        borderRadius:10,
        justifyContent:'center',
        borderColor:'#DDDDDD',
        borderWidth:1,
      },
      text:{
        fontSize:22,
        fontStyle:'italic',
        textTransform:'uppercase',
        fontWeight:'500',
        marginVertical:10,
        paddingHorizontal:10,
        textAlign:'center',
        textAlignVertical:'center',
        color:'white',
        backgroundColor:'rgba(0,0,0,0.4)'
      },
      icon:{
        width:'30%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
      },
      img:{
      width:'100%',
      height:'100%',
      borderRadius:10,
      position:'absolute'}
        });