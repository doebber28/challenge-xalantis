import { TouchableHighlight, Text } from 'react-native'
import styles from './styles'

export default function ButtonMain(props) {

    return (
        <TouchableHighlight
            style={styles.Button}
            onPress={props.onPress}
            underlayColor={'#a8111c'}
        >
            <Text style={styles.Text}>
                {props.title}
            </Text>
        </TouchableHighlight>
    )
}