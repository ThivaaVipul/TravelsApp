import { StatusBar } from 'expo-status-bar';
import {ScrollView, Text, View,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants';
import CustomButton from '../components/customButton';
import {router} from 'expo-router';

export default function App() {
  return (
    <SafeAreaView className = "bg-primarybg h-full ">
      <ScrollView contentContainerStyle = {{height : '100%'}}>
        <View className = "w-full items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className = "w-[200px] h-[300px]"
            resizeMode = 'contain'
          />

          <View className = "relative mt-5">
            <Text className = "text-3xl text-black font-bold text-center">Discover Endless Travel with {' '}
            <Text className = "text-secondary-200">Crown Travels</Text></Text>

            <Text className = "text-sm font-pregular text-black-100 mt-7 text-center">Where creativity meets innovation: embark on a 
            journey of limitless exploration with Crown Travels</Text>
          </View>

          
        <CustomButton
          title = "Countinue with Email"
          handlePress = {() => router.push('auth/Sign-in')}
          containerStyles = "w-full mt-7 " 
        />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}
