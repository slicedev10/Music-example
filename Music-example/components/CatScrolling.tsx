import React, { useRef } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet,Text,View,Image } from 'react-native';

interface Props {
    data:any
    height?:number,
  }

const { width } = Dimensions.get('window');
const itemWidth = (width / 3) * 2;
const padding = (width - itemWidth) / 2;
const offset = itemWidth;
export const CatScrolling = ({data,height}:Props) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    return (
        <View style={[styles.container,{height:height}]}>
            <ScrollView
                horizontal
                pagingEnabled
                decelerationRate="fast"
                contentContainerStyle={[styles.scrollView,{height:height}]}
                showsHorizontalScrollIndicator={false}
                snapToInterval={offset}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}>
                {data?.map((x, i) => (
                    <Item key={i} i={i} cat={x} height={height} scrollX={scrollX} />
                ))}
            </ScrollView>
        </View>
    );
}

function Item({ i, scrollX,cat,height,title }) {
    const scale = scrollX.interpolate({
        inputRange: [-offset + i * offset, i * offset, offset + i * offset],
        outputRange: [0.75, 1, 0.75],
    });
    return (
    <Animated.View style={[styles.item, { transform: [{ scale }] ,height:height}]} >
        {/* <Text style={{color:'pink'}}>{cat}</Text> */}
        <Image source={{uri:cat.img}} style={{
            height: '100%',
        width:'100%',
        borderRadius:20,position:'absolute',
        borderColor:'#DDDDDD',
        borderWidth:2,}} resizeMode='contain'/>
        <Text style={styles.text}>{cat.title}</Text>
    </Animated.View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:200
    },
    scrollView: {
        paddingHorizontal: padding,
        alignItems: 'center',
        justifyContent:'center',
        height:200,
    },
    item: {
        height: 200,
        width: itemWidth,
        borderRadius:20,
        backgroundColor:'#525252',
        alignItems:'center',
        justifyContent:'center',
        
    },
    itemContent:{
        height:'98%',
        width:'98%',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black'
    },
    text:{
        fontSize:40,
        color:'white',
        fontStyle:'italic',
        textTransform:'uppercase',
        fontWeight:'800'
    }
});