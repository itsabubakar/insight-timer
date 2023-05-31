import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProgressInfo from './ProgressInfo'
const Progress = () => {
    return (
        <SafeAreaView>
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
        </SafeAreaView>
    )
}
export default Progress