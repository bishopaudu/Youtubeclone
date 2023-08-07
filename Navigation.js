import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/HomeScreen'
import Shorts from './components/Shorts'
import youtubeshortslogo from './assets/icons/youtubeshortslogo.png'
import {Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import Library from './screens/Library'
import Subscriptions from './screens/Subscriptions'
import MakeVideo from './screens/MakeVideo'
import { themeColors } from './theme';

export default function Navigation(){
const Tab = createBottomTabNavigator()
return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown:false,style:{
            backgroundColor: themeColors.bg,
          },
        }} >
            <Tab.Screen name='Home' component={HomeScreen} options={{
          tabBarLabel:'Home',
          tabBarIcon:() => <MaterialIcons name="home-filled" size={24} color="black" />
        }} />
            <Tab.Screen name='Shorts' component={Shorts} options={{
                tabBarLabel:'Shorts',
                tabBarIcon:() => <Image
                source={youtubeshortslogo}
                fadeDuration={0}
                style={{ width: 20, height: 20, tintColor:'black' }}
              />
            }}/>   

            <Tab.Screen name='makeVideo' component={MakeVideo} options={{
                tabBarLabel:'MakeVideo',
                tabBarIcon:() =><AntDesign name="pluscircleo" size={24} color="black" />
            }}/>

            <Tab.Screen name='subscriptions' component={Subscriptions} options={{
                tabBarLabel:'subscriptions',
                tabBarIcon:() => <MaterialIcons name="subscriptions" size={24} color="black" />
            }}/>

            <Tab.Screen name='library' component={Library} options={{
                tabBarLabel:'library',
                tabBarIcon:()=> <MaterialIcons name="video-library" size={24} color="black" />
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
)
}