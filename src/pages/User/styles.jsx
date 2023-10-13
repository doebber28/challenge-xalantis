import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    ViewBody: {
        flex: 1,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextName: {
        backgroundColor: '#ffffff',
        width: 250,
        fontSize: 18,
        padding: 5,
        borderRadius: 10,
        textAlign: 'center',
    },
    TextEmail: {
        backgroundColor: '#ffffff',
        width: 250,
        fontSize: 16,
        padding: 5,
        borderRadius: 10,
        textAlign: 'center'
    },
    ButtonSignOut: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
    }
})