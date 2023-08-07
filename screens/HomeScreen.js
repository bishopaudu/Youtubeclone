import {Image, View,Text,ScrollView,TouchableOpacity,FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import youtubeIcon from '../assets/icons/youtubeIcon.png';
import avatar from '../assets/images/avatar.png'
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import {categories} from '../constants'
import {shortVideos} from '../constants'
//import {videos} from '../constants'
import {useState,useEffect} from 'react';
import shortsIcon from '../assets/icons/shortsIcon.png'
import VideoCard from '../components/VideoCard'
import Shorts from '../components/Shorts'
import fetchTrending from '../api/fetchTrending'

export default function HomeScreen() {
    const[activeCategory,setActiveCategory] =useState('All')
    const[videos,setVideos] = useState([])
    useEffect(() => {
      fetchData()
    },[])
    const fetchData =async() => {
      try {
      const response = await fetchTrending()
      console.log(response[0].channelTitle)
      console.log(response[0].description)
      setVideos(response)
     // let dataresponse = response[5]
      //console.log('channeltitle' + dataresponse.channelTitle)
      } catch (err){
        console.log('error',err)
      }
      
    }
  return (
<View style={{backgroundColor:themeColors.bg}} className='flex-1'>
<SafeAreaView className='flex-row justify-between mx-4'>
  <View className='flex-row items-center space-x-1'>
    <Image source={youtubeIcon} className='h-7 w-10'/>
    <Text className='text-white font-semibold text-xl tracking-tighter'>YouTube</Text>
  </View>
  <View className='flex-row item-center space-x-3'>
    <Icon.Cast stroke='white' strokeWidth={1.2} height='22'/>
    <Icon.Bell stroke='white' strokeWidth={1.2} height='22'/>
    <Icon.Search stroke='white' strokeWidth={1.2} height='22'/>
    <Image source={avatar} className='h-7 w-7 rounded-full'/>
  </View>   
  </SafeAreaView>
  <ScrollView className='flex-1 mt-2' showVerticalScrollIndicator={false}>
      <View className="py-2 pb-3">
            <ScrollView className="px-4" horizontal showsHorizontalScrollIndicator={false}>
              {
                categories.map((category, index)=>{
                  let isActive = category==activeCategory;
                  let textClass = isActive? 'text-black': 'text-white';
                  return (
                    <TouchableOpacity
                      onPress={()=> setActiveCategory(category)}
                      key={index}
                      style={{backgroundColor: isActive? 'white': 'rgba(255,255,255,0.1)'}}
                      className="rounded-md p-1 px-3 mr-2"
                      >
                        <Text className={textClass}>{category}</Text>
                    </TouchableOpacity>
                  )
                })
              }
            </ScrollView>
          </View>
      <View className='py-5 space-y-3 border-t-zinc-700'>
          <View className='mx-4 flex-row items-center space-x-2'>
              <Image source={shortsIcon} className='h-6 w-5'/>
              <Text className='text-white font-semibold text-lg tracking-tighter'>Shorts</Text>
          </View>
         <ScrollView horizontal showHorizontalScrollIndicator={false} className='px-4'>
              {
                  shortVideos.map((item,index) => {
                      return (
                          <Shorts item={item} key={index}/>
                      )
                  })
              }
            </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
            {
              videos.map((video, index)=> <VideoCard video={video} key={index} />)
            }
          </ScrollView>

  </ScrollView>

</View>
  );

}