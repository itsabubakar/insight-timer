import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProgressInfo from './ProgressInfo'
import { useContext } from 'react'
import { MyContext } from '../Context'
const Progress = () => {
    const { averageSession, numberOfSession } = useContext(MyContext)

    return (
        <SafeAreaView>
            <View className='px-5'>
                {/* Progress info */}
                <Text className='text-xl font-semibold py-5'>Progress</Text>

                <View className='flex-row justify-between mt-3'>
                    <ProgressInfo
                        header={'Sessions'}
                        data={numberOfSession}
                        unit={'Sessions'}
                    />
                    <ProgressInfo
                        header={'Average Session'}
                        data={averageSession}
                        unit={'minutes'}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Progress