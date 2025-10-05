import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';


interface Props{
    placeholder:string;
    value:string;
    onChangeText?:(text:string)=>void;
    onPress?:()=>void;
}

const SearchBar = ({onPress,placeholder,value,onChangeText}:Props) => {
  return (
    <View className='flex-row items-center flex-1 px-5 py-4 rounded-full bg-dark-100'>
      <Image  source={icons.search} className='w-5 h-5' resizeMode='contain' tintColor="#AB8BFF" />
      <TextInput 
       onPress={onPress}
       placeholder={placeholder}
       value={value}
       onChangeText={onChangeText}
       className='flex-1 ml-2 text-white'
       placeholderTextColor="#A8B5DB"
       
      />
    </View>
  )
}

export default SearchBar