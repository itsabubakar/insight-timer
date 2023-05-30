import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { View, Text, TouchableOpacity, Switch } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomModal from '../components/CustomModal'
import ModalData from '../components/ModalData'
const Settings = () => {
    const navigation = useNavigation()

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [resetModal, setResetModal] = useState(false)
    return (
        <SafeAreaView>

            <View className='h-full'>

                <TouchableOpacity onPress={navigation.goBack} className='flex-row px-4 py-3 bg-white'>
                    <View className='mr-6'>
                        <ArrowLeftIcon size={35} color={'black'} />
                    </View>
                    <Text className='text-xl'>Settings</Text>
                </TouchableOpacity>

                <View className='px-6 pt-2 pb-6 bg-white mt-4'>

                    <View className='flex-row items-center'>
                        <Text className='text-[17px]'>Screen on while meditating</Text>
                        <View className='ml-auto'>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                    <View className='flex-row items-center'>
                        <Text className='text-[17px]'>Play ending bell</Text>
                        <View className='ml-auto'>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

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
                            header={'Reset progress data?'}
                            text={'All of your progress will be reset to 0!'}
                            confirmBtnText={'RESET'}
                            modalVisibility={resetModal}
                            closeModal={setResetModal} />
                    </CustomModal>
                    <TouchableOpacity onPress={() => setResetModal(!resetModal)} className='bg-[#2e2e2e] w-full py-2 rounded'>
                        <Text className='text-white text-lg text-center'>Clear Progress Data</Text>
                    </TouchableOpacity>
                    <Text className='mt-2'>Version 0.0.1</Text>
                </View>
            </View>





        </SafeAreaView >
    )
}
export default Settings