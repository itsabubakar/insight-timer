import { useState } from 'react'
import { createContext } from 'react'
import { View, Text } from 'react-native'

const MyContext = createContext('')

const ContextProvider = ({ children }) => {
    const [val, setVal] = useState(5)
    return (
        <MyContext.Provider value={{ val }}>
            {children}
        </MyContext.Provider>
    )
}

export { ContextProvider, MyContext }