import { useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { MyContext } from '../Context'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserIcon, Cog6ToothIcon, ArrowRightIcon, } from "react-native-heroicons/solid"
import { ClockIcon, SpeakerWaveIcon } from "react-native-heroicons/outline"

const Home = () => {
    const { val } = useContext(MyContext)
    return (
        <SafeAreaView>
            <View className='h-full px-5 py-5'>
                <View className='flex-row justify-between'>
                    {/* Profile */}
                    <TouchableOpacity>
                        <UserIcon size={30} color='black' />
                    </TouchableOpacity>

                    {/* Settings */}
                    <TouchableOpacity>
                        <Cog6ToothIcon size={30} color='black' />
                    </TouchableOpacity>
                </View>

                {/* Start button */}
                <TouchableOpacity className='mt-52 items-center '>
                    <View className='shadow-lg shadow-black w-52 h-52 justify-center rounded-tl-[200px] rounded-br-[200px] rounded-tr-[150px] rounded-bl-[130px] bg-[#2e2e2e]'>
                        <Text className='text-center text-white text-2xl font-bold'>Start</Text>
                    </View>
                </TouchableOpacity>

                {/* Timer setting */}
                <TouchableOpacity className='items-center mt-10 '>
                    <View className='px-4 py-2 flex-row w-[300px] bg-[#e4e4e4] items-center'>
                        <View>
                            <ClockIcon size={25} color={'black'} />
                        </View>
                        <Text className='ml-auto text-lg mr-4'>10 Minutes</Text>
                        <View>
                            <ArrowRightIcon size={25} color={'black'} />
                        </View>
                    </View>

                </TouchableOpacity>

                {/* Sound setting */}
                <TouchableOpacity className='items-center mt-4'>
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