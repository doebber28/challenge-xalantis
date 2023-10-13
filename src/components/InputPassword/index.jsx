import { useState } from 'react'
import { View, TextInput, TouchableHighlight, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from './styles'

export default function InputPassword(props) {

    const [secure, setSecure] = useState(true)
    const Icon = <Ionicons name={secure ? 'eye-off-outline' : 'eye-outline'} size={25} color='black' />

    return (
        <View style={styles.View}>
            <Text style={styles.Text}>Your password:</Text>

            <View style={styles.ViewInput}>
                <TextInput 
                    style={styles.TextInput}
                    onChangeText={props.onChangeText}
                    defaultValue={props.defaultValue}
                    placeholder='Password...'
                    autoComplete={props.autoComplete}
                    inputMode='none'
                    secureTextEntry={secure}
                    autoCapitalize='none'
                    placeholderTextColor={props.colorScheme == 'dark' ? '#d9d7de' : '#BBBBBB'}
                />

                <TouchableHighlight
                    style={styles.Button}
                    onPress={() => setSecure(!secure)}
                    underlayColor='gray'
                >
                    {Icon}
                </TouchableHighlight>
            </View>
        </View>
    )
}