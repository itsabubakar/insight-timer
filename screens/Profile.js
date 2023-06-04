import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Calendar } from 'react-native-calendars'
import Progress from '../components/Progress'
import { useContext, useEffect } from 'react'
import { MyContext } from '../Context'
const Profile = () => {
    const navigation = useNavigation()
    const { meditationData, setAverageSession,
        setNumberOfSession } = useContext(MyContext)

    let total = 0;
    let numberOfSess = 0
    let averageSess = 0

    meditationData.map(({ session }) => {
        numberOfSess++;
        total = Number(session) + total;
    })

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

    if (total) {
        averageSess = total / numberOfSess;
    } else {
        console.log('meditation data empty');
    }


    let formattedAverageSession = children(averageSess.toFixed())

    meditationData.map(({ date }) => {
        let dateCheck = new Date() - 2
        console.log(dateCheck);
    })

    // const calculateStreak = () => {

    // }


    const getData = async () => {
        setAverageSession(formattedAverageSession)
        setNumberOfSession(numberOfSess)
    }

    useEffect(() => {
        getData()
    }, [])

    const handleClick = () => {
        console.log(meditationData);
    }


    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity onPress={navigation.goBack} className='flex-row px-4 py-3 bg-white'>
                    <View className='mr-6'>
                        <ArrowLeftIcon size={35} color={'black'} />
                    </View>
                    <Text className='text-xl'>Profile</Text>
                </TouchableOpacity>

                <Progress />

                <TouchableOpacity className='mx-5 my-5 bg-black' onPress={handleClick}>
                    <Text className='text-white text-center py-2'>Get data</Text>
                </TouchableOpacity>

                <View className='my-5 mx-5 rounded-lg bg-white' style={{ elevation: 1 }}>
                    <View className='p-2'>

                        <Calendar />
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}
export default Profile