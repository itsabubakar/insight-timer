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
    const { meditationData, averageSession, numberOfSession, setAverageSession, setNumberOfSession, datesData, setDatesData } = useContext(MyContext)

    let total = 0;
    let numberOfSess = 0
    let averageSess = 0

    let dates = []

    meditationData.map(({ session, date }) => {
        numberOfSess++;
        total = Number(session) + total;
        dates.push(date)
    })

    let d = {};
    dates.forEach((val) => {
        d[val] = { selected: true };
    });

    console.log(d);

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

    const setData = () => {
        setAverageSession(averageSess.toFixed())
        setNumberOfSession(numberOfSess)
        // console.log(averageSession, numberOfSession);
    }

    useEffect(() => {
        setData()
    }, [])


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



                <View className='my-5 mx-5 rounded-lg bg-white' style={{ elevation: 1 }}>
                    <View className='p-2'>

                        <Calendar
                            markingType={'multi-dot'}
                            markedDates={d}
                        />
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}
export default Profile