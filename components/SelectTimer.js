import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CircularSlider from 'rn-circular-slider'
import { useState, useContext } from 'react';
import { MyContext } from '../Context';
import { useNavigation } from '@react-navigation/native';
const SelectTimer = ({ modalVisibility, closeModal }) => {
    const [value, setValue] = useState(0)
    const { timer, setTimer } = useContext(MyContext)
    const navigation = useNavigation()

    const navigateToMeditationScreen = () => {
        closeModal(!modalVisibility)
        navigation.navigate('MeditationTimer')
    }

    return (
        <View className='items-center'>
            <View className="bg-white rounded-2xl px-8 py-4">
                <CircularSlider
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    step={1}
                    min={1}
                    max={60}
                    value={timer}
                    onChange={value => setTimer(value)}
                    strokeWidth={10}
                    buttonBorderColor="#3FE3EB"
                    buttonFillColor="#fff"
                    buttonStrokeWidth={10}
                    openingRadian={Math.PI / 4}
                    buttonRadius={10}
                    linearGradient={[{ stop: '0%', color: '#3FE3EB' }, { stop: '100%', color: '#7E84ED' }]}
                >
                    <Text className='text-[#2e2e2e] text-4xl'>{timer}</Text>
                    <Text className='-mt-3'>min.</Text>
                </CircularSlider>
                <View className='flex-row justify-between mt-6 mb-4'>
                    <TouchableOpacity onPress={() => closeModal(!modalVisibility)}>
                        <Text className='font-semibold text-base text-[#2e2e2e]'>
                            CANCEL
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigateToMeditationScreen}>
                        <Text className='font-semibold text-base text-[#2e2e2e]'>
                            OK
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>


    )
}
export default SelectTimer