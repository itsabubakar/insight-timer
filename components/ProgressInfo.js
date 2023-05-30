import { View, Text } from 'react-native'
const ProgressInfo = ({ header, data, unit }) => {
    return (
        <View className='bg-white px-6 py-4 rounded-md w-[170px] h-[140px]' style={{ elevation: 3 }}>
            {/* Header */}
            <Text className='text-base text-center'>{header}</Text>
            <View className='flex-row items-end my-4 items-center justify-center'>
                <Text className='text-4xl'>{data}</Text>
                <Text className="text-[#7e7e7e] mb-1 ml-2 text-lg">{unit}</Text>
            </View>
        </View>
    )
}
export default ProgressInfo