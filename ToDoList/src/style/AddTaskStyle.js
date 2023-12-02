import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    Top: 20,
  },
  header: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  body: {
    marginTop: 20,
  },
  task: {
    justifyContent: 'space-around',
    marginBottom: 20,
    alignItems: 'center',
  },
  dateContainer: {
    justifyContent: 'space-around',
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  inputTask: {
    borderWidth: 0,
    width: 200,
  },
  date: {
    width: 200,
  },
});

export default styles;
