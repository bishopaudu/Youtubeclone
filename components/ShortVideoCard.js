import {View,Text,Image} from 'react-native'
import * as Icon from 'react-native-feather';

export default function ShortVideoCard({item}){
    console.log(item)
    return (
    <View className='relative h-64 w-40 flex-justify-between'>
        <Image source={item.image} className='h-full w-full rounded-xl absolute'/>
        <View className='flex-row justify-end pt-3 pr-1'>
            <Icon.MoveVertical stroke={'white'} strokeWidth={1.4} height='20'/>
        </View>
        <View className='p-2'>
            <Text className='text-white shadow-lg font-bold text-sm'>
                {item.title}
            </Text>
            <Text className='text-white shadow-md font-extrabold text-xs'>{item.viewCount}</Text>
        </View>
    </View>

    )
}