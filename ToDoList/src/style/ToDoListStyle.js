import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#1e2f40',
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  bottom: {
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 10,
  },

  icon: {
    width: 50,
    height: 40,
  },
  iconAdd: {
    width: 60,
    height: 60,
  },
  writeTask: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputTask: {
    borderWidth: 0,
    borderRadius: 50,
    backgroundColor: 'white',
    width: 200,
  },
  tasksWrapper: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default styles;
