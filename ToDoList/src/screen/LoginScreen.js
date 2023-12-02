import React, { useState } from 'react';
import { Image, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { StatusBar } from 'expo-status-bar';
import { Layout, Text, Input, Button } from '@ui-kitten/components';
import styles from '../style/LoginStyle';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);

  const handleEmailInputChange = (text) => {
    setEmail(text);
  };
  const handlePasswordInputChange = (text) => {
    setPassword(text);
  };
  const handleOpressButton = () => {
    navigation.replace('Todolist');
  };

  return (
    <Layout style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-10}
      >
        <Layout style={styles.imgContainer}>
          <Image
            source={require('../assets/bglogin.jpg')}
            style={styles.imgcontent}
          />
        </Layout>
        <Layout style={styles.header}>
          <Text status='primary' style={styles.textHeader}>
            Đăng Nhập
          </Text>
        </Layout>
        <KeyboardAwareScrollView>
          <Layout style={styles.body}>
            <Input
              placeholder='Email'
              value={email}
              onChangeText={handleEmailInputChange}
              style={styles.emailInput}
              status={isFocusedEmail ? 'primary' : 'warning'}
              onFocus={() => setIsFocusedEmail(true)}
              onBlur={() => setIsFocusedEmail(false)}
            />
            <Input
              placeholder='Password'
              value={password}
              onChangeText={handlePasswordInputChange}
              style={styles.passwordInput}
              status={isFocusedPassword ? 'primary' : 'warning'}
              onFocus={() => setIsFocusedPassword(true)}
              onBlur={() => setIsFocusedPassword(false)}
            />
          </Layout>
        </KeyboardAwareScrollView>
        <Layout style={styles.bottom}>
          <Button onPress={handleOpressButton} status={'info'}>
            Đăng Nhập
          </Button>
        </Layout>
      </KeyboardAvoidingView>
    </Layout>
  );
};

export default LoginScreen;
