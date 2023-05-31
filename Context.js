import { useState } from 'react'
import { createContext } from 'react'
import { View, Text } from 'react-native'

const MyContext = createContext('')

const ContextProvider = ({ children }) => {
    const [timer, setTimer] = useState(10)
    const [streak, setStreak] = useState(0)
    const [maxStreak, setMaxStreak] = useState(0)
    const [averageSession, setAverageSession] = useState(0)
    const [meditationData, setMeditationData] = useState([])

    const data = () => {
        meditationData.map((d) => (
            console.log(d.session.length)
        ))
    }

    data()

    return (
        <MyContext.Provider value={{
            timer,
            setTimer,
            meditationData,
            setMeditationData,
        }}>
            {children}
        </MyContext.Provider>
    )
}

export { ContextProvider, MyContext }