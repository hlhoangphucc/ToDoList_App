import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import UserScreen from './UserScreen';
import ToDoListScreen from './ToDoListScreen';
import { KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
const { Navigator, Screen } = createBottomTabNavigator();
import { Keyboard } from 'react-native';

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title='Nhiệm Vụ' />
    <BottomNavigationTab title='Cá Nhân' />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen
      name='Todolist'
      component={ToDoListScreen}
      options={{ headerShown: false }}
    />
    <Screen
      name='UserProfile'
      component={UserScreen}
      options={{ headerShown: false }}
    />
  </Navigator>
);

const HomeScreen = () => {
  const [keyboardShown, setKeyboardShown] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardShown(true);
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardShown(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return (
    <TabNavigator
      tabBar={keyboardShown ? null : (props) => <BottomTabBar {...props} />}
    />
  );
};
export default HomeScreen;
