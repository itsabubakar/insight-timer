import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { createContext } from 'react'
import { View, Text } from 'react-native'

const MyContext = createContext('')

const ContextProvider = ({ children }) => {
    const [timer, setTimer] = useState(10)
    const [streak, setStreak] = useState([])
    const [maxStreak, setMaxStreak] = useState(0)
    const [averageSession, setAverageSession] = useState(0)
    const [numberOfSession, setNumberOfSession] = useState(0)
    const [meditationData, setMeditationData] = useState([])


    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_Key')
            if (jsonValue != null) {
                const value = JSON.parse(jsonValue)
                setMeditationData(value)
            }
        } catch (e) {
            // error reading value
            console.log(e);
        }
    }

    const streakData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@streak_Key')
            if (jsonValue != null) {
                const value = JSON.parse(jsonValue)
                setMaxStreak(value)
            } else {
                console.log('why ar you running');
                const jsonValue = JSON.stringify(maxStreak)
                await AsyncStorage.setItem('@streak_Key', jsonValue)
            }
        } catch (e) {
            // error reading value
            console.log(e);
        }
    }

    useEffect(() => {
        getData()
        streakData()
    }, [])

    return (
        <MyContext.Provider value={{
            timer,
            setTimer,
            meditationData,
            setMeditationData,
            averageSession, setAverageSession,
            numberOfSession, setNumberOfSession,
            maxStreak, setMaxStreak,
            streak, setStreak
        }}>
            {children}
        </MyContext.Provider>
    )
}

export { ContextProvider, MyContext }