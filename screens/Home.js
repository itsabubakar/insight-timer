import { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { MyContext } from '../Context'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserIcon, Cog6ToothIcon, ArrowRightIcon, } from "react-native-heroicons/solid"
import { ClockIcon, SpeakerWaveIcon } from "react-native-heroicons/outline"
import CustomModal from '../components/CustomModal'
import { useNavigation } from '@react-navigation/native'
import SelectTimer from '../components/SelectTimer'

const Home = () => {
    const [timerModalVisibility, setTimerModalVisibility] = useState(false)
    const [soundModalVisibility, setSoundModalVisibility] = useState(false)
    const navigation = useNavigation()
    const { timer } = useContext(MyContext)

    const toggleTimerModalVisibility = () => {
        setTimerModalVisibility(!timerModalVisibility)
    }

    const toggleSoundModalVisibility = () => {
        setSoundModalVisibility(!soundModalVisibility)
    }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    return (
        <SafeAreaView>
            <View className='h-full px-5 py-5'>
                <View className='flex-row justify-between'>
                    {/* Profile */}
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <UserIcon size={30} color='black' />
                    </TouchableOpacity>

                    {/* Settings */}
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <Cog6ToothIcon size={30} color='black' />
                    </TouchableOpacity>
                </View>

                {/* Start button */}
                <TouchableOpacity onPress={() => navigation.navigate('MeditationTimer')} className='mt-52 items-center '>
                    <View className='shadow-lg shadow-black w-52 h-52 justify-center rounded-tl-[200px] rounded-br-[200px] rounded-tr-[150px] rounded-bl-[130px] bg-[#2e2e2e]'>
                        <Text className='text-center text-white text-2xl font-bold'>Start</Text>
                    </View>
                </TouchableOpacity>


                {/* Timer setting */}

                <CustomModal
                    isVisible={timerModalVisibility}
                    onSwipe={setTimerModalVisibility}
                >
                    <SelectTimer modalVisibility={timerModalVisibility} closeModal={setTimerModalVisibility} />
                </CustomModal>

                <TouchableOpacity onPress={toggleTimerModalVisibility} className='items-center mt-10 '>
                    <View className='px-4 py-2 flex-row w-[300px] bg-[#e4e4e4] items-center'>
                        <View>
                            <ClockIcon size={25} color={'black'} />
                        </View>
                        <Text className='ml-auto text-lg mr-4'>{timer} Minutes</Text>
                        <View>
                            <ArrowRightIcon size={25} color={'black'} />
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Sound setting */}
                <CustomModal
                    isVisible={soundModalVisibility}
                    onSwipe={setSoundModalVisibility}
                >
                    <View className='bg-white'>
                        <Text>Sound Modal</Text>
                    </View>
                </CustomModal>
                <TouchableOpacity onPress={toggleSoundModalVisibility} className='items-center mt-4'>
                    <View className='px-4 py-2 flex-row w-[300px] bg-[#e4e4e4] items-center'>
                        <View>
                            <SpeakerWaveIcon size={25} color={'black'} />
                        </View>
                        <Text className=' ml-auto text-lg mr-4'>No Sound</Text>
                        <View>
                            <ArrowRightIcon size={25} color={'black'} />
                        </View>
                    </View>

                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}
export default Home