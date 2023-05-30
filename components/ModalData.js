import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const ModalData = ({ header, text, confirmBtnText,
    modalVisibility, closeModal }) => {
    return (
        <SafeAreaView>
            <View className='text-white bg-white rounded-lg px-8 py-6'>
                {/* heading */}
                <Text className='text-xl'>{header}</Text>

                {/* texts */}
                <Text className='text-base mt-4'>{text}</Text>

                {/* buttons */}
                <View className='mt-6 flex-row justify-between px-2'>
                    <TouchableOpacity onPress={() => closeModal(!modalVisibility)}>
                        <Text className='text-lg'>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => closeModal(!modalVisibility)}>
                        <Text className='text-lg'>{confirmBtnText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default ModalData