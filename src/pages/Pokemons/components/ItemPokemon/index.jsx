import { View, Text } from 'react-native'

// icons
import { MaterialCommunityIcons } from '@expo/vector-icons'

// styles
import styles from './styles'

export default function ItemPokemon(props) {

    return (
        <View style={styles.ViewBody}>
            <MaterialCommunityIcons name="pokeball" size={24} color='red' />

            <Text>{`${props.number}- ${props.name}`}</Text>
        </View>
    )
}