// navigation
import { NavigationContainer } from '@react-navigation/native'

// routes
import Routes from './src/routes'

// contexts
import { AuthProvider } from './src/contexts/auth'

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</NavigationContainer>
	)
}