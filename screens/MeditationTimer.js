import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { useContext, useState } from 'react'
import { PauseIcon, PlayIcon } from 'react-native-heroicons/outline'
import { MyContext } from '../Context'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const MeditationTimer = () => {
    const navigation = useNavigation()
    const { timer, meditationData, setMeditationData } = useContext(MyContext)
    const [time, setTime] = useState(timer * 60)
    const [timerPlaying, setTimerPlaying] = useState(true)

    const children = (remainingTime) => {
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60
        let paddedSec = seconds

        if (seconds.toString().length < 2) {
            paddedSec = `${seconds}0`
            return `${minutes}:${paddedSec}`
        }
        return `${minutes}:${seconds}`
    }

    let elapsed = 0

    let data = []


    const handleTimer = () => {
        const value = [
            {
                date: new Date(2023, 5, 15).toJSON().split("T")[0],
                // date: new Date().toJSON().split("T")[0],
                session: elapsed,
            }
        ]
        data = [...meditationData, ...value]

        handleSubmit()
    }

    const handleSubmit = async () => {
        setMeditationData(data)

        try {
            const jsonValue = JSON.stringify(data)
            console.log(jsonValue);
            await AsyncStorage.setItem('@storage_Key', jsonValue)
            navigation.navigate('MeditationDone')

        } catch (e) {
            console.log(e);
        }
    }



    return (
        <SafeAreaView>
            <View className='h-full bg-[#2e2e2e] pt-40'>
                <View className='items-center'>
                    <CountdownCircleTimer
                        size={280}
                        trailColor={'#b4b4b4'}
                        strokeWidth={14}
                        trailStrokeWidth={6}
                        isPlaying={timerPlaying}
                        key={1}
                        duration={time}
                        colors={'#fff'}
                        onComplete={() => console.log('completed')}
                    >
                        {({ remainingTime, elapsedTime }) => {
                            elapsed = elapsedTime.toFixed()
                            return <Text className='text-white text-4xl'>{children(remainingTime)}</Text>
                        }}
                    </CountdownCircleTimer>
                </View>
                <View className='mt-auto pb-20 items-center z-50'>
                    {timerPlaying ?
                        <TouchableOpacity className='border-2 border-white p-2 rounded-full' onPress={() => setTimerPlaying(!timerPlaying)}>
                            <PauseIcon size={70} color={'#fff'} />
                        </TouchableOpacity> :
                        <View className='items-center'>
                            <TouchableOpacity className='w-24 border-2 border-white p-2 rounded-full items-center' onPress={() => setTimerPlaying(!timerPlaying)}>
                                <PlayIcon size={70} color={'#fff'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleTimer} className='bg-blue-400 py-3 mt-8 rounded-md  w-48'>
                                <Text className='text-white text-2xl text-center font-bold'>END</Text>
                            </TouchableOpacity>
                        </View>}

                </View>
            </View>
        </SafeAreaView>
    )
}
export default MeditationTimer