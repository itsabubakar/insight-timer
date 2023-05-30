import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProgressInfo from '../components/ProgressInfo'
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
                <View className='px-5'>
                    {/* Progress info */}
                    <Text className='text-xl font-semibold py-5'>Progress</Text>
                    <View className='flex-row justify-between'>
                        <ProgressInfo
                            header={'Current Streak'}
                            data={'0'}
                            unit={'days'}
                        />
                        <ProgressInfo
                            header={'Max Streak'}
                            data={'67'}
                            unit={'days'}
                        />
                    </View>

                    <View className='flex-row justify-between mt-3'>
                        <ProgressInfo
                            header={'Sessions'}
                            data={'78'}
                            unit={'Sessions'}
                        />
                        <ProgressInfo
                            header={'Average Session'}
                            data={'12'}
                            unit={'minutes'}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Profile