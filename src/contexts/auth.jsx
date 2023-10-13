import { createContext, useState, useEffect } from 'react'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// services
import * as auth from '../services/auth'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await AsyncStorage.getItem('@CXAuth:user')
            const storagedToken = await AsyncStorage.getItem('@CXAuth:token')

            if (storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser))
            }
            
            setLoading(false)
        }

        loadStorageData()
    }, [])

    async function signIn(email, password) {
        setLoading(true)

        try {
            const response = await auth.signIn(email, password)

            setUser(response.user)

            await AsyncStorage.setItem('@CXAuth:user', JSON.stringify(response.user))
            await AsyncStorage.setItem('@CXAuth:token', response.token)
        } catch (error) {
            Alert.alert('Ops!', error)
        }

        setLoading(false)
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user: user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext