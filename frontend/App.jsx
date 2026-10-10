import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollProvider } from './src/context/scroll-context';

import HomeScreen from './src/screens/home-screen';
import MenuScreen from './src/screens/menu-screen';
import CartScreen from './src/screens/cart-screen';
import ScanScreen from './src/screens/scan-screen';
import ProfileScreen from './src/screens/profile-screen';
import NavBar from './src/components/nav-bar';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            tabBar={(props) => <NavBar {...props} />}
            screenOptions={{ 
                headerShown: false,
                animation: 'fade',
            }}
            backBehavior="history"
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Menu" component={MenuScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Scan" component={ScanScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

function App() {
    return (
        <ScrollProvider>
            <SafeAreaProvider>
                <StatusBar barStyle="dark-content" />
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Tabs" component={Tabs} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </ScrollProvider>
    );
}

export default App;