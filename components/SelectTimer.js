import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CircularSlider from 'rn-circular-slider'
// import Slider from '@react-native-community/slider';
import { useState } from 'react';
const SelectTimer = () => {
    const [value, setValue] = useState(0)

    return (
        <View className='items-center'>
            <View className="bg-white rounded-lg px-8 py-4">
                <CircularSlider
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    step={1}
                    min={10}
                    max={60}
                    value={value}
                    onChange={value => setValue(value)}
                    strokeWidth={10}
                    buttonBorderColor="#3FE3EB"
                    buttonFillColor="#fff"
                    buttonStrokeWidth={10}
                    openingRadian={Math.PI / 4}
                    buttonRadius={10}
                    linearGradient={[{ stop: '0%', color: '#3FE3EB' }, { stop: '100%', color: '#7E84ED' }]}
                >
                    <Text className='text-[#2e2e2e] text-4xl'>{value}</Text>
                    <Text className='-mt-3'>min.</Text>
                </CircularSlider>
                <View className='flex-row justify-between mt-6 mb-4'>
                    <TouchableOpacity>
                        <Text className='font-bold text-base text-[#2e2e2e]'>

                            CANCEL
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text className='font-bold text-base text-[#2e2e2e]'>

                            OK
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>


    )
}
export default SelectTimer