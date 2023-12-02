import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Layout,
  Button,
  Text,
  IconRegistry,
  Icon,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const MenuIcon = (props) => {
  return <Icon name='list-outline' {...props} />;
};
const PersonIcon = (props) => {
  return <Icon name='person' {...props} />;
};
const BottomTabs = () => {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState({ nhiemVu: false, caNhan: false });
  const handleButtonPressIn = (buttonName) => {
    setIsPressed((prevState) => ({ ...prevState, [buttonName]: true }));
  };
  const handleButtonPressOut = (buttonName) => {
    setIsPressed((prevState) => ({ ...prevState, [buttonName]: false }));
  };

  const goToProfileScreen = () => {
    navigation.navigate('UserProfile');
  };
  const goToTodolistScreen = () => {
    navigation.navigate('Todolist');
  };
  return (
    <Layout style={styles.container}>
      <IconRegistry icons={EvaIconsPack} />
      <Button
        style={[
          styles.btn,
          isPressed.nhiemVu && { backgroundColor: 'rgba(0, 0, 10, 0.2)' },
        ]}
        accessoryLeft={MenuIcon}
        onPress={goToTodolistScreen}
        onPressIn={() => handleButtonPressIn('nhiemVu')}
        onPressOut={() => handleButtonPressOut('nhiemVu')}
      >
        <Text>Nhiệm Vụ</Text>
      </Button>
      <Button
        style={[
          styles.btn,
          isPressed.caNhan && { backgroundColor: 'rgba(0, 0, 10, 0.2)' },
        ]}
        accessoryLeft={PersonIcon}
        onPress={goToProfileScreen}
        onPressIn={() => handleButtonPressIn('caNhan')}
        onPressOut={() => handleButtonPressOut('caNhan')}
      >
        <Text>Cá Nhân</Text>
      </Button>
    </Layout>
  );
};
export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: '50%',
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: '#15202b',
  },
});
