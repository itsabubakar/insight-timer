import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { useState } from 'react'
import { PauseIcon, PlayIcon } from 'react-native-heroicons/outline'

const MeditationTimer = () => {

    const [time, setTime] = useState(60)
    let key = Math.floor(Math.random() * 60)

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


    return (
        <SafeAreaView>

            <View className='h-full bg-[#2e2e2e] pt-40'>
                <View className='items-center'><CountdownCircleTimer
                    size={280}
                    trailColor={'#b4b4b4'}
                    strokeWidth={14}
                    trailStrokeWidth={6}
                    isPlaying={timerPlaying}
                    key={key}
                    duration={time}
                    colors={'#fff'}
                    onComplete={() => console.log('completed')}
                >
                    {({ remainingTime }) => <Text className='text-white text-4xl'>{children(remainingTime)}</Text>}
                </CountdownCircleTimer>
                </View>
                <View className='mt-auto pb-20 items-center'>
                    {timerPlaying ?
                        <TouchableOpacity className='border-2 border-white p-2 rounded-full' onPress={() => setTimerPlaying(!timerPlaying)}>
                            <PauseIcon size={70} color={'#fff'} />
                        </TouchableOpacity> :
                        <View className='items-center'>
                            <TouchableOpacity className='w-24 border-2 border-white p-2 rounded-full items-center' onPress={() => setTimerPlaying(!timerPlaying)}>
                                <PlayIcon size={70} color={'#fff'} />
                            </TouchableOpacity>
                            <TouchableOpacity className='bg-blue-400 py-3 mt-8 rounded-md  w-48'>
                                <Text className='text-white text-2xl text-center font-bold'>END</Text>
                            </TouchableOpacity>
                        </View>}

                </View>
            </View>
        </SafeAreaView>
    )
}
export default MeditationTimer