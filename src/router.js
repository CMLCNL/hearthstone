import React from 'react';
import Mechanics from './components/Mechanics';
import Cards from './components/Cards';
import CardSearch from './components/Cards/search';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Mechanics" component={Mechanics} />
                <Stack.Screen name="Cards" component={Cards} />
                <Stack.Screen name="CardSearch" component={CardSearch} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default App;
