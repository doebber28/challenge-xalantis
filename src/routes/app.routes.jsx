// icons
import Ionicons from '@expo/vector-icons/Ionicons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

// navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()

// pages
import Pokemons from '../pages/Pokemons'
import Cars from '../pages/Cars'
import User from '../pages/User'

export default function AppRoutes() {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName

                    if (route.name === 'Pokemons') {
                        return <MaterialCommunityIcons name="pokeball" size={size} color={color} />

                    } else if (route.name === 'Cars') {
                        iconName = 'car-outline'

                    } else if (route.name === 'User') {
                        iconName = 'person-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
                tabBarLabel: () => null,
            })}
        >
				<Tab.Screen 
                    name="Pokemons" 
                    component={Pokemons}
                    options={{
                        title: 'Legendary Pokémon'
                    }}
                />
				<Tab.Screen name="Cars" component={Cars} />
				<Tab.Screen 
                    name='User' 
                    component={User} 
                    options={{
                        title: 'My account'
                    }}
                />
        </Tab.Navigator>
    )
}