import {Text,View,Image,Pressable,StyleSheet} from 'react-native'
import * as Icon from 'react-native-feather';
import formatUtils from '../utils/formatUtils'
import {useState} from 'react'

export default function VideoCard({video}){
    console.log('logging video data .....')
    //console.log(video)
    const[showBottomSheet,setShowBottomSheet] =useState(false)
    return (
        <Pressable>
            <View>
                <Pressable onPress={()=> console.log(video.channelId)}>
                <Image source={{uri:video.thumbnail[0].url}} style={{ height: 200, width: '100%' }}/>
                </Pressable>
                <View style={styles.durationContainer}>
                <View style={{ backgroundColor: 'black', borderRadius: 4}}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12 }}>
                {video.lengthText}
             </Text>
            </View>
                </View>
            </View>
            <View style={styles.subContainer}>
                <Image source={{uri:video.channelThumbnail[0].url}} style={styles.avatarImage}/>
                <View style={styles.titleContainer}>
                    <Text style={{color: 'white',fontWeight:'bold'}}>{video.channelTitle}</Text>
                    <Text style={{ color: 'white', fontSize: 12 }}>{video.channelTitle}• {formatUtils(video.viewCount)} views • {video.publishedText}</Text>
                </View>
                <Pressable onPress={()=>console.log('touched')}>
                <Icon.MoreVertical stroke="white" strokeWidth={2} height={15} />
                </Pressable>
            </View>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    subContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'items-center',
        marginTop:8,
        marginBottom:8  
    },
    titleContainer:{
        flex:1,
        marginVertical: 4

    },
    avatarImage:{
        height:50,
        width:50,
        marginRight:10,
        marginLeft:10,
        borderRadius:50
    },
    durationContainer:{
        flexDirection: 'row', 
        alignItems: 'flex-end', 
        marginRight: 2,
        //marginBottom: 5, 
        marginTop: -6,
       // backgroundColor:'white'
    }

})