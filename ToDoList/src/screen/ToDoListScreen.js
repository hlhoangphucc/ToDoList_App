import React, { useState, useRef, useEffect } from 'react';
import { Alert } from 'react-native';
import { Layout, Text, IconRegistry, Icon } from '@ui-kitten/components';
import styles from '../style/ToDoListStyle';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useRoute } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import BottomTabs from './BottomTabs';
import Task from './RenderItem';

const ToDoListScreen = ({ navigation }) => {
  const [taskItems, setTaskItems] = useState([
    { deadline: '2023-12-01', description: 'Lau nhà', title: 'Cần làm' },
    {
      deadline: '2023-12-01',
      description: 'Quan trọng',
      title: 'Kiểm tra toán',
    },
    {
      deadline: '2023-12-01',
      description: 'Đi học thêm',
      title: 'Học thêm môn hóa',
    },
    {
      deadline: '2023-12-01',
      description: 'Đi học thêm',
      title: 'Học thêm môn lý lúc 19h',
    },
  ]);
  const route = useRoute();
  const tasks = route.params && route.params.tasks;
  const prevTasksRef = useRef();

  useEffect(() => {
    prevTasksRef.current = taskItems;
    setTaskItems(tasks || taskItems);
  }, [tasks]);

  const goToAddTask = () => {
    navigation.navigate('AddTask', {
      tasks: taskItems,
    });
  };

  const completeTask = (index) => {
    const taskToComplete = taskItems[index];
    Alert.alert(
      'Xác nhận hoàn thành công việc',
      `Bạn đã hoàn thành: ${taskToComplete.title} chưa!`,

      [
        {
          text: 'Chưa',
          style: 'cancel',
        },
        {
          text: 'Rồi',
          onPress: () => {
            let itemsCopy = [...taskItems];
            itemsCopy.splice(index, 1);
            setTaskItems(itemsCopy);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Layout style={styles.container}>
        <Layout style={styles.header}>
          <Icon style={styles.icon} fill='#dadfe8' name='checkmark-circle-2' />
          <Text style={styles.textHeader} category='h5'>
            Công Việc Cần Làm
          </Text>
        </Layout>

        <Layout style={styles.body}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
          >
            {/* Today's Tasks */}
            <Layout style={styles.tasksWrapper}>
              <Layout style={styles.items}>
                {taskItems.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => completeTask(index)}
                    >
                      <Task text={item} />
                    </TouchableOpacity>
                  );
                })}
              </Layout>
            </Layout>
          </ScrollView>
        </Layout>

        <Layout style={styles.bottom}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.writeTask}
          >
            <TouchableOpacity onPress={goToAddTask}>
              <Icon style={styles.iconAdd} fill='#dadfe8' name='plus-circle' />
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </Layout>
        <BottomTabs />
      </Layout>
    </>
  );
};

export default ToDoListScreen;
