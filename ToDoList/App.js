import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screen/LoginScreen';
import ToDoListScreen from './src/screen/ToDoListScreen';
import UserScreen from './src/screen/UserScreen';
import { ApplicationProvider } from '@ui-kitten/components';
import AddTaskScreen from './src/screen/AddTaskScreen';
import * as eva from '@eva-design/eva';
import { default as theme } from './custom-theme.json';
const Stack = createStackNavigator();
const App = () => {
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Todolist'
            component={ToDoListScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='UserProfile'
            component={UserScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='AddTask'
            component={AddTaskScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};
export default App;
