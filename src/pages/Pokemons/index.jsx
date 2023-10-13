import { useEffect, useState } from 'react'
import { View, Text, Button, ActivityIndicator, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

// services
import { listPokemon } from '../../services/pokemon'

// styles
import styles from './styles'

// local components
import ItemPokemon from './components/ItemPokemon'

export default function Pokemons() {
    const [pokemons, setPokemons] = useState(null)
    const [loading, setLoading] = useState(true)

    // the data is from a public, testing API. This piece of code will avoid unnecessary requests, not overloading the service!
    useEffect(() => {
        async function loadStorageData() {
            const storagedPokemons = await AsyncStorage.getItem('@CXData:pokemons')

            if (storagedPokemons) {
                setPokemons(JSON.parse(storagedPokemons))
            } else {
                const response = await listPokemon()

                setPokemons(Object.values(response))
                
                await AsyncStorage.setItem('@CXData:pokemons', JSON.stringify(pokemons))
            }
            
            setLoading(false)
        }

        loadStorageData()
    }, [])

    if (loading) {
        return (
            <View>
                <ActivityIndicator color='gray' size='large' />
            </View>
        )
    }

    return (
        <View>
            <FlatList
                contentContainerStyle={styles.FlatListPokemons}
                data={pokemons}
                renderItem={({item, index}) => 
                    <ItemPokemon name={item} number={index + 1} />  
                }
                keyExtractor={index => index}
            />
        </View>
    )
}