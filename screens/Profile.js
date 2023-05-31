import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Calendar } from 'react-native-calendars'
import Progress from '../components/Progress'
const Profile = () => {
    const navigation = useNavigation()
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

                        <Calendar />
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}
export default Profile