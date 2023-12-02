import React, { useState } from 'react';
import {
  Layout,
  Text,
  Icon,
  IconRegistry,
  Button,
  Avatar,
  Modal,
  Input,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ImageBackground, Platform, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '../style/UserStyle';
import BottomTabs from './BottomTabs';

const UserScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(true);
  };

  const confirmLogout = () => {
    setModalVisible(false);
    navigation.navigate('Login');
  };

  const cancelLogout = () => {
    setModalVisible(false);
  };

  return (
    <Layout style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-50}
      >
        <IconRegistry icons={EvaIconsPack} />
        <Layout style={styles.header}>
          <Icon style={styles.icon} fill='#dadfe8' name='person' />
          <Text category='h6'>Thông Tin Cá Nhân</Text>
        </Layout>
        <KeyboardAwareScrollView>
          <Layout style={styles.body}>
            <Layout style={styles.avtContainer}>
              <Avatar
                resizeMode={'cover'}
                style={styles.avatar}
                source={require('../assets/avt.png')}
                ImageComponent={ImageBackground}
                size='giant'
              />
            </Layout>
            <Layout style={styles.nameContainer}>
              <Text category='h6'>Hoàng Phúc</Text>
            </Layout>
            <Layout style={styles.inputContainer}>
              <Input placeholder='Hoàng Phúc' style={styles.inputText} />
              <Input
                placeholder='hlhoangphucc@gmail.com'
                style={styles.inputText}
              />
              <Input placeholder='0336755724' style={styles.inputText} />
            </Layout>
          </Layout>
        </KeyboardAwareScrollView>
        <Layout style={styles.bottom}>
          <Button style={styles.btnEditProfile} status='warning'>
            Lưu thông tin
          </Button>
          <Button
            status='danger'
            style={styles.btnLogOut}
            onPress={handleLogout}
          >
            Đăng Xuất
          </Button>
        </Layout>

        <Modal
          visible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
        >
          <Layout style={styles.modalContainer}>
            <Text category='h6'>Bạn chắc chắn muốn đăng xuất?</Text>
            <Layout style={styles.btnContainer}>
              <Button
                onPress={confirmLogout}
                style={styles.btnModal}
                status='info'
              >
                Có
              </Button>
              <Button
                onPress={cancelLogout}
                style={styles.btnModal}
                status='warning'
              >
                Không
              </Button>
            </Layout>
          </Layout>
        </Modal>
      </KeyboardAvoidingView>
      <BottomTabs />
    </Layout>
  );
};

export default UserScreen;
