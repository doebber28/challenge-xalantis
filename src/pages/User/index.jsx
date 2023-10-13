import { useContext } from 'react'
import { View, Text, Button, TouchableHighlight } from 'react-native'

// contexts
import AuthContext from '../../contexts/auth'

// icons
import Ionicons from '@expo/vector-icons/Ionicons'

// styles
import styles from './styles'

export default function User() {

    const { user, signOut } = useContext(AuthContext) 

    function handleSignOut() {
      signOut()
    }

    return (
        <View style={styles.ViewBody}>
            <Ionicons name='person' size={200} color='#be1522' />

            <Text style={styles.TextName}>{user.name}</Text>
            <Text style={styles.TextEmail}>{user.email}</Text>
 
            <TouchableHighlight
                style={styles.ButtonSignOut}
                underlayColor='#edebeb'
                onPress={handleSignOut}
            >
                <Ionicons name='log-out-outline' size={30} color='gray' />
            </TouchableHighlight>
        </View>
    )
}