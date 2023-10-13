import { useContext } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

// routes
import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"

// contexts
import AuthContext from '../contexts/auth'

// deletar depois:
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default function Routes() {
    const { signed, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator color='gray' size='large' />
            </View>
        )
    }

    return signed ? <AppRoutes /> : <AuthRoutes />
}