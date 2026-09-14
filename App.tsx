import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home-screen';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <SafeAreaProvider>
            <StatusBar barStyle="dark-content" />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default App;