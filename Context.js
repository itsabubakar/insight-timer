import { useState } from 'react'
import { createContext } from 'react'
import { View, Text } from 'react-native'

const MyContext = createContext('')

const ContextProvider = ({ children }) => {
    const [timer, setTimer] = useState(10)
    return (
        <MyContext.Provider value={{
            timer,
            setTimer,
        }}>
            {children}
        </MyContext.Provider>
    )
}

export { ContextProvider, MyContext }