import { useNavigation } from '@react-navigation/native'
import { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, Switch } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomModal from '../components/CustomModal'
import ModalData from '../components/ModalData'
import { MyContext } from '../Context'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Settings = () => {
    const navigation = useNavigation()
    const { setMeditationData, setAverageSession,
        setNumberOfSession } = useContext(MyContext)

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [resetModal, setResetModal] = useState(false)

    const clearData = async () => {
        setMeditationData([])
        setAverageSession(0)
        setNumberOfSession(0)
        await AsyncStorage.clear()
    }

    return (
        <SafeAreaView>

            <View className='h-full'>

                <TouchableOpacity onPress={navigation.goBack} className='flex-row px-4 py-3 bg-white'>
                    <View className='mr-6'>
                        <ArrowLeftIcon size={35} color={'#45a9d8'} />
                    </View>
                    <Text className='text-xl'>Settings</Text>
                </TouchableOpacity>

                <View className='px-6 pt-2 pb-6 bg-white mt-4'>

                    <View className='mt-2'>
                        <TouchableOpacity onPress={() => console.log('foo')}>
                            <Text className='text-[17px]'>Rate</Text>
                        </TouchableOpacity>
                    </View>
                    <View className='mt-6'>
                        <TouchableOpacity onPress={() => console.log('foo')}>
                            <Text className='text-[17px]'>Feedback</Text>
                        </TouchableOpacity>
                    </View>
                    <View className='mt-6'>
                        <TouchableOpacity onPress={() => setResetModal(!resetModal)}>
                            <Text className='text-[17px]'>Reset progress data</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View className='mt-auto mb-10 items-center mx-5'>
                    <CustomModal
                        isVisible={resetModal}
                        onSwipe={() => setResetModal(!resetModal)}
                    >
                        <ModalData
                            modalFunction={clearData}
                            header={'Reset progress data?'}
                            text={'All of your progress will be reset to 0!'}
                            confirmBtnText={'RESET'}
                            modalVisibility={resetModal}
                            closeModal={setResetModal} />
                    </CustomModal>
                    <TouchableOpacity onPress={() => setResetModal(!resetModal)} className='bg-[#45a9d8] w-full py-2 rounded'>
                        <Text className='text-white text-lg text-center'>Clear Progress Data</Text>
                    </TouchableOpacity>
                    <Text className='mt-2'>Version 0.0.1</Text>
                </View>
            </View>





        </SafeAreaView >
    )
}
export default Settings