import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage';
const SaveData = () => {
    const [dataOne, setDataOne] = useState('')
    const [dataTwo, setDataTwo] = useState('')

    let value = [
        {
            date: '1st octobter',
            session: 10,
        }
    ]

    const handleSubmit = async () => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
            console.log(e);
        }
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_Key')
            if (jsonValue != null) {
                const value = JSON.parse(jsonValue)
                console.log(value);
            }
        } catch (e) {
            // error reading value
            console.log(e);
        }
    }

    return (
        <SafeAreaView>
            <View>
                <View className='justify-center items-center h-full'>
                    <Text className='text-xl'>Practicing saving data</Text>

                    <Text className='text-lg'>Saved Data 1: {dataOne}</Text>
                    <Text className='text-lg'>Saved Data 2: {dataTwo}</Text>

                    <View className='flex-row items-center'>
                        <TextInput
                            className='border w-40 px-4 py-2'
                            placeholder='Enter data one'
                            onChangeText={setDataOne}
                            value={dataOne}
                        />
                        <TouchableOpacity onPress={handleSubmit} className='bg-slate-900 py-2 px-2'><Text className='text-white text-lg'>Submit</Text></TouchableOpacity>
                    </View>

                    <View className='flex-row items-center'>
                        <TextInput
                            className='border w-40 px-4 py-2'
                            placeholder='Enter data one'
                            onChangeText={setDataTwo}
                            value={dataTwo}
                        />
                        <TouchableOpacity className='bg-slate-900 py-2 px-2'><Text className='text-white text-lg'>Submit</Text></TouchableOpacity>
                    </View>

                    <TouchableOpacity className='bg-slate-900 py-2 px-2 mt-4' onPress={getData}>
                        <Text className='text-white text-lg'>Get Data</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default SaveData