import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { createContext } from 'react'

const MyContext = createContext('')

const ContextProvider = ({ children }) => {
    const [timer, setTimer] = useState(10)
    const [averageSession, setAverageSession] = useState(0)
    const [numberOfSession, setNumberOfSession] = useState(0)
    const [meditationData, setMeditationData] = useState([])
    const [datesData, setDatesData] = useState([])


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

    useEffect(() => {
        getData()
    }, [])

    return (
        <MyContext.Provider value={{
            timer,
            setTimer,
            meditationData,
            setMeditationData,
            averageSession, setAverageSession,
            numberOfSession, setNumberOfSession,
            datesData, setDatesData
        }}>
            {children}
        </MyContext.Provider>
    )
}

export { ContextProvider, MyContext }