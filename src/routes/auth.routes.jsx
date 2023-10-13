// navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

// pages
import SignIn from '../pages/SignIn'

export default function AuthRoutes() {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen 
                name='SignIn' 
                component={SignIn} 
                options={{
                    title: 'Login'
                }}
            />
        </Stack.Navigator>
    )
}
