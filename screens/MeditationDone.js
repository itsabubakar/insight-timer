import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import Progress from '../components/Progress'
import { useContext, useEffect } from 'react'
import { MyContext } from '../Context'
const MeditationDone = () => {
    const navigation = useNavigation()
    const { meditationData, setAverageSession,
        setNumberOfSession } = useContext(MyContext)

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

    let total = 0;
    let numberOfSess = 0
    let averageSess = 0

    meditationData.map(({ session }) => {
        numberOfSess++;
        total = total + session;
    })

    if (total) {
        averageSess = total / numberOfSess;
    } else {
        console.log('meditation data empty');
    }

    let formattedAverageSession = children(averageSess.toFixed())

    const getData = async () => {
        setAverageSession(formattedAverageSession)
        setNumberOfSession(numberOfSess)
    }

    useEffect(() => {
        getData()

    }, [])

    const discardSession = () => {

    }

    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity onPress={navigation.goBack} className='flex-row px-4 py-3 bg-white'>
                    <View className='mr-6'>
                        <ArrowLeftIcon size={35} color={'black'} />
                    </View>
                </TouchableOpacity>

                <View className='bg-white mt-5 -mb-5 mx-5 py-5 rounded-lg' style={{ elevation: 2 }}>
                    <Text className='text-3xl font-bold text-[#5a5959] text-center'>Well done!</Text>
                    <Text className='text-center text-[#777575] mt-8 text-lg'>You meditated for</Text>

                    <Text className='text-[#5a5959] text-center font-semibold mt-8 mb-5 text-2xl'>10 Minutes</Text>
                </View>

                <Progress />

                <View className='mt-5'>
                    <TouchableOpacity onPress={discardSession} className='bg-[#2e2e2e] mx-5 py-2 rounded'>
                        <Text className='text-white text-center text-lg'>Discard Session</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}
export default MeditationDone