import { TextInput, View, Text } from 'react-native'
import styles from './styles'

export default function InputEmail(props) {

    return (
        <View style={styles.View}>
            <Text style={styles.Text}>Your email:</Text>

            <TextInput
                style={styles.TextInput}
                onChangeText={props.onChangeText}
                defaultValue={props.defaultValue}
                placeholder='Email...'
                placeholderTextColor='#BBBBBB'
                autoComplete='email'
                inputMode='email'
                autoCapitalize='none'
            />
        </View>
    )
}