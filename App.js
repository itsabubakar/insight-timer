import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContextProvider } from './Context';
import Home from './screens/Home'
import MeditationTimer from './screens/MeditationTimer';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
          <Stack.Screen name='MeditationTimer' component={MeditationTimer} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>

    </ContextProvider>

  );
}