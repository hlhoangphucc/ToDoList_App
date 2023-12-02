import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

const Task = (props) => {
  return (
    <Layout style={styles.item}>
      <Layout style={styles.itemLeft}>
        <Layout style={styles.square}></Layout>
        <Layout style={styles.itemContainer}>
          <Layout style={styles.title}>
            <Text style={styles.titleText}>{props.text.title}</Text>
            <Text style={styles.itemText}>{props.text.deadline}</Text>
          </Layout>
          <Layout style={styles.description}>
            <Text style={styles.descriptionText}>{props.text.description}</Text>
          </Layout>
        </Layout>
      </Layout>
      <Layout style={styles.circular}></Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: '#bafc03',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#bafc03',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#8091b0',
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '100%',
    color: 'black',
    fontSize: 11,
  },
  titleText: {
    maxWidth: '100%',
    color: 'black',
    fontSize: 17,
    fontWeight: 700,
  },
  descriptionText: {
    maxWidth: '100%',
    color: 'black',
    fontSize: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#8091b0',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#bafc03',
  },
  itemContainer: {
    flex: 1,
    backgroundColor: '#bafc03',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#bafc03',
  },
  description: {
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: '#bafc03',
  },
});

export default Task;
