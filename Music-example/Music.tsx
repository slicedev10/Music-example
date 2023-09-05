import React, {useState,useEffect} from 'react';
import { Image,  StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { ScrollView } from 'react-native';
import { CatScrolling } from './components/CatScrolling';
import { MusicBtn } from './components/MusicBtn';
import { MusicCat } from './components/MusicCat';

export const Music = () =>{
    const song = 'Song'   
    const artist = 'Artist'
    const  startingMinutes = 0
    const startingSeconds = 0 
  const [mins, setMinutes] = useState(startingMinutes);
  const [secs, setSeconds] = useState(startingSeconds);
  const [running, setRunning] = useState(false);

  const startSong = () => {
    setRunning(true);
  };
  const stopSong = () => {
    setRunning(false);
  };

  useEffect(() => {
 let sampleInterval = setInterval(() => {
        setSeconds(secs + 1);
      if (secs === 59) {
        if (mins === 3) {
          clearInterval(sampleInterval);
        } else {
          setMinutes(mins + 1);
          setSeconds(0);
        }
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
}, [running,secs]);
const [reproducer, setReproducer] = useState(false);
       return (
               <View
               style={styles.container}>
                   <View style={styles.header}>
                        <Icon name='menu' color={'white'} size={30}/>
                        <View style={{flexDirection:'row',width:120,height:'100%',alignItems:'center'}}>
                          <Image source={}
                          resizeMode='contain' style={{height:'100%',width:'100%'}}/>
                        </View>
                        <Icon name='notifications' color={'white'} size={30}/>
                   </View> 
                   <ScrollView style={{flex:1,width:'100%'}}>
                      <View style={styles.section1}>
                       <MusicBtn icon='heart' title='Favs'/>
                       <MusicBtn icon='list' title='Last Playlist'/>
                       <MusicBtn icon='musical-note' title='Last Song'/>
                       <MusicBtn icon='ear' title='Recomendations'/>
                       <MusicBtn icon='shuffle' title='Random'/>
                       <MusicBtn icon='disc' title='Albums'/>
                      </View>
                      <Text style={styles.t1}>your</Text>
                      <View style={{marginVertical:10}}>
                        <CatScrolling data={[
                          {img:'https://cdn.pixabay.com/photo/2017/11/15/09/28/music-player-2951399_1280.jpg',
                           title:'Playlists'},
                          {img:'https://cdn.pixabay.com/photo/2017/11/02/20/31/guitars-2912447_1280.jpg',
                          title:'álbums'},
                          {img:'https://cdn.pixabay.com/photo/2018/11/15/17/09/musical-background-3817618_1280.jpg',
                          title:'Podcasts'}
                        ]} height={150} 
                        />
                      </View>
                      <Text style={styles.t1}>mixer</Text>
                      <View style={styles.section2}>
                        <Image source={}
                         style={styles.img2} resizeMode='cover' />
                         <Text style={[styles.t1,{fontSize:30}]}>have a fun</Text>
                      </View>
                      <Text style={styles.t1}>categories you like</Text>
                      <View style={styles.section3}>
                        <MusicCat title='reggaeton' img='https://cdn.pixabay.com/photo/2016/03/27/22/21/mixer-1284507_1280.jpg'/>
                        <MusicCat title='pop' img='https://cdn.pixabay.com/photo/2021/03/25/19/30/headphones-6123966_1280.jpg'/>
                        <MusicCat title='trap' img='https://cdn.pixabay.com/photo/2022/06/21/21/15/audio-7276511_1280.jpg'/>
                        <MusicCat title='house' img='https://cdn.pixabay.com/photo/2015/04/28/15/10/dj-743802_1280.jpg'/>
                        <MusicCat title='rap' img='https://cdn.pixabay.com/photo/2022/10/03/12/03/microphone-7495739_1280.jpg'/>
                        <MusicCat title='rock' img='https://cdn.pixabay.com/photo/2021/01/01/12/44/concert-5878452_1280.jpg'/>
                      </View>
                      <View style={{width:'100%',height:160}}/>
                   </ScrollView>
                   <TouchableOpacity style={styles.floatingRep} onPress={()=>{setReproducer(true)}}>
                        <View style={styles.floatingImg}>
                            <Image source={}
                            resizeMode='contain' style={styles.img}/>
                        </View>
                        <View style={styles.floatingRepContent}>
                            <Text style={styles.t2}>{song}</Text>
                            <Text style={styles.t3}>{artist}</Text>
                            <Slider
                            style={{width: '90%', height: 20}}
                            value={secs}
                            minimumValue={10}
                            maximumValue={180}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#000000"
                            thumbTintColor='#FFE5EC'
                        />
                        </View>
                        <TouchableOpacity style={styles.floatingPlay} onPress={()=>startSong()}>
                            <Icon name='pause' color={'white'} size={40}/>
                        </TouchableOpacity>
                  </TouchableOpacity>
                  <Modal
                   animationType="fade"
                   transparent={true}
                   visible={reproducer}
                   >
                    <View style={styles.reproducer}>
                        <View style={styles.topModal} >
                          <TouchableOpacity onPress={()=>setReproducer(false)}>
                            <Icon name='chevron-down-outline' color={'black'} size={30}/>
                          </TouchableOpacity>
                          <Text style={styles.t3}>Playing</Text>
                          <Icon name='ellipsis-vertical' color={'black'} size={30}/>
                        </View>
                        <View style={{width:'100%',height:400,
                        justifyContent:'center',alignItems:'center',marginBottom:120}}>
                        <Image source={}
                            resizeMode='contain' style={styles.img}/>
                             <Text style={[styles.t2,{color:'black',paddingVertical:5,fontSize:26}]}>{song}</Text>
                            <Text style={[styles.t3,{paddingVertical:10}]}>{artist}</Text>
                            <Slider
                            style={{width: '90%', height: 20}}
                            value={secs}
                            minimumValue={0}
                            maximumValue={180}
                            minimumTrackTintColor="#FF8FAB"
                            maximumTrackTintColor="#000000"
                            thumbTintColor='#FF8FAB'

                        />
                        </View>
                        <View style={styles.bottomModal} >
                          <View style={{width:'100%',flexDirection:'row',
                                        justifyContent:'space-between',height:70,alignItems:'center'}}>
                            <Icon name='repeat' color={'black'} size={30}/>
                            <Icon name='play-skip-back' color={'black'} size={30}/>
                            <TouchableOpacity style={{backgroundColor:'#FF8FAB',width:80,
                                      height:80,justifyContent:'center',alignItems:'center',borderRadius:80}}>
                              <Icon name='pause' color={'white'} size={60}/>
                            </TouchableOpacity>
                            <Icon name='play-skip-forward' color={'black'} size={30}/>
                            <Icon name='reorder-four' color={'black'} size={30}/>
                          </View>
                        </View>
                    </View>
                  </Modal>
               </View>
             );
   }
           
   
   
   const styles = StyleSheet.create({
             container: {
               alignItems:'center',
               flex:1,
               backgroundColor:'#FFE5EC'
             },
             header:{
               width:'100%',
               height:70,
               backgroundColor:'#FFC2D1',
               borderBottomColor:'grey',
               borderBottomWidth:2,
               flexDirection:'row',
               justifyContent:'space-between',
               alignItems:'center',
               paddingHorizontal:20
             },
             t1:{
               color:'black',
               textAlign:'left',
               fontSize:22,
               fontStyle:'italic',
               textTransform:'uppercase',
               fontWeight:'500',
               marginVertical:10,
               paddingHorizontal:10
             },
             t2:{
               color:'white',
               textAlign:'center',
               fontSize:20,
               fontStyle:'italic',
               textTransform:'uppercase',
               fontWeight:'500'
             },
             t3:{
               color:'gray',
               textAlign:'left',
               fontSize:14,
               fontWeight:'200',
             },
            
             floatingRep:{
               position:'absolute',
               bottom:'8%',
               width:'90%',
               height:70,
               backgroundColor:'#FF8FAB',
               borderColor:'white',
               borderWidth:1,
               flexDirection:'row',
               justifyContent:'center',
               alignContent:'space-around',
               borderRadius:10,
             },
             floatingRepContent:{
                alignItems:'center',
                width:'60%'
             },
             floatingPlay:{
                alignItems:'center',
                justifyContent:'center',
                width:'18%'
             },
             floatingImg:{
                alignItems:'center',
                justifyContent:'center',
                width:'18%'
             },
             img:{
                height:'75%',
                width:'80%',
                borderRadius:5,
                borderWidth:0.5,
                borderColor:'white'
            },
            section1:{
              width:'100%',
              height:230,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent:'space-around',
              alignContent:'space-around',
            },
            section2:{
              width:'100%',
              height:150,
              justifyContent:'center',
              alignItems:'center',
            },
            img2:{
              width:'80%',
              height:'80%',
              borderRadius:20,
              borderColor:'#DDDDDD',
              borderWidth:1,
              position:'absolute'
            },
            reproducer:{
              width:'100%',
              height:'100%',
              backgroundColor:'rgba(255, 229, 236,0.97)',
              alignItems:'center',
              justifyContent:'center'
            },
            topModal:{
              width:'90%',
              height:90,
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems:'center',
              position:'absolute',
              top:0
            },
            bottomModal:{
              width:'85%',
              height:250,
              position:'absolute',
              bottom:0
            },
            section3:{
              width:'100%',
              height:400,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent:'space-around',
              alignContent:'space-around',
            }
           });