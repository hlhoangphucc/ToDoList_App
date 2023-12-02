import React, { useState } from 'react';
import { Layout, Text, Input, Datepicker, Button } from '@ui-kitten/components';
import { Alert } from 'react-native';
import styles from '../style/AddTaskStyle';
import { useRoute } from '@react-navigation/native';

const AddTaskScreen = ({ navigation }) => {
  const [date, setDate] = React.useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const route = useRoute();
  const tasksList = Array.isArray(route.params?.tasks)
    ? route.params.tasks
    : [];

  const handleAddTask = () => {
    if (title.trim() === '' || description.trim() === '') {
      Alert.alert('Thông Báo', 'Vui lòng thêm đủ thông tin', [{ text: 'OK' }]);
      return;
    }

    const newTask = {
      title: title,
      description: description,
      deadline: date.toISOString().split('T')[0],
    };

    const updatedTasksList = [...tasksList, newTask];

    setTasks(updatedTasksList);

    setTitle('');
    setDescription('');
    setDate(new Date());

    navigation.replace('Todolist', { tasks: updatedTasksList });
  };

  return (
    <Layout style={styles.container}>
      <Layout style={styles.header}>
        <Text category='h6'>Thêm công việc mới</Text>
      </Layout>
      <Layout style={styles.body}>
        <Layout style={styles.task}>
          <Input
            textStyle={{ color: 'white', height: 40 }}
            style={styles.inputTask}
            placeholder={'Tiêu đề công việc của bạn'}
            value={title}
            onChangeText={(text) => setTitle(text)}
            label='Tiêu đề công việc'
          />
        </Layout>
        <Layout style={styles.task}>
          <Input
            textStyle={{ color: 'white', height: 40 }}
            style={styles.inputTask}
            placeholder={'Mô tả công việc của bạn'}
            value={description}
            label='Mô tả công việc'
            onChangeText={(text) => setDescription(text)}
          />
        </Layout>
        <Layout style={styles.dateContainer}>
          <Layout style={styles.date}>
            <Datepicker
              date={date}
              onSelect={(nextDate) => setDate(nextDate)}
              placement='bottom'
              size='medium'
              disabled={false}
              label='Chọn thời hạn hoàn thành'
            />
          </Layout>
        </Layout>
      </Layout>
      <Layout style={styles.bottom}>
        <Button status='info' onPress={handleAddTask}>
          Thêm mới
        </Button>
      </Layout>
    </Layout>
  );
};

export default AddTaskScreen;
