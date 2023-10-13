import { useContext, useState } from 'react'
import { View, Image } from 'react-native'

// contexts
import AuthContext from '../../contexts/auth'

// components
import InputEmail from '../../components/InputEmail'
import InputPassword from '../../components/InputPassword'
import ButtonMain from '../../components/ButtonMain'

// styles
import styles from './styles'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useContext(AuthContext)

    function handleSignIn() {
      signIn(email, password)
    }

    return (
        <View style={styles.ViewBody}>
            <Image style={styles.ImageLogo} source={require('../../assets/images/logoXalantis.png')} />

            <InputEmail 
                defaultValue={email}
                onChangeText={(email) => setEmail(email)}
            />

            <InputPassword 
                autoComplete={'current-password'}
                defaultValue={password}
                onChangeText={(password) => setPassword(password)}
            />

            <ButtonMain 
                onPress={handleSignIn}
                title={'Login'}
            />
        </View>
    )
}